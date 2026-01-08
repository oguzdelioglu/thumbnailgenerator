/**
 * Presets Module - Preset management
 */

import { presets, positionPresets } from '../../data/index.js';

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

/**
 * Get position preset by name
 */
export function getPositionPreset(name) {
    return positionPresets[name];
}

/**
 * Get all position presets
 */
export function getAllPositionPresets() {
    return { ...positionPresets };
}

/**
 * Get all position preset names
 */
export function getPositionPresetNames() {
    return Object.keys(positionPresets);
}
