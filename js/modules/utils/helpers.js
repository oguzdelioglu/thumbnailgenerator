/**
 * Helper utilities module
 */

import { getState, setMode, setAr, setPosition, setGender, setTextPos } from '../core/state.js';
import { getSelectedFont, setSelectedFont } from '../features/fonts.js';

/**
 * Get current settings from form inputs
 */
export function getCurrentSettings() {
    const selectedFont = getSelectedFont();

    // Helper function to get English value from input
    const getInputValue = (id) => {
        const input = document.getElementById(id);
        if (!input) return '';

        // If there's an English value stored, use it; otherwise use the visible value
        return input.dataset.enValue || input.value;
    };

    return {
        mode: getState().currentMode,
        ar: getState().currentAr,
        pos: getState().currentPos,
        gender: getState().currentGender,
        txtPos: getState().currentTxtPos,
        expr: getInputValue('inp-expr'),
        outfit: getInputValue('inp-outfit'),
        obj: getInputValue('inp-obj'),
        bg: getInputValue('inp-bg'),
        txt: document.getElementById('inp-txt')?.value || '', // txt stays as-is (user input)
        txtColor: getInputValue('inp-txtColor'),
        light: getInputValue('inp-light'),
        angle: getInputValue('inp-angle'),
        fx: getInputValue('inp-fx'),
        font: selectedFont ? selectedFont.id : 'impact'
    };
}

/**
 * Apply settings to form inputs and state
 */
export function applySettings(settings) {
    if (settings.mode) setMode(settings.mode);
    if (settings.ar) setAr(settings.ar);
    if (settings.pos) setPosition(settings.pos);
    if (settings.gender) setGender(settings.gender);
    if (settings.txtPos) setTextPos(settings.txtPos);

    const fields = ['expr', 'outfit', 'obj', 'bg', 'txt', 'txtColor', 'light', 'angle', 'fx'];
    fields.forEach(field => {
        const el = document.getElementById(`inp-${field}`);
        if (el && settings[field]) {
            el.value = settings[field];
        }
    });

    // Apply font setting
    if (settings.font) {
        setSelectedFont(settings.font);
    }
}

/**
 * Copy result to clipboard
 */
export function copyResult(currentLang) {
    const txt = document.getElementById('output');
    if (!txt?.value) return;

    txt.select();
    txt.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(txt.value);

    const btn = document.querySelector('.copy-btn');
    if (btn) {
        const oldHTML = btn.innerHTML;
        const successText = currentLang === 'tr' ? '✅ KOPYALANDI!' : '✅ COPIED!';
        btn.innerHTML = `<i>${successText}</i>`;
        btn.style.background = '#22c55e';
        btn.style.borderColor = '#22c55e';

        setTimeout(() => {
            btn.innerHTML = oldHTML;
            btn.style.background = 'rgba(51, 65, 85, 0.8)';
            btn.style.borderColor = 'var(--glass-border)';
        }, 2000);
    }
}

/**
 * Show toast notification
 */
export function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 2500);
}

/**
 * Helper function for rounded rectangles on canvas
 */
export function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
}

/**
 * Check if point is in bounds
 */
export function isPointInBounds(x, y, bounds) {
    return x >= bounds.x && x <= bounds.x + bounds.w &&
        y >= bounds.y && y <= bounds.y + bounds.h;
}

/**
 * Get canvas coordinates from mouse event
 */
export function getCanvasCoords(e) {
    const canvas = document.getElementById('preview-canvas');
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
    };
}
