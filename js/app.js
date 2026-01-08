/**
 * Thumbnail Studio - Main Application Entry Point
 * AI-powered YouTube thumbnail prompt generator
 *
 * @author Thumbnail Studio
 * @version 3.0.0
 * @license MIT
 */

// Import all modules
import { getState, setLanguage, setAr, setPosition, setGender, setTextPos, saveUndoState, addFavorite as addFavoriteState, removeFavorite as removeFavoriteState, clearFavorites as clearFavoritesState, getFavorites, getHistory } from './modules/core/state.js';
import * as storage from './modules/core/storage.js';
import { getPreset, getPositionPreset } from './modules/core/presets.js';
import { dataPool } from './data/index.js';
import * as generator from './modules/features/generator.js';
import * as favorites from './modules/features/favorites.js';
import * as history from './modules/features/history.js';
import * as fonts from './modules/features/fonts.js';
import { getCurrentSettings, applySettings, copyResult as copyResultUtil, showToast } from './modules/utils/helpers.js';
import { drawPreview, setupCanvasDrag } from './modules/ui/canvas.js';
import { renderUI, updateHud, updateModeButtons, updateArButtons, updatePositionButtons, updateGenderButtons, updateTextPosButtons, toggleLanguage, resetAll, undo, updatePromptStats, setupKeyboardShortcuts } from './modules/ui/renderer.js';

// Make drawPreview available globally for font module
window.drawPreview = drawPreview;

// =========================================
// GLOBAL FUNCTIONS (for HTML onclick handlers)
// =========================================

window.setMode = async function(mode) {
    updateModeButtons(mode);
    updateHud();
    await drawPreview();
};

window.setAr = async function(ar) {
    updateArButtons(ar);
    await drawPreview();
};

window.setPos = async function(pos) {
    updatePositionButtons(pos);
    updateHud();
    await drawPreview();
};

window.setGender = async function(gender) {
    updateGenderButtons(gender);
    updateHud();
    await drawPreview();
};

window.setTxtPos = async function(pos) {
    updateTextPosButtons(pos);
    updateHud();
    await drawPreview();
};

window.toggleLang = async function() {
    toggleLanguage();
    const { currentMode } = getState();
    updateModeButtons(currentMode);
    await drawPreview();
};

window.resetAll = resetAll;

window.toggleFavorite = function() {
    favorites.toggleFavorite(getState().currentLang);
};

window.toggleFavoritesDropdown = function() {
    favorites.toggleFavoritesDropdown(getState().currentLang);
};

window.clearAllFavorites = function() {
    favorites.clearAllFavoritesFn(getState().currentLang);
};

window.applyPreset = async function(presetName) {
    const preset = getPreset(presetName);
    if (!preset) return;

    saveUndoState(getCurrentSettings());

    const { currentLang } = getState();
    const fields = ['expr', 'outfit', 'obj', 'bg', 'txtColor', 'light', 'angle', 'fx'];

    fields.forEach(f => {
        const el = document.getElementById(`inp-${f}`);
        if (el && preset[f]) {
            // Store English value for prompt generation
            el.dataset.enValue = preset[f];

            // Find and display localized value
            const enData = dataPool['en'][f];
            const trData = dataPool['tr'][f];

            if (enData && trData) {
                const index = enData.findIndex(item => item.l === preset[f]);
                if (index !== -1 && trData[index]) {
                    el.value = currentLang === 'tr' ? trData[index].l : enData[index].l;
                } else {
                    // If not found in datasets, use the preset value directly
                    el.value = preset[f];
                }
            } else {
                el.value = preset[f];
            }
        }
    });

    // Handle txt field separately (user input, stays as-is)
    const txtEl = document.getElementById('inp-txt');
    if (txtEl && preset.txt) {
        txtEl.value = preset.txt;
    }

    // Apply font from preset
    if (preset.font && typeof fonts.setSelectedFont === 'function') {
        await fonts.setSelectedFont(preset.font);
    }

    // Apply positions from preset
    if (preset.charPos) {
        updatePositionButtons(preset.charPos);
    }
    if (preset.txtPos) {
        updateTextPosButtons(preset.txtPos);
    }

    updateHud();
    await drawPreview();

    const message = currentLang === 'tr'
        ? `${presetName.toUpperCase()} şablonu uygulandı!`
        : `${presetName.toUpperCase()} preset applied!`;
    showToast(message);
};

window.applyPositionPreset = async function(positionPresetName) {
    const positionPreset = getPositionPreset(positionPresetName);
    if (!positionPreset) return;

    saveUndoState(getCurrentSettings());

    // Apply positions from position preset
    if (positionPreset.charPos) {
        updatePositionButtons(positionPreset.charPos);
    }
    if (positionPreset.txtPos) {
        updateTextPosButtons(positionPreset.txtPos);
    }

    updateHud();
    await drawPreview();

    const { currentLang } = getState();
    const label = currentLang === 'tr' ? positionPreset.name : positionPreset.nameEn;
    const message = currentLang === 'tr'
        ? `${label} pozisyonu uygulandı!`
        : `${label} position applied!`;
    showToast(message);
};

