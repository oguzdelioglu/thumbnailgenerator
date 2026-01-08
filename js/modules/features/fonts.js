/**
 * Font Selector Module - Professional font selection system
 */

// Available fonts with their CSS font-family values
export const fontList = [
    // ===== MOST POPULAR THUMBNAIL FONTS =====
    { id: 'impact', name: 'Impact', family: 'Impact, sans-serif', style: 'bold', popular: true },
    { id: 'bebas-neue', name: 'Bebas Neue', family: "'Bebas Neue', cursive", google: 'Bebas+Neue', style: 'normal', popular: true },
    { id: 'anton', name: 'Anton', family: "'Anton', sans-serif", google: 'Anton', style: 'normal', popular: true },
    { id: 'oswald', name: 'Oswald', family: "'Oswald', sans-serif", google: 'Oswald:wght@700', style: '700', popular: true },
    { id: 'titan-one', name: 'Titan One', family: "'Titan One'", google: 'Titan+One', style: 'normal', popular: true },
    { id: 'alfa-slab', name: 'Alfa Slab One', family: "'Alfa Slab One', serif", google: 'Alfa+Slab+One', style: 'normal', popular: true },

    // ===== BOLD & IMPACTFUL =====
    { id: 'black-ops', name: 'Black Ops One', family: "'Black Ops One', cursive", google: 'Black+Ops+One', style: 'normal' },
    { id: 'big-shoulders', name: 'Big Shoulders Display', family: "'Big Shoulders Display', cursive", google: 'Big+Shoulders+Display:wght@900', style: '900' },
    { id: 'archivo-black', name: 'Archivo Black', family: "'Archivo Black', sans-serif", google: 'Archivo+Black', style: 'normal' },
    { id: 'baloo-2', name: 'Baloo 2', family: "'Baloo 2'", google: 'Baloo+2:wght@800', style: '800' },
    { id: 'barlow-condensed', name: 'Barlow Condensed', family: "'Barlow Condensed', sans-serif", google: 'Barlow+Condensed:wght@900', style: '900' },
    { id: 'bungee', name: 'Bungee', family: "'Bungee'", google: 'Bungee', style: 'normal' },
    { id: 'carter-one', name: 'Carter One', family: "'Carter One'", google: 'Carter+One', style: 'normal' },
    { id: 'crester', name: 'Crester', family: "'Crester'", google: 'Crester', style: 'normal' },

    // ===== MODERN & CLEAN =====
    { id: 'montserrat', name: 'Montserrat', family: "'Montserrat', sans-serif", google: 'Montserrat:wght@900', style: '900' },
    { id: 'poppins', name: 'Poppins', family: "'Poppins', sans-serif", google: 'Poppins:wght@800', style: '800' },
    { id: 'roboto', name: 'Roboto', family: "'Roboto', sans-serif", google: 'Roboto:wght@900', style: '900' },
    { id: 'raleway', name: 'Raleway', family: "'Raleway', sans-serif", google: 'Raleway:wght@900', style: '900' },
    { id: 'ubuntu', name: 'Ubuntu', family: "'Ubuntu', sans-serif", google: 'Ubuntu:wght@700', style: '700' },
    { id: 'rubik', name: 'Rubik', family: "'Rubik', sans-serif", google: 'Rubik:wght@900', style: '900' },
    { id: 'jost', name: 'Jost', family: "'Jost'", google: 'Jost:wght@900', style: '900' },

    // ===== FUN & PLAYFUL =====
    { id: 'bangers', name: 'Bangers', family: "'Bangers', cursive", google: 'Bangers', style: 'normal' },
    { id: 'boogaloo', name: 'Boogaloo', family: "'Boogaloo'", google: 'Boogaloo', style: 'normal' },
    { id: 'chewy', name: 'Chewy', family: "'Chewy', cursive", google: 'Chewy', style: 'normal' },
    { id: 'comfortaa', name: 'Comfortaa', family: "'Comfortaa', cursive", google: 'Comfortaa:wght@700', style: '700' },
    { id: 'righteous', name: 'Righteous', family: "'Righteous'", google: 'Righteous', style: 'normal' },
    { id: 'luckiest-guy', name: 'Luckiest Guy', family: "'Luckiest Guy'", google: 'Luckiest+Guy', style: 'normal' },
    { id: 'gloria-hallelujah', name: 'Gloria Hallelujah', family: "'Gloria Hallelujah'", google: 'Gloria+Hallelujah', style: 'normal' },

    // ===== GAMING & TECH =====
    { id: 'press-start-2p', name: 'Press Start 2P', family: "'Press Start 2P'", google: 'Press+Start+2P', style: 'normal' },
    { id: 'vt323', name: 'VT323', family: "'VT323'", google: 'VT323', style: 'normal' },
    { id: 'share-tech-mono', name: 'Share Tech Mono', family: "'Share Tech Mono'", google: 'Share+Tech+Mono', style: 'normal' },
    { id: 'orbitron', name: 'Orbitron', family: "'Orbitron'", google: 'Orbitron:wght@900', style: '900' },
    { id: 'audiowide', name: 'Audiowide', family: "'Audiowide'", google: 'Audiowide', style: 'normal' },
    { id: 'tektur', name: 'Tektur', family: "'Tektur'", google: 'Tektur:wght@900', style: '900' },

    // ===== HORROR & SCARY =====
    { id: 'creepster', name: 'Creepster', family: "'Creepster'", google: 'Creepster', style: 'normal' },
    { id: 'nosifer', name: 'Nosifer', family: "'Nosifer'", google: 'Nosifer', style: 'normal' },
    { id: 'butcherman', name: 'Butcherman', family: "'Butcherman'", google: 'Butcherman', style: 'normal' },
    { id: 'rubik-glitch', name: 'Rubik Glitch', family: "'Rubik Glitch'", google: 'Rubik+Glitch', style: 'normal' },

    // ===== CLASSIC SYSTEM FONTS =====
    { id: 'arial-black', name: 'Arial Black', family: "'Arial Black', sans-serif", style: 'normal' },
    { id: 'comic-neue', name: 'Comic Neue', family: "'Comic Neue'", google: 'Comic+Neue:wght@700', style: '700' },

    // ===== HANDWRITTEN & SCRIPT =====
    { id: 'permanent-marker', name: 'Permanent Marker', family: "'Permanent Marker'", google: 'Permanent+Marker', style: 'normal' },
    { id: 'rock-salt', name: 'Rock Salt', family: "'Rock Salt'", google: 'Rock+Salt', style: 'normal' },
    { id: 'caveat', name: 'Caveat', family: "'Caveat'", google: 'Caveat:wght@700', style: '700' },
    { id: 'satisfy', name: 'Satisfy', family: "'Satisfy'", google: 'Satisfy', style: 'normal' },
    { id: 'pacifico', name: 'Pacifico', family: "'Pacifico'", google: 'Pacifico', style: 'normal' },
    { id: 'shadows-into-light', name: 'Shadows Into Light', family: "'Shadows Into Light'", google: 'Shadows+Into+Light', style: 'normal' },
    { id: 'indie-flower', name: 'Indie Flower', family: "'Indie Flower'", google: 'Indie+Flower', style: 'normal' },
    { id: 'handlee', name: 'Handlee', family: "'Handlee'", google: 'Handlee', style: 'normal' },

    // ===== ELEGANT & STYLISH =====
    { id: 'lobster', name: 'Lobster', family: "'Lobster', cursive", google: 'Lobster', style: 'normal' },
    { id: 'playfair', name: 'Playfair Display', family: "'Playfair Display', serif", google: 'Playfair+Display:wght@900', style: '900' },
    { id: 'cinzel', name: 'Cinzel', family: "'Cinzel'", google: 'Cinzel:wght@900', style: '900' },
    { id: 'prata', name: 'Prata', family: "'Prata'", google: 'Prata', style: 'normal' },
    { id: 'forum', name: 'Forum', family: "'Forum'", google: 'Forum', style: 'normal' },

    // ===== MEME & INTERNET =====
    { id: 'komika', name: 'Komika Axis', family: "'Komika Axis', cursive", google: 'Komika+Axis', style: 'normal' },
    { id: 'sancreek', name: 'Sancreek', family: "'Sancreek'", google: 'Sancreek', style: 'normal' },
    { id: 'racing-sans-one', name: 'Racing Sans One', family: "'Racing Sans One'", google: 'Racing+Sans+One', style: 'normal' },
    { id: 'notable', name: 'Notable', family: "'Notable'", google: 'Notable', style: 'normal' }
];

