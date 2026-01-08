/**
 * Canvas Module - Preview canvas rendering and drag handling
 */

import { getState } from '../core/state.js';
import { dataPool } from '../../data/index.js';
import { roundRect, isPointInBounds, getCanvasCoords } from '../utils/helpers.js';
import { getFontCSS, getSelectedFont } from '../features/fonts.js';
import { t } from '../../i18n/index.js';

// Drag state
let isDragging = false;
let dragTarget = null;
let dragStartX = 0;

// Element bounds for hit detection
let charBounds = { x: 0, y: 0, w: 0, h: 0 };
let textBounds = { x: 0, y: 0, w: 0, h: 0 };

// Export bounds for external access
export function getCharBounds() { return charBounds; }
export function getTextBounds() { return textBounds; }

// Track loaded fonts to avoid repeated loading attempts
const loadedFonts = new Set();

/**
 * Ensure a font is loaded and ready for canvas rendering
 */
async function ensureFontLoaded(font) {
    if (!font || !font.google) return true;

    const fontKey = `${font.family}`;

    // Always try to load the font, even if we think it's loaded
    try {
        // Try multiple font specifications to ensure it loads
        const fontSpecs = [
            `bold 12px "${font.family}"`,
            `bold 100px "${font.family}"`,
            `normal 12px "${font.family}"`
        ];

        for (const spec of fontSpecs) {
            await document.fonts.load(spec);
        }

        // Wait for fonts to be ready
        await document.fonts.ready;

        // Wait a bit more to ensure the font is actually ready for canvas
        await new Promise(resolve => setTimeout(resolve, 150));

        loadedFonts.add(fontKey);
        console.log(`✅ Loaded font: ${font.name}`);
        return true;
    } catch (e) {
        console.warn(`⚠️ Font load failed for ${font.name}, using fallback`);
        return false;
    }
}

/**
 * Get color value from localized color name
 */
function getColorValue(colorName, currentLang) {
    // Map of localized color names to hex values
    const colorMap = {
        'tr': {
            'Beyaz': '#FFFFFF',
            'Sarı': '#FFFF00',
            'Turuncu': '#FFA500',
            'Kırmızı': '#FF0000',
            'Mor': '#9B59B6',
            'Mavi': '#3498DB',
            'Yeşil': '#2ECC71',
            'Pembe': '#FF69B4',
            'Siyah': '#000000',
            'Kahverengi': '#8B4513',
            'Koyu Turuncu': '#FF8C00',
            'Koyu Kırmızı': '#8B0000',
            'Altın (Gold)': '#FFD700',
            'Gümüş (Silver)': '#C0C0C0',
            'Gökkuşağı (Rainbow)': '#FF6B6B',
            'Neon Mavi': '#00FFFF',
            'Alev Kırmızı': '#FF4500',
            'Kemik Beyaz': '#F5F5DC',
            'Hayalet Beyaz': '#F8F8FF'
        },
        'en': {
            'pure white': '#FFFFFF',
            'bright yellow': '#FFFF00',
            'vibrant orange': '#FFA500',
            'intense red': '#FF0000',
            'deep purple': '#9B59B6',
            'electric blue': '#3498DB',
            'vivid green': '#2ECC71',
            'hot pink': '#FF69B4',
            'solid black': '#000000',
            'dark brown': '#8B4513',
            'dark orange': '#FF8C00',
            'dark red': '#8B0000',
            'metallic gold': '#FFD700',
            'metallic silver': '#C0C0C0',
            'rainbow gradient': '#FF6B6B',
            'neon blue glow': '#00FFFF',
            'fire red with glow': '#FF4500',
            'bone white': '#F5F5DC',
            'ghostly white': '#F8F8FF'
        }
    };

    return colorMap[currentLang]?.[colorName] || '#FFFFFF';
}

/**
 * Draw preview canvas
 */