window.generate = function() {
    const settings = getCurrentSettings();
    const prompt = generator.generatePrompt(settings);

    const output = document.getElementById('output');
    if (output) {
        output.value = prompt;
        output.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    history.addToHistory(prompt);
    history.renderHistoryList();

    const stats = generator.calculatePromptStats(prompt);
    updatePromptStats(stats);
};

window.copyResult = function() {
    copyResultUtil(getState().currentLang);
};

window.clearHistory = function() {
    history.clearAllHistory(getState().currentLang);
    history.renderHistoryList();
};

window.exportSettings = function() {
    const settings = getCurrentSettings();
    storage.exportSettings(settings, getFavorites(), getHistory());

    const { currentLang } = getState();
    const message = currentLang === 'tr' ? 'Ayarlar dışa aktarıldı!' : 'Settings exported!';
    showToast(message);
};

window.importSettings = function() {
    document.getElementById('import-file').click();
};

window.handleImport = async function(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const settings = await storage.parseImportFile(file);

        // Apply settings
        if (settings.mode) updateModeButtons(settings.mode);
        if (settings.ar) updateArButtons(settings.ar);
        if (settings.pos) updatePositionButtons(settings.pos);
        if (settings.gender) updateGenderButtons(settings.gender);
        if (settings.txtPos) updateTextPosButtons(settings.txtPos);

        const fields = ['expr', 'outfit', 'obj', 'bg', 'txt', 'light', 'angle', 'fx'];
        fields.forEach(f => {
            const el = document.getElementById(`inp-${f}`);
            if (el && settings[f]) el.value = settings[f];
        });

        // Apply font setting
        if (settings.font && typeof fonts.setSelectedFont === 'function') {
            await fonts.setSelectedFont(settings.font);
        }

        updateHud();
        await drawPreview();

        // Import favorites and history if available
        if (settings.favorites && Array.isArray(settings.favorites)) {
            // Clear and add new favorites
            while (getFavorites().length > 0) {
                removeFavoriteState(0);
            }
            settings.favorites.forEach(f => addFavoriteState(f));
            storage.saveFavorites(settings.favorites);
        }

        if (settings.history && Array.isArray(settings.history)) {
            // Import history
            history.clearAllHistory('en'); // Use any lang to bypass confirm
            settings.history.forEach(h => history.addToHistory(h));
        }

        history.renderHistoryList();

        const { currentLang } = getState();
        const message = currentLang === 'tr' ? 'Ayarlar içe aktarıldı!' : 'Settings imported!';
        showToast(message);
    } catch (err) {
        const { currentLang } = getState();
        const message = currentLang === 'tr' ? 'Hatalı dosya formatı!' : 'Invalid file format!';
        showToast(message);
    }

    event.target.value = '';
};

window.undo = undo;

// =========================================
// INITIALIZATION
// =========================================

async function init() {
    // Load data from storage
    const historyData = storage.loadHistory();
    historyData.forEach(h => history.addToHistory(h));
    history.renderHistoryList();

    const favoritesData = storage.loadFavorites();
    favoritesData.forEach(f => addFavoriteState(f));
    storage.saveFavorites(favoritesData);

    // Initialize UI
    renderUI();
    updateModeButtons('ref');
    updateArButtons('16:9');
    updatePositionButtons('right');
    updateGenderButtons('male');
    updateTextPosButtons('auto');

    // Initialize font selector
    await fonts.initFontSelector(getState().currentLang);

    await drawPreview();

    // Setup canvas drag handlers
    setupCanvasDrag(
        (pos) => { window.setPos(pos); },
        (pos) => { window.setTxtPos(pos); }
    );

    // Setup modal listeners
    favorites.setupModalListeners(getState().currentLang);

    // Setup keyboard shortcuts
    setupKeyboardShortcuts(
        window.generate,
        window.copyResult,
        window.undo
    );

    // Setup favorites dropdown close on outside click
    document.addEventListener('click', function (e) {
        const dropdown = document.getElementById('favorites-dropdown');
        const wrapper = e.target.closest('.favorites-wrapper');
        if (!wrapper && dropdown && dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    });

    // Update favorites count
    const favCount = document.getElementById('fav-count');
    if (favCount) favCount.innerText = getFavorites().length;

    // Update hud with initial state
    updateHud();
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export favorites functions for global access
window.applyFavorite = favorites.applyFavorite;
window.deleteFavorite = favorites.deleteFavorite;

// Make modules available globally for debugging
window.ThumbnailStudio = {
    state: getState,
    generator,
    favorites,
    history,
    utils: {
        getCurrentSettings,
        applySettings,
        showToast
    }
};
