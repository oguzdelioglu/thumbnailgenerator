/**
 * UI Renderer Module - Handles all UI rendering and updates
 */

import { getState, setLanguage, setMode, setAr, setPosition, setGender, setTextPos } from '../core/state.js';
import { dataPool } from '../../data/index.js';
import { saveUndoState, popUndoState, hasUndoStates } from '../core/state.js';
import { showToast } from '../utils/helpers.js';
import { t, getLocale, setLocale } from '../../i18n/index.js';

/**
 * Render all UI elements based on current language
 */
export function renderUI() {
    const { currentLang } = getState();
    const d = dataPool[currentLang];

    // Static Texts - using i18n
    setText('txt-ref', t('ui.modeRef'));
    setText('txt-rnd', t('ui.modeRnd'));
    setText('btn-gen', t('ui.btnGen'));
    setText('txt-reset', t('ui.txtReset'));
    setText('txt-history', t('ui.txtHistory'));
    setText('btn-clear-hist', t('ui.btnClearAll'));

    // New UI texts
    setText('txt-fav', t('ui.txtFav'));
    setText('txt-export', t('ui.txtExport'));
    setText('txt-import', t('ui.txtImport'));
    setText('txt-presets-title', t('ui.txtPresets'));
    setText('txt-shortcut-gen', t('shortcuts.gen'));
    setText('txt-shortcut-copy', t('shortcuts.copy'));

    // Favorites dropdown texts
    setText('txt-fav-list', t('ui.txtFavorites'));
    setText('txt-my-favs', t('ui.txtMyFavs'));
    setText('fav-clear-all', t('ui.btnClearAll'));

    // Update gender labels
    setText('txt-gender-male', t('gender.male'));
    setText('txt-gender-female', t('gender.female'));
    setText('txt-gender-char', t('gender.character'));

    // Update text position labels
    setText('txt-txtpos-left', t('textPos.left'));
    setText('txt-txtpos-top', t('textPos.top'));
    setText('txt-txtpos-auto', t('textPos.auto'));
    setText('txt-txtpos-bottom', t('textPos.bottom'));
    setText('txt-txtpos-right', t('textPos.right'));

    // Update preset labels
    Object.keys(d.presetLabels).forEach(key => {
        const el = document.getElementById(`preset-${key}`);
        if (el) el.innerText = t(`presets.${key}`);
    });

    // Update position preset labels
    const positionKeyMap = {
        'focus-left': 'focusLeft',
        'focus-center': 'focusCenter',
        'focus-right': 'focusRight',
        'classic-rule': 'classicRule',
        'center-symmetry': 'centerSymmetry',
        'dramatic-diagonal': 'dramaticDiagonal',
        'text-top-hero': 'textTopHero',
        'side-by-side': 'sideBySide'
    };

    Object.keys(positionKeyMap).forEach(key => {
        const el = document.getElementById(`pos-${key}`);
        if (el) el.innerText = t(`positionPresets.${positionKeyMap[key]}`);
    });

    // Update position presets title
    setText('txt-position-presets-title', t('ui.txtPositionPresets'));

    // Update stat labels
    setText('stat-chars-label', t('stats.chars'));
    setText('stat-words-label', t('stats.words'));
    setText('stat-tokens-label', t('stats.tokens'));

    // Update position control labels
    const charPosEl = document.getElementById('lbl-char-pos');
    const txtPosEl = document.getElementById('lbl-txt-pos');
    if (charPosEl) charPosEl.innerText = t('hud.characterPos');
    if (txtPosEl) txtPosEl.innerText = t('hud.textPos');

    // Loop through all categories and update placeholders
    const cats = ['expr', 'outfit', 'obj', 'bg', 'txt', 'txtColor', 'light', 'angle', 'fx'];

    cats.forEach((cat) => {
        const inputEl = document.getElementById(`inp-${cat}`);
        if (inputEl) {
            const placeholderKeyMap = {
                'expr': 'placeholders.expr',
                'outfit': 'placeholders.outfit',
                'obj': 'placeholders.obj',
                'bg': 'placeholders.bg',
                'txt': 'placeholders.txt',
                'light': 'placeholders.light',
                'angle': 'placeholders.angle',
                'fx': 'placeholders.fx',
                'txtColor': 'placeholders.txtColor'
            };
            inputEl.placeholder = t(placeholderKeyMap[cat]);
        }

        // Render Chips
        renderCategoryChips(cat, currentLang);
    });

    // Update mode description
    updateModeDescription();
}

