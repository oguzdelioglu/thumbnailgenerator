/**
 * State Management Module
 * Central state store for the application
 */

// Application state
export const state = {
    currentLang: 'tr',
    currentMode: 'ref',
    currentAr: '16:9',
    currentPos: 'right',
    currentGender: 'male',
    currentTxtPos: 'auto',
    promptHistory: [],
    favorites: [],
    undoStack: [],
    isFavorite: false
};

/**
 * Get current state values
 */
export function getState() {
    return { ...state };
}

/**
 * Set language
 */
export function setLanguage(lang) {
    state.currentLang = lang;
}

/**
 * Set mode (ref/rnd)
 */
export function setMode(mode) {
    state.currentMode = mode;
}

/**
 * Set aspect ratio
 */
export function setAr(ar) {
    state.currentAr = ar;
}

/**
 * Set position (left/center/right)
 */
export function setPosition(pos) {
    state.currentPos = pos;
}

/**
 * Set gender (male/female/character)
 */
export function setGender(gender) {
    state.currentGender = gender;
}

/**
 * Set text position (left/top/auto/bottom/right)
 */
export function setTextPos(pos) {
    state.currentTxtPos = pos;
}

/**
 * Add state to undo stack
 */
export function saveUndoState(settings) {
    state.undoStack.push(settings);
    if (state.undoStack.length > 20) {
        state.undoStack.shift();
    }
}

/**
 * Get last undo state
 */
export function popUndoState() {
    return state.undoStack.pop();
}

/**
 * Check if undo stack has items
 */
export function hasUndoStates() {
    return state.undoStack.length > 0;
}

/**
 * Add prompt to history
 */
export function addToHistory(prompt) {
    state.promptHistory.unshift(prompt);
    if (state.promptHistory.length > 20) {
        state.promptHistory.pop();
    }
}

/**
 * Remove prompt from history by index
 */
export function removeFromHistory(index) {
    state.promptHistory.splice(index, 1);
}

/**
 * Clear all history
 */
export function clearHistory() {
    state.promptHistory = [];
}

/**
 * Get history
 */
export function getHistory() {
    return [...state.promptHistory];
}

/**
 * Add favorite
 */
export function addFavorite(settings) {
    state.favorites.push(settings);
}

/**
 * Remove favorite by index
 */
export function removeFavorite(index) {
    state.favorites.splice(index, 1);
}

/**
 * Clear all favorites
 */
export function clearFavorites() {
    state.favorites = [];
}

/**
 * Get favorites
 */
export function getFavorites() {
    return [...state.favorites];
}

/**
 * Set favorite status
 */
export function setIsFavorite(value) {
    state.isFavorite = value;
}

/**
 * Get favorite status
 */
export function getIsFavorite() {
    return state.isFavorite;
}

/**
 * Check if current settings match any favorite
 */
export function checkFavoriteStatus(currentSettings) {
    const hash = JSON.stringify(currentSettings);
    state.isFavorite = state.favorites.some(f => JSON.stringify(f) === hash);
    return state.isFavorite;
}
