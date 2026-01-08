/**
 * Storage Module - LocalStorage operations
 */

import { getState, clearHistory as clearHistoryState, getHistory } from './state.js';

const STORAGE_KEYS = {
    HISTORY: 'ts_history',
    FAVORITES: 'thumbStudioFavorites'
};

/**
 * Load history from localStorage
 */
export function loadHistory() {
    try {
        const stored = localStorage.getItem(STORAGE_KEYS.HISTORY);
        if (stored) {
            return JSON.parse(stored);
        }
    } catch (error) {
        console.error('Error loading history:', error);
    }
    return [];
}

/**
 * Save history to localStorage
 */
export function saveHistory(history) {
    try {
        localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
    } catch (error) {
        console.error('Error saving history:', error);
    }
}

/**
 * Load favorites from localStorage
 */
export function loadFavorites() {
    try {
        const saved = localStorage.getItem(STORAGE_KEYS.FAVORITES);
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (error) {
        console.error('Error loading favorites:', error);
    }
    return [];
}

/**
 * Save favorites to localStorage
 */
export function saveFavorites(favorites) {
    try {
        localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    } catch (error) {
        console.error('Error saving favorites:', error);
    }
}

/**
 * Clear all data from localStorage
 */
export function clearAllData() {
    try {
        localStorage.removeItem(STORAGE_KEYS.HISTORY);
        localStorage.removeItem(STORAGE_KEYS.FAVORITES);
    } catch (error) {
        console.error('Error clearing data:', error);
    }
}

/**
 * Export settings as JSON file
 */
export function exportSettings(settings, favorites, history) {
    const exportData = {
        ...settings,
        favorites,
        history
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'thumbnail-studio-settings.json';
    a.click();
    URL.revokeObjectURL(url);
}

/**
 * Parse imported settings file
 */
export function parseImportFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const settings = JSON.parse(e.target.result);
                resolve(settings);
            } catch (err) {
                reject(new Error('Invalid file format'));
            }
        };
        reader.onerror = () => reject(new Error('Error reading file'));
        reader.readAsText(file);
    });
}