/**
 * Set text content of element
 */
function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
}

/**
 * Render category chips
 */
function renderCategoryChips(cat, currentLang) {
    const container = document.getElementById(`list-${cat}`);
    const countSpan = document.getElementById(`count-${cat}`);
    if (!container) return;

    container.innerHTML = '';

    const listData = dataPool[currentLang][cat];
    const valuesData = dataPool['en'][cat];

    if (countSpan) countSpan.innerText = listData.length;

    listData.forEach((item, index) => {
        const chip = document.createElement('div');
        chip.className = 'chip';

        const iconSpan = document.createElement('span');
        iconSpan.className = 'chip-icon';
        iconSpan.innerText = item.i;

        const labelText = document.createTextNode(item.l);

        chip.appendChild(iconSpan);
        chip.appendChild(labelText);

        // Value to Set: EN description for Prompt, Localized for Text and txtColor
        let valueToSet = valuesData[index].l;
        if (cat === 'txt' || cat === 'txtColor') valueToSet = item.l;

        chip.onclick = async () => {
            const input = document.getElementById(`inp-${cat}`);
            if (input) {
                // Show localized value in input (for display)
                input.value = item.l;
                // Store English value in data attribute (for prompt generation)
                input.dataset.enValue = valuesData[index].l;

                // Visual feedback
                input.style.borderColor = 'var(--accent)';
                input.style.boxShadow = '0 0 15px rgba(56, 189, 248, 0.4)';
                setTimeout(() => {
                    input.style.borderColor = 'var(--glass-border)';
                    input.style.boxShadow = 'none';
                }, 300);
                updateHud();

                // Redraw canvas for color changes
                if (cat === 'txtColor' && window.drawPreview) {
                    await window.drawPreview();
                }
            }
        };
        container.appendChild(chip);
    });
}

/**
 * Update HUD (mode description, position labels)
 */
export function updateHud() {
    // Update position button labels
    setText('txt-pos-left', t('position.left'));
    setText('txt-pos-center', t('position.center'));
    setText('txt-pos-right', t('position.right'));
}

/**
 * Update mode description
 */
export function updateModeDescription() {
    const { currentMode } = getState();
    const modeDescEl = document.getElementById('mode-desc');
    if (modeDescEl) {
        modeDescEl.innerText = currentMode === 'ref' ? t('ui.modeDescRef') : t('ui.modeDescRnd');
    }
}

/**
 * Update mode buttons
 */
export function updateModeButtons(mode) {
    setMode(mode);
    const btnRef = document.getElementById('btn-ref');
    const btnRnd = document.getElementById('btn-rnd');
    if (btnRef) btnRef.className = mode === 'ref' ? 'switch-item active' : 'switch-item';
    if (btnRnd) btnRnd.className = mode === 'rnd' ? 'switch-item active' : 'switch-item';
    updateModeDescription();
}

/**
 * Update aspect ratio buttons
 */
export function updateArButtons(ar) {
    setAr(ar);
    const ar169 = document.getElementById('ar-169');
    const ar916 = document.getElementById('ar-916');
    if (ar169) ar169.className = ar === '16:9' ? 'switch-item active ar-btn' : 'switch-item ar-btn';
    if (ar916) ar916.className = ar === '9:16' ? 'switch-item active ar-btn' : 'switch-item ar-btn';
}

/**
 * Update position buttons
 */
export function updatePositionButtons(pos) {
    setPosition(pos);
    const posLeft = document.getElementById('pos-left');
    const posCenter = document.getElementById('pos-center');
    const posRight = document.getElementById('pos-right');
    if (posLeft) posLeft.className = pos === 'left' ? 'switch-item pos-btn active' : 'switch-item pos-btn';
    if (posCenter) posCenter.className = pos === 'center' ? 'switch-item pos-btn active' : 'switch-item pos-btn';
    if (posRight) posRight.className = pos === 'right' ? 'switch-item pos-btn active' : 'switch-item pos-btn';
}

/**
 * Update gender buttons
 */
export function updateGenderButtons(gender) {
    setGender(gender);
    const genderMale = document.getElementById('gender-male');
    const genderFemale = document.getElementById('gender-female');
    const genderChar = document.getElementById('gender-char');
    if (genderMale) genderMale.className = gender === 'male' ? 'switch-item gender-btn active' : 'switch-item gender-btn';
    if (genderFemale) genderFemale.className = gender === 'female' ? 'switch-item gender-btn active' : 'switch-item gender-btn';
    if (genderChar) genderChar.className = gender === 'character' ? 'switch-item gender-btn active' : 'switch-item gender-btn';
}

