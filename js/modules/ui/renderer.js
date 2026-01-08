/**
 * UI Renderer Module - Handles all UI rendering and updates
 */

import { getState, setLanguage, setMode, setAr, setPosition, setGender, setTextPos } from '../core/state.js';
import { dataPool } from '../../data/index.js';
import { saveUndoState, popUndoState, hasUndoStates } from '../core/state.js';
import { showToast } from '../utils/helpers.js';

/**
 * Render all UI elements based on current language
 */
export function renderUI() {
    const { currentLang } = getState();
    const d = dataPool[currentLang];

    // Static Texts
    setText('txt-ref', d.modeRefTxt);
    setText('txt-rnd', d.modeRndTxt);
    setText('btn-gen', d.btnGen);
    setText('txt-reset', d.txtReset);
    setText('txt-history', d.txtHistory);
    setText('btn-clear-hist', currentLang === 'tr' ? "TÜMÜNÜ SİL" : "CLEAR ALL");

    // New UI texts
    setText('txt-fav', d.txtFav);
    setText('txt-export', d.txtExport);
    setText('txt-import', d.txtImport);
    setText('txt-presets-title', d.txtPresets);
    setText('txt-shortcut-gen', d.shortcutLabels.gen);
    setText('txt-shortcut-copy', d.shortcutLabels.copy);

    // Favorites dropdown texts
    setText('txt-fav-list', currentLang === 'tr' ? 'FAVORİLER' : 'FAVORITES');
    setText('txt-my-favs', currentLang === 'tr' ? 'FAVORİLERİM' : 'MY FAVORITES');
    setText('fav-clear-all', currentLang === 'tr' ? 'TÜMÜNÜ SİL' : 'CLEAR ALL');

    // Update gender labels
    setText('txt-gender-male', d.genderLabels.male);
    setText('txt-gender-female', d.genderLabels.female);
    setText('txt-gender-char', d.genderLabels.character);

    // Update text position labels
    setText('txt-txtpos-left', d.txtPosLabels.left);
    setText('txt-txtpos-top', d.txtPosLabels.top);
    setText('txt-txtpos-auto', d.txtPosLabels.auto);
    setText('txt-txtpos-bottom', d.txtPosLabels.bottom);
    setText('txt-txtpos-right', d.txtPosLabels.right);

    // Update preset labels
    Object.keys(d.presetLabels).forEach(key => {
        const el = document.getElementById(`preset-${key}`);
        if (el) el.innerText = d.presetLabels[key];
    });

    // Update position preset labels
    if (d.positionPresetLabels) {
        Object.keys(d.positionPresetLabels).forEach(key => {
            const el = document.getElementById(`pos-${key}`);
            if (el) el.innerText = d.positionPresetLabels[key];
        });
    }

    // Update position presets title
    if (d.txtPositionPresets) {
        setText('txt-position-presets-title', d.txtPositionPresets);
    }

    // Update stat labels
    setText('stat-chars-label', d.statLabels.chars);
    setText('stat-words-label', d.statLabels.words);
    setText('stat-tokens-label', d.statLabels.tokens);

    // Update position control labels
    const charPosEl = document.getElementById('lbl-char-pos');
    const txtPosEl = document.getElementById('lbl-txt-pos');
    if (charPosEl) charPosEl.innerText = currentLang === 'tr' ? 'KARAKTER' : 'CHARACTER';
    if (txtPosEl) txtPosEl.innerText = currentLang === 'tr' ? 'YAZI' : 'TEXT';

    // Loop through all categories
    const cats = ['expr', 'outfit', 'obj', 'bg', 'txt', 'txtColor', 'light', 'angle', 'fx'];

    cats.forEach((cat, i) => {
        const inputEl = document.getElementById(`inp-${cat}`);
        if (inputEl && inputEl.value === "") {
            inputEl.placeholder = d.placeholders[i];
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
                input.value = valueToSet;

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
    const { currentLang } = getState();
    const d = dataPool[currentLang];

    // Update position button labels
    setText('txt-pos-left', d.posLabels.left);
    setText('txt-pos-center', d.posLabels.center);
    setText('txt-pos-right', d.posLabels.right);
}

/**
 * Update mode description
 */
export function updateModeDescription() {
    const { currentMode, currentLang } = getState();
    const d = dataPool[currentLang];
    const modeDescEl = document.getElementById('mode-desc');
    if (modeDescEl) {
        modeDescEl.innerText = currentMode === 'ref' ? d.modeDescRef : d.modeDescRnd;
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
    renderUI();
    updateModeDescription();
    updateHud();
}

/**
 * Reset all settings
 */
export function resetAll() {
    const { currentLang } = getState();
    const message = currentLang === 'tr' ? 'Tüm ayarlar sıfırlansın mı?' : 'Reset all settings?';
    if (!confirm(message)) return;

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
        if (el) el.value = '';
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
        showToast(getState().currentLang === 'tr' ? 'Geri alındı!' : 'Undone!');
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
