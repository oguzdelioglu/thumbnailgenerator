/**
 * i18n Module - Internationalization System
 *
 * Provides translation functionality and locale management
 * Uses a master language approach (English) with translations for UI
 */

import trLocale from './locales/tr.js';
import enLocale from './locales/en.js';

// Available locales
export const locales = {
    tr: { code: 'tr', name: 'Türkçe', flag: '🇹🇷', rtl: false },
    en: { code: 'en', name: 'English', flag: '🇬🇧', rtl: false }
};

// Locale data storage
const localeData = {
    tr: trLocale,
    en: enLocale
};

// Current locale state (default: Turkish)
let currentLocale = 'tr';

/**
 * Get current locale code
 */
export function getLocale() {
    return currentLocale;
}

/**
 * Set current locale
 */
export function setLocale(localeCode) {
    if (!locales[localeCode]) {
        console.warn(`Locale "${localeCode}" not found, falling back to "tr"`);
        localeCode = 'tr';
    }
    currentLocale = localeCode;

    // Save to localStorage
    try {
        localStorage.setItem('thumbnailstudio_locale', localeCode);
    } catch (e) {
        console.warn('Could not save locale to localStorage');
    }

    // Dispatch event for UI updates
    window.dispatchEvent(new CustomEvent('localeChange', { detail: { locale: localeCode } }));
}

/**
 * Initialize locale from localStorage or browser settings
 */
export function initLocale() {
    // Try localStorage first
    const saved = localStorage.getItem('thumbnailstudio_locale');
    if (saved && locales[saved]) {
        currentLocale = saved;
        return;
    }

    // Fall back to browser language
    const browserLang = navigator.language?.split('-')[0];
    if (browserLang && locales[browserLang]) {
        currentLocale = browserLang;
    }
}

/**
 * Get locale info
 */
export function getLocaleInfo(localeCode) {
    return locales[localeCode] || locales.tr;
}

/**
 * Get all available locales
 */
export function getAvailableLocales() {
    return Object.values(locales);
}

/**
 * Translation function - get translated string by key
 * Supports dot notation (e.g., 'ui.generate')
 *
 * @param {string} key - Translation key (supports dot notation)
 * @param {object} params - Parameters for string interpolation
 * @param {string} locale - Optional locale code (defaults to current)
 * @returns {string} Translated string
 */
export function t(key, params = {}, locale = null) {
    const loc = locale || currentLocale;
    const translations = localeData[loc];

    if (!translations) {
        console.warn(`Locale "${loc}" not found`);
        return key;
    }

    // Support dot notation (e.g., 'ui.generate' -> translations.ui.generate)
    const value = key.split('.').reduce((obj, k) => obj?.[k], translations);

    if (value === undefined) {
        // Fallback to English if translation missing
        if (loc !== 'en') {
            const enValue = key.split('.').reduce((obj, k) => obj?.[k], localeData.en);
            if (enValue !== undefined) {
                return interpolate(enValue, params);
            }
        }
        console.warn(`Translation key "${key}" not found for locale "${loc}"`);
        return key;
    }

    return interpolate(value, params);
}

/**
 * String interpolation for translations
 * Replaces {{var}} with params.var
 */
function interpolate(str, params) {
    if (!params || Object.keys(params).length === 0) {
        return str;
    }

    return str.replace(/\{\{(\w+)\}\}/g, (match, key) => {
        return params[key] !== undefined ? params[key] : match;
    });
}

/**
 * Check if a translation key exists
 */
export function hasTranslation(key, locale = null) {
    const loc = locale || currentLocale;
    const translations = localeData[loc];

    if (!translations) return false;

    const value = key.split('.').reduce((obj, k) => obj?.[k], translations);
    return value !== undefined;
}

/**
 * Get all translation keys for a namespace
 */
export function getTranslationKeys(namespace, locale = null) {
    const loc = locale || currentLocale;
    const translations = localeData[loc];

    if (!translations || !translations[namespace]) {
        return [];
    }

    return Object.keys(translations[namespace]);
}

// Initialize locale on module load
initLocale();
