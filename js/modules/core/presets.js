/**
 * Presets Module - Preset management
 */

import { presets } from '../../data/index.js';

/**
 * Get all preset names
 */
export function getPresetNames() {
    return Object.keys(presets);
}

/**
 * Get preset by name
 */
export function getPreset(name) {
    return presets[name];
}

/**
 * Check if preset exists
 */
export function hasPreset(name) {
    return name in presets;
}

/**
 * Get all presets
 */
export function getAllPresets() {
    return { ...presets };
}