/**
 * Update text position buttons
 */
export function updateTextPosButtons(txtPos) {
    setTextPos(txtPos);
    const positions = ['left', 'top', 'auto', 'bottom', 'right'];
    positions.forEach(p => {
        const el = document.getElementById(`txtpos-${p}`);
        if (el) el.className = txtPos === p ? 'switch-item txt-pos-btn active' : 'switch-item txt-pos-btn';
    });
}

/**
 * Toggle language
 */
export function toggleLanguage() {
    const { currentLang } = getState();
    const newLang = currentLang === 'tr' ? 'en' : 'tr';
    setLanguage(newLang);
    setLocale(newLang); // Update i18n locale
    renderUI();
    updateModeDescription();
    updateHud();
}

/**
 * Reset all settings
 */
export function resetAll() {
    if (!confirm(t('messages.resetConfirm'))) return;

    const settings = {
        mode: getState().currentMode,
        ar: getState().currentAr,
        pos: getState().currentPos,
        gender: getState().currentGender,
        txtPos: getState().currentTxtPos,
        expr: '', outfit: '', obj: '', bg: '', txt: '', light: '', angle: '', fx: ''
    };
    saveUndoState(settings);

    const fields = ['expr', 'outfit', 'obj', 'bg', 'txt', 'txtColor', 'light', 'angle', 'fx'];
    fields.forEach(f => {
        const el = document.getElementById(`inp-${f}`);
        if (el) {
            el.value = '';
            // Clear enValue as well
            delete el.dataset.enValue;
        }
    });

    const output = document.getElementById('output');
    if (output) output.value = '';

    updateModeButtons('ref');
    updatePositionButtons('right');
    updateGenderButtons('male');
    updateTextPosButtons('auto');
    updateHud();

    const statsEl = document.getElementById('prompt-stats');
    if (statsEl) statsEl.style.display = 'none';
}

/**
 * Undo last action
 */
export function undo() {
    if (!hasUndoStates()) return;
    const state = popUndoState();
    if (state) {
        applySettingsFromUndo(state);
        showToast(t('messages.undone'));
    }
}

/**
 * Apply settings from undo state
 */
function applySettingsFromUndo(settings) {
    if (settings.mode) updateModeButtons(settings.mode);
    if (settings.ar) updateArButtons(settings.ar);
    if (settings.pos) updatePositionButtons(settings.pos);
    if (settings.gender) updateGenderButtons(settings.gender);
    if (settings.txtPos) updateTextPosButtons(settings.txtPos);

    const fields = ['expr', 'outfit', 'obj', 'bg', 'txt', 'txtColor', 'light', 'angle', 'fx'];
    fields.forEach(f => {
        const el = document.getElementById(`inp-${f}`);
        if (el && settings[f]) el.value = settings[f];
    });

    updateHud();
}

/**
 * Update prompt stats display
 */
export function updatePromptStats(stats) {
    setText('stat-chars', stats.chars);
    setText('stat-words', stats.words);
    setText('stat-tokens', stats.tokens);

    const statsEl = document.getElementById('prompt-stats');
    if (statsEl) {
        statsEl.style.display = stats.chars > 0 ? 'flex' : 'none';
    }
}

/**
 * Setup keyboard shortcuts
 */
export function setupKeyboardShortcuts(onGenerate, onCopy, onUndo) {
    document.addEventListener('keydown', (e) => {
        const isCmdOrCtrl = e.metaKey || e.ctrlKey;

        // Cmd+Enter / Ctrl+Enter = Generate
        if (isCmdOrCtrl && e.key === 'Enter') {
            e.preventDefault();
            if (onGenerate) onGenerate();
        }

        // Cmd+C / Ctrl+C = Copy (if no text selected)
        if (isCmdOrCtrl && e.key === 'c' && !e.shiftKey) {
            const selection = window.getSelection();
            if (!selection.toString() && onCopy) {
                e.preventDefault();
                onCopy();
            }
        }

        // Cmd+Z / Ctrl+Z = Undo
        if (isCmdOrCtrl && e.key === 'z' && !e.shiftKey) {
            e.preventDefault();
            if (onUndo) onUndo();
        }
    });
}