export async function drawPreview() {
    const canvas = document.getElementById('preview-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const { currentAr, currentPos, currentTxtPos, currentLang } = getState();
    const d = dataPool[currentLang];

    // Get the selected font info directly
    const selectedFont = getSelectedFont();

    // Wait for Google Font to load if it's a web font
    if (selectedFont && selectedFont.google) {
        await ensureFontLoaded(selectedFont);
    }

    // Set canvas size based on aspect ratio
    if (currentAr === '16:9') {
        canvas.width = 640;
        canvas.height = 360;
    } else {
        canvas.width = 360;
        canvas.height = 640;
    }

    const w = canvas.width;
    const h = canvas.height;

    // Clear canvas with gradient background
    const bgGrad = ctx.createLinearGradient(0, 0, w, h);
    bgGrad.addColorStop(0, '#1a1a2e');
    bgGrad.addColorStop(1, '#16213e');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Add subtle grid pattern
    ctx.strokeStyle = 'rgba(255,255,255,0.03)';
    ctx.lineWidth = 1;
    for (let i = 0; i < w; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, h);
        ctx.stroke();
    }
    for (let j = 0; j < h; j += 40) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(w, j);
        ctx.stroke();
    }

    // Character dimensions
    const charWidth = currentAr === '16:9' ? w * 0.35 : w * 0.6;
    const charHeight = currentAr === '16:9' ? h * 0.75 : h * 0.4;

    // Text area dimensions
    const txtWidth = currentAr === '16:9' ? w * 0.35 : w * 0.7;
    const txtHeight = currentAr === '16:9' ? h * 0.3 : h * 0.15;

    let charX, charY, txtX, txtY;

    // Calculate character position
    charY = currentAr === '16:9' ? h - charHeight - 10 : (h - charHeight) / 2;

    if (currentPos === 'left') {
        charX = w * 0.05;
    } else if (currentPos === 'center') {
        charX = (w - charWidth) / 2;
    } else {
        charX = w - charWidth - w * 0.05;
    }

    // Calculate text position
    if (currentTxtPos === 'auto') {
        if (currentPos === 'left') {
            txtX = w * 0.55;
            txtY = h * 0.35;
        } else if (currentPos === 'center') {
            txtX = (w - txtWidth) / 2;
            txtY = currentAr === '16:9' ? h * 0.08 : h * 0.05;
        } else {
            txtX = w * 0.08;
            txtY = h * 0.35;
        }
    } else if (currentTxtPos === 'left') {
        txtX = w * 0.05;
        txtY = h * 0.35;
    } else if (currentTxtPos === 'right') {
        txtX = w - txtWidth - w * 0.05;
        txtY = h * 0.35;
    } else if (currentTxtPos === 'top') {
        txtX = (w - txtWidth) / 2;
        txtY = h * 0.05;
    } else if (currentTxtPos === 'bottom') {
        txtX = (w - txtWidth) / 2;
        txtY = h - txtHeight - h * 0.05;
    }

    // Draw character silhouette with glow
    ctx.shadowColor = '#8b5cf6';
    ctx.shadowBlur = 20;

    const charGrad = ctx.createLinearGradient(charX, charY, charX, charY + charHeight);
    charGrad.addColorStop(0, '#a78bfa');
    charGrad.addColorStop(1, '#7c3aed');
    ctx.fillStyle = charGrad;

    // Draw character shape
    const headRadius = charWidth * 0.25;
    const bodyTop = charY + headRadius * 2 + 10;

    // Head
    ctx.beginPath();
    ctx.arc(charX + charWidth / 2, charY + headRadius, headRadius, 0, Math.PI * 2);
    ctx.fill();

    // Body
    roundRect(ctx, charX + charWidth * 0.15, bodyTop, charWidth * 0.7, charHeight - headRadius * 2 - 20, 15);
    ctx.fill();

    // Reset shadow
    ctx.shadowBlur = 0;

    // Draw character label
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 14px Inter';
    ctx.textAlign = 'center';
    const charLabel = currentLang === 'tr' ? 'KARAKTER' : 'CHARACTER';
    ctx.fillText(charLabel, charX + charWidth / 2, charY + charHeight + 25);

    // Draw text area with glow
    ctx.shadowColor = '#38bdf8';
    ctx.shadowBlur = 15;

    const txtGrad = ctx.createLinearGradient(txtX, txtY, txtX + txtWidth, txtY + txtHeight);
    txtGrad.addColorStop(0, '#0ea5e9');
    txtGrad.addColorStop(1, '#38bdf8');
    ctx.fillStyle = txtGrad;

    roundRect(ctx, txtX, txtY, txtWidth, txtHeight, 10);
    ctx.fill();

    // Reset shadow
    ctx.shadowBlur = 0;

    // Text label inside with selected font
    const overlayText = document.getElementById('inp-txt')?.value || (currentLang === 'tr' ? 'YAZI' : 'TEXT');
    const txtColorName = document.getElementById('inp-txtColor')?.value || (currentLang === 'tr' ? 'Beyaz' : 'pure white');
    const txtColor = getColorValue(txtColorName, currentLang);

    // Use the selected font directly
    const fontSize = Math.floor(txtHeight * 0.4);
    // Remove outer quotes from fontFamily if present (e.g., "'Titan One'" -> "Titan One")
    const fontFamily = selectedFont
        ? selectedFont.family.replace(/^['"]|['"]$/g, '')
        : 'Impact, sans-serif';
    const fontWeight = selectedFont && selectedFont.style ? selectedFont.style : 'bold';
    const fontSpec = `${fontWeight} ${fontSize}px "${fontFamily}"`;

    ctx.fillStyle = txtColor;
    ctx.font = fontSpec;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Draw text with shadow for better visibility
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 6;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;

    ctx.fillText(overlayText.substring(0, 12), txtX + txtWidth / 2, txtY + txtHeight / 2);

    // Reset shadow
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    // Draw aspect ratio indicator
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.font = '12px JetBrains Mono';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'top';
    ctx.fillText(currentAr, w - 10, 10);

    // Store element bounds for drag detection
    charBounds = { x: charX, y: charY, w: charWidth, h: charHeight };
    textBounds = { x: txtX, y: txtY, w: txtWidth, h: txtHeight };

    // Update legend texts
    const legendChar = document.getElementById('legend-char');
    const legendText = document.getElementById('legend-text');
    const legendBg = document.getElementById('legend-bg');
    const previewTitle = document.getElementById('txt-preview-title');

    if (legendChar) legendChar.innerText = t('preview.character');
    if (legendText) legendText.innerText = t('preview.text');
    if (legendBg) legendBg.innerText = t('preview.background');
    if (previewTitle) previewTitle.innerText = t('preview.title');
}

/**
 * Setup canvas drag and drop
 */
export function setupCanvasDrag(onCharPositionChange, onTextPositionChange) {
    const canvas = document.getElementById('preview-canvas');
    if (!canvas) return;

    canvas.addEventListener('mousedown', (e) => handleDragStart(e, onCharPositionChange, onTextPositionChange));
    canvas.addEventListener('mousemove', (e) => handleDragMove(e, onCharPositionChange, onTextPositionChange));
    canvas.addEventListener('mouseup', handleDragEnd);
    canvas.addEventListener('mouseleave', handleDragEnd);

    // Touch support
    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        handleDragStart({ clientX: touch.clientX, clientY: touch.clientY, target: canvas }, onCharPositionChange, onTextPositionChange);
    });
    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        handleDragMove({ clientX: touch.clientX, clientY: touch.clientY, target: canvas }, onCharPositionChange, onTextPositionChange);
    });
    canvas.addEventListener('touchend', handleDragEnd);
}

