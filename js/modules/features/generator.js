/**
 * Generator Module - Prompt generation logic
 */

import { getState } from '../core/state.js';
import { dataPool } from '../../data/index.js';

/**
 * Generate AI prompt based on current settings
 */
export function generatePrompt(settings) {
    const {
        expr = "excited expression",
        outfit = "casual clothes",
        obj = "looking at camera",
        bg = "cinematic background",
        txt = "VIDEO"
    } = settings;

    const {
        light = "dramatic cinematic lighting",
        angle = "eye-level shot",
        fx = "sharp focus"
    } = settings;

    const { currentMode, currentGender, currentPos, currentTxtPos, currentAr } = getState();

    // Gender-based subject
    let subject = "";
    let pronoun = "They are";

    if (currentMode === 'rnd') {
        if (currentGender === 'male') {
            subject = "a charismatic young male content creator";
            pronoun = "He is";
        } else if (currentGender === 'female') {
            subject = "an attractive young female content creator";
            pronoun = "She is";
        } else {
            subject = "a futuristic android/robot character";
            pronoun = "It is";
        }
    } else {
        if (currentGender === 'male') {
            subject = "the male content creator";
            pronoun = "He is";
        } else if (currentGender === 'female') {
            subject = "the female content creator";
            pronoun = "She is";
        } else {
            subject = "the character";
            pronoun = "They are";
        }
    }

    // Dynamic position text
    let positionText = getPositionText(currentPos);
    let textPosition = getTextPositionText(currentPos, currentTxtPos);

    const prompt = `A hyper-realistic, high-ctr YouTube thumbnail featuring ${subject} with an expression of ${expr}, making direct eye contact. ${pronoun} wearing ${outfit}. ${positionText}. In the foreground/hands, interacting with ${obj}. The background is a ${bg}. The scene is illuminated by ${light}. Camera angle is ${angle}. Visual effects: ${fx}. ${textPosition}, large, bold, 3D typography with a glossy metallic texture and sharp white outline reads "${txt}". Shot with Sony A7S III, f/1.8 aperture, highly detailed, photorealistic, 8k, ray tracing, global illumination, --ar ${currentAr} --v 6.0`;

    return prompt;
}

/**
 * Get position description text
 */
function getPositionText(pos) {
    if (pos === 'left') {
        return "Positioned on the left side of the frame";
    } else if (pos === 'center') {
        return "Positioned in the center of the frame";
    } else {
        return "Positioned on the right side of the frame (rule of thirds)";
    }
}

/**
 * Get text position description text
 */
function getTextPositionText(charPos, txtPos) {
    if (txtPos === 'auto') {
        if (charPos === 'left') {
            return "On the right side";
        } else if (charPos === 'center') {
            return "At the top";
        } else {
            return "On the left side";
        }
    } else if (txtPos === 'left') {
        return "On the left side";
    } else if (txtPos === 'right') {
        return "On the right side";
    } else if (txtPos === 'top') {
        return "At the top";
    } else if (txtPos === 'bottom') {
        return "At the bottom";
    }
    return "On the left side";
}

/**
 * Calculate prompt statistics
 */
export function calculatePromptStats(text) {
    const chars = text.length;
    const words = text.trim().split(/\s+/).filter(w => w).length;
    const tokens = Math.ceil(chars / 4); // Rough approximation

    return { chars, words, tokens };
}