// Current selected font
let selectedFont = fontList[0]; // Default: Impact

/**
 * Load Google Fonts dynamically
 */
export function loadGoogleFonts() {
    const googleFonts = fontList
        .filter(f => f.google)
        .map(f => `${f.family.replace(/'/g, '').replace(' ', '+')}:${f.style}`)
        .join('|');

    if (googleFonts) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `https://fonts.googleapis.com/css2?family=${googleFonts}&display=swap`;
        document.head.appendChild(link);
    }
}

/**
 * Get selected font
 */
export function getSelectedFont() {
    return selectedFont;
}

/**
 * Set selected font
 */
export function setSelectedFont(fontId) {
    const font = fontList.find(f => f.id === fontId);
    if (font) {
        selectedFont = font;
        return font;
    }
    return null;
}

/**
 * Get all fonts
 */
export function getAllFonts() {
    return fontList;
}

/**
 * Get font description for prompt
 */
export function getFontDescription(font) {
    if (!font) font = selectedFont;
    return `bold ${font.name} font`;
}

/**
 * Render font selector UI
 */
export function renderFontSelector(currentLang) {
    const container = document.getElementById('font-selector-container');
    if (!container) return;

    container.innerHTML = `
        <div class="font-selector-header">
            <span class="font-selector-title">${currentLang === 'tr' ? 'YAZI FONTU' : 'TEXT FONT'}</span>
        </div>
        <div class="font-preview-box" id="font-preview-box">
            <span class="font-preview-text" id="font-preview-text">EXAMPLE</span>
        </div>
        <div class="font-grid" id="font-grid"></div>
    `;

    // Render font grid
    renderFontGrid(currentLang);

    // Update preview
    updateFontPreview();
}