/**
 * Handle drag start
 */
function handleDragStart(e, onCharPosChange, onTxtPosChange) {
    const coords = getCanvasCoords(e);

    if (isPointInBounds(coords.x, coords.y, charBounds)) {
        isDragging = true;
        dragTarget = 'char';
        dragStartX = coords.x;
    } else if (isPointInBounds(coords.x, coords.y, textBounds)) {
        isDragging = true;
        dragTarget = 'text';
        dragStartX = coords.x;
    }

    if (isDragging) {
        document.getElementById('preview-canvas').style.cursor = 'grabbing';
    }
}

/**
 * Handle drag move
 */
function handleDragMove(e, onCharPosChange, onTxtPosChange) {
    const canvas = document.getElementById('preview-canvas');
    const { currentLang } = getState();

    if (!isDragging) {
        const coords = getCanvasCoords(e);
        if (isPointInBounds(coords.x, coords.y, charBounds) || isPointInBounds(coords.x, coords.y, textBounds)) {
            canvas.style.cursor = 'grab';
        } else {
            canvas.style.cursor = 'default';
        }
        return;
    }

    const coords = getCanvasCoords(e);
    const w = canvas.width;

    let newPos;
    if (coords.x < w / 3) {
        newPos = 'left';
    } else if (coords.x < w * 2 / 3) {
        newPos = 'center';
    } else {
        newPos = 'right';
    }

    if (dragTarget === 'char' && onCharPosChange) {
        const currentPos = getState().currentPos;
        if (newPos !== currentPos) {
            onCharPosChange(newPos);
        }
    } else if (dragTarget === 'text' && onTxtPosChange) {
        const currentTxtPos = getState().currentTxtPos;
        if (newPos === 'left' && currentTxtPos !== 'left') {
            onTxtPosChange('left');
        } else if (newPos === 'center' && currentTxtPos !== 'top') {
            onTxtPosChange('top');
        } else if (newPos === 'right' && currentTxtPos !== 'right') {
            onTxtPosChange('right');
        }
    }
}

/**
 * Handle drag end
 */
function handleDragEnd() {
    if (isDragging) {
        isDragging = false;
        dragTarget = null;
        document.getElementById('preview-canvas').style.cursor = 'grab';

        const { currentLang } = getState();
        const message = currentLang === 'tr' ? 'Pozisyon güncellendi!' : 'Position updated!';
        showToast(message);
    }
}

/**
 * Show toast notification
 */
function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 2500);
}
