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
import { getPreset } from './modules/core/presets.js';
import * as generator from './modules/features/generator.js';
import * as favorites from './modules/features/favorites.js';
import * as history from './modules/features/history.js';
import * as fonts from './modules/features/fonts.js';
import { getCurrentSettings, applySettings, copyResult as copyResultUtil, showToast } from './modules/utils/helpers.js';
import { drawPreview, setupCanvasDrag } from './modules/ui/canvas.js';
import { renderUI, updateHud, updateModeButtons, updateArButtons, updatePositionButtons, updateGenderButtons, updateTextPosButtons, toggleLanguage, resetAll, undo, updatePromptStats, setupKeyboardShortcuts } from './modules/ui/renderer.js';

// =========================================
// GLOBAL FUNCTIONS (for HTML onclick handlers)
// =========================================

window.setMode = function(mode) {
    updateModeButtons(mode);
    updateHud();
    drawPreview();
};

window.setAr = function(ar) {
    updateArButtons(ar);
    drawPreview();
};

window.setPos = function(pos) {
    updatePositionButtons(pos);
    updateHud();
    drawPreview();
};

window.setGender = function(gender) {
    updateGenderButtons(gender);
    updateHud();
    drawPreview();
};

window.setTxtPos = function(pos) {
    updateTextPosButtons(pos);
    updateHud();
    drawPreview();
};

window.toggleLang = function() {
    toggleLanguage();
    const { currentMode } = getState();
    updateModeButtons(currentMode);
    drawPreview();
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

window.applyPreset = function(presetName) {
    const preset = getPreset(presetName);
    if (!preset) return;

    saveUndoState(getCurrentSettings());

    const fields = ['expr', 'outfit', 'obj', 'bg', 'txt', 'light', 'angle', 'fx'];
    fields.forEach(f => {
        const el = document.getElementById(`inp-${f}`);
        if (el) el.value = preset[f] || '';
    });

    updateHud();
    drawPreview();

    const { currentLang } = getState();
    const message = currentLang === 'tr'
        ? `${presetName.toUpperCase()} şablonu uygulandı!`
        : `${presetName.toUpperCase()} preset applied!`;
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

        updateHud();
        drawPreview();

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

function init() {
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
    fonts.initFontSelector(getState().currentLang);

    drawPreview();

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