/**
 * Render font grid
 */
function renderFontGrid(currentLang) {
    const grid = document.getElementById('font-grid');
    if (!grid) return;

    grid.innerHTML = fontList.map(font => `
        <div class="font-item ${font.id === selectedFont.id ? 'active' : ''} ${font.popular ? 'popular' : ''}"
             data-font-id="${font.id}"
             style="font-family: ${font.family}; font-weight: ${font.style};">
            ${font.popular ? '<span class="popular-badge">🔥</span>' : ''}
            <span class="font-item-name">${font.name}</span>
            <span class="font-item-preview">Abc</span>
        </div>
    `).join('');

    // Add click handlers
    grid.querySelectorAll('.font-item').forEach(item => {
        item.addEventListener('click', () => {
            const fontId = item.dataset.fontId;
            setSelectedFont(fontId);

            // Update active state
            grid.querySelectorAll('.font-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Update preview
            updateFontPreview();

            // Update canvas
            if (typeof window.drawPreview === 'function') {
                window.drawPreview();
            }
        });
    });
}

/**
 * Update font preview
 */
export function updateFontPreview() {
    const previewBox = document.getElementById('font-preview-box');
    const previewText = document.getElementById('font-preview-text');
    const textInput = document.getElementById('inp-txt');

    if (previewBox && previewText) {
        const text = textInput?.value || (getState()?.currentLang === 'tr' ? 'ÖRNEK' : 'EXAMPLE');
        previewText.textContent = text;
        previewBox.style.fontFamily = selectedFont.family;
        previewBox.style.fontWeight = selectedFont.style;
    }
}

/**
 * Get current state (for text preview update)
 */
function getState() {
    // Try to get state from window if available
    if (window.ThumbnailStudio?.state) {
        return window.ThumbnailStudio.state();
    }
    return { currentLang: 'tr' };
}

/**
 * Initialize font selector
 */
export function initFontSelector(currentLang) {
    // Load Google Fonts
    loadGoogleFonts();

    // Render UI
    renderFontSelector(currentLang);

    // Update preview when text input changes
    const textInput = document.getElementById('inp-txt');
    if (textInput) {
        textInput.addEventListener('input', updateFontPreview);
    }
}

/**
 * Get font CSS for canvas rendering
 */
export function getFontCSS(font) {
    if (!font) font = selectedFont;
    return {
        family: font.family,
        weight: font.style,
        name: font.name
    };
}
