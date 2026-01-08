/**
 * Font Selector Module - Professional font selection system
 * with proper Google Fonts loading and keyboard navigation
 */

// Available fonts with their CSS font-family values
export const fontList = [
    // ===== MOST POPULAR THUMBNAIL FONTS =====
    { id: 'impact', name: 'Impact', family: 'Impact, sans-serif', style: 'bold', popular: true },
    { id: 'bebas-neue', name: 'Bebas Neue', family: "'Bebas Neue'", google: 'Bebas+Neue', popular: true },
    { id: 'anton', name: 'Anton', family: "'Anton'", google: 'Anton', popular: true },
    { id: 'oswald', name: 'Oswald', family: "'Oswald'", google: 'Oswald:wght@700', popular: true },
    { id: 'titan-one', name: 'Titan One', family: "'Titan One'", google: 'Titan+One', popular: true },
    { id: 'alfa-slab', name: 'Alfa Slab One', family: "'Alfa Slab One'", google: 'Alfa+Slab+One', popular: true },

    // ===== BOLD & IMPACTFUL =====
    { id: 'black-ops', name: 'Black Ops One', family: "'Black Ops One'", google: 'Black+Ops+One' },
    { id: 'big-shoulders', name: 'Big Shoulders Display', family: "'Big Shoulders Display'", google: 'Big+Shoulders+Display:wght@900' },
    { id: 'archivo-black', name: 'Archivo Black', family: "'Archivo Black'", google: 'Archivo+Black' },
    { id: 'baloo-2', name: 'Baloo 2', family: "'Baloo 2'", google: 'Baloo+2:wght@800' },
    { id: 'barlow-condensed', name: 'Barlow Condensed', family: "'Barlow Condensed'", google: 'Barlow+Condensed:wght@900' },
    { id: 'bungee', name: 'Bungee', family: "'Bungee'", google: 'Bungee' },
    { id: 'carter-one', name: 'Carter One', family: "'Carter One'", google: 'Carter+One' },

    // ===== MODERN & CLEAN =====
    { id: 'montserrat', name: 'Montserrat', family: "'Montserrat'", google: 'Montserrat:wght@900' },
    { id: 'poppins', name: 'Poppins', family: "'Poppins'", google: 'Poppins:wght@800' },
    { id: 'roboto', name: 'Roboto', family: "'Roboto'", google: 'Roboto:wght@900' },
    { id: 'raleway', name: 'Raleway', family: "'Raleway'", google: 'Raleway:wght@900' },
    { id: 'ubuntu', name: 'Ubuntu', family: "'Ubuntu'", google: 'Ubuntu:wght@700' },
    { id: 'rubik', name: 'Rubik', family: "'Rubik'", google: 'Rubik:wght@900' },
    { id: 'jost', name: 'Jost', family: "'Jost'", google: 'Jost:wght@900' },

    // ===== FUN & PLAYFUL =====
    { id: 'bangers', name: 'Bangers', family: "'Bangers'", google: 'Bangers' },
    { id: 'boogaloo', name: 'Boogaloo', family: "'Boogaloo'", google: 'Boogaloo' },
    { id: 'chewy', name: 'Chewy', family: "'Chewy'", google: 'Chewy' },
    { id: 'comfortaa', name: 'Comfortaa', family: "'Comfortaa'", google: 'Comfortaa:wght@700' },
    { id: 'righteous', name: 'Righteous', family: "'Righteous'", google: 'Righteous' },
    { id: 'luckiest-guy', name: 'Luckiest Guy', family: "'Luckiest Guy'", google: 'Luckiest+Guy' },
    { id: 'gloria-hallelujah', name: 'Gloria Hallelujah', family: "'Gloria Hallelujah'", google: 'Gloria+Hallelujah' },

    // ===== GAMING & TECH =====
    { id: 'press-start-2p', name: 'Press Start 2P', family: "'Press Start 2P'", google: 'Press+Start+2P' },
    { id: 'vt323', name: 'VT323', family: "'VT323'", google: 'VT323' },
    { id: 'share-tech-mono', name: 'Share Tech Mono', family: "'Share Tech Mono'", google: 'Share+Tech+Mono' },
    { id: 'orbitron', name: 'Orbitron', family: "'Orbitron'", google: 'Orbitron:wght@900' },
    { id: 'audiowide', name: 'Audiowide', family: "'Audiowide'", google: 'Audiowide' },
    { id: 'tektur', name: 'Tektur', family: "'Tektur'", google: 'Tektur:wght@900' },

    // ===== HORROR & SCARY =====
    { id: 'creepster', name: 'Creepster', family: "'Creepster'", google: 'Creepster' },
    { id: 'nosifer', name: 'Nosifer', family: "'Nosifer'", google: 'Nosifer' },
    { id: 'butcherman', name: 'Butcherman', family: "'Butcherman'", google: 'Butcherman' },
    { id: 'rubik-glitch', name: 'Rubik Glitch', family: "'Rubik Glitch'", google: 'Rubik+Glitch' },

    // ===== CLASSIC SYSTEM FONTS =====
    { id: 'arial-black', name: 'Arial Black', family: "'Arial Black', sans-serif" },
    { id: 'comic-neue', name: 'Comic Neue', family: "'Comic Neue'", google: 'Comic+Neue:wght@700' },

    // ===== HANDWRITTEN & SCRIPT =====
    { id: 'permanent-marker', name: 'Permanent Marker', family: "'Permanent Marker'", google: 'Permanent+Marker' },
    { id: 'rock-salt', name: 'Rock Salt', family: "'Rock Salt'", google: 'Rock+Salt' },
    { id: 'caveat', name: 'Caveat', family: "'Caveat'", google: 'Caveat:wght@700' },
    { id: 'satisfy', name: 'Satisfy', family: "'Satisfy'", google: 'Satisfy' },
    { id: 'pacifico', name: 'Pacifico', family: "'Pacifico'", google: 'Pacifico' },
    { id: 'shadows-into-light', name: 'Shadows Into Light', family: "'Shadows Into Light'", google: 'Shadows+Into+Light' },
    { id: 'indie-flower', name: 'Indie Flower', family: "'Indie Flower'", google: 'Indie+Flower' },
    { id: 'handlee', name: 'Handlee', family: "'Handlee'", google: 'Handlee' },

    // ===== ELEGANT & STYLISH =====
    { id: 'lobster', name: 'Lobster', family: "'Lobster'", google: 'Lobster' },
    { id: 'playfair', name: 'Playfair Display', family: "'Playfair Display'", google: 'Playfair+Display:wght@900' },
    { id: 'cinzel', name: 'Cinzel', family: "'Cinzel'", google: 'Cinzel:wght@900' },
    { id: 'prata', name: 'Prata', family: "'Prata'", google: 'Prata' },
    { id: 'forum', name: 'Forum', family: "'Forum'", google: 'Forum' },

    // ===== MEME & INTERNET =====
    { id: 'sancreek', name: 'Sancreek', family: "'Sancreek'", google: 'Sancreek' },
    { id: 'racing-sans-one', name: 'Racing Sans One', family: "'Racing Sans One'", google: 'Racing+Sans+One' },
    { id: 'notable', name: 'Notable', family: "'Notable'", google: 'Notable' }
];

// Current selected font
let selectedFont = fontList[0]; // Default: Impact

// Font loading state
let fontsLoaded = false;
let fontsLoading = false;

/**
 * Load Google Fonts dynamically with proper verification
 */
export async function loadGoogleFonts() {
    if (fontsLoaded || fontsLoading) return;
    fontsLoading = true;

    // Build Google Fonts URL properly
    const googleFontFamilies = fontList
        .filter(f => f.google)
        .map(f => f.google)
        .join('&family=');

    if (googleFontFamilies) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `https://fonts.googleapis.com/css2?family=${googleFontFamilies}&display=swap`;
        document.head.appendChild(link);

        // Wait for fonts to actually load
        try {
            await document.fonts.ready;
            fontsLoaded = true;
            console.log('✅ All fonts loaded successfully');
        } catch (err) {
            console.warn('⚠️ Some fonts failed to load:', err);
        }
    }

    fontsLoading = false;
    return fontsLoaded;
}

/**
 * Check if fonts are loaded
 */
export function areFontsLoaded() {
    return fontsLoaded;
}

/**
 * Get selected font
 */
export function getSelectedFont() {
    return selectedFont;
}

/**
 * Set selected font and update UI
 */
export function setSelectedFont(fontId) {
    const font = fontList.find(f => f.id === fontId);
    if (font) {
        selectedFont = font;
        updateFontPreview();
        updateActiveFontInGrid();

        // Update canvas with new font
        if (typeof window.drawPreview === 'function') {
            window.drawPreview();
        }

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
 * Get font CSS for canvas rendering
 */
export function getFontCSS(font) {
    if (!font) font = selectedFont;
    return {
        family: font.family,
        weight: font.style || 'normal',
        name: font.name
    };
}

/**
 * Navigate fonts with arrow keys
 */
export function navigateFonts(direction) {
    const currentIndex = fontList.findIndex(f => f.id === selectedFont.id);
    let newIndex;

    if (direction === 'up' || direction === 'left') {
        newIndex = currentIndex > 0 ? currentIndex - 1 : fontList.length - 1;
    } else if (direction === 'down' || direction === 'right') {
        newIndex = currentIndex < fontList.length - 1 ? currentIndex + 1 : 0;
    }

    const newFont = fontList[newIndex];
    if (newFont) {
        setSelectedFont(newFont.id);

        // Scroll to visible
        setTimeout(() => {
            const fontItem = document.querySelector(`[data-font-id="${newFont.id}"]`);
            if (fontItem) {
                fontItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }, 50);

        // Update canvas
        if (typeof window.drawPreview === 'function') {
            window.drawPreview();
        }

        return newFont;
    }
    return null;
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
            <span class="font-selector-hint">← → yön tuşları ile geçiş yapabilirsiniz</span>
        </div>
        <div class="font-preview-box" id="font-preview-box">
            ${fontsLoading ? '<div class="font-loading">Loading fonts...</div>' : ''}
            <span class="font-preview-text" id="font-preview-text" style="display: ${fontsLoaded ? 'block' : 'none'}">EXAMPLE</span>
        </div>
        <div class="font-grid" id="font-grid"></div>
    `;

    // Render font grid
    renderFontGrid(currentLang);

    // Update preview
    updateFontPreview();

    // Setup keyboard navigation
    setupKeyboardNavigation();
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
             style="font-family: ${font.family};">
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

            // Update canvas
            if (typeof window.drawPreview === 'function') {
                window.drawPreview();
            }
        });
    });
}

/**
 * Update active font in grid
 */
function updateActiveFontInGrid() {
    const grid = document.getElementById('font-grid');
    if (!grid) return;

    grid.querySelectorAll('.font-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.fontId === selectedFont.id) {
            item.classList.add('active');
        }
    });
}

/**
 * Setup keyboard navigation
 */
function setupKeyboardNavigation() {
    // Remove existing listener if any
    const existingHandler = window._fontKeyHandler;
    if (existingHandler) {
        document.removeEventListener('keydown', existingHandler);
    }

    const handler = (e) => {
        // Only handle arrow keys if not in an input field
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            const direction = e.key.replace('Arrow', '').toLowerCase();
            const newFont = navigateFonts(direction);

            if (newFont) {
                showToast(`${newFont.name} seçildi`);
            }
        }
    };

    window._fontKeyHandler = handler;
    document.addEventListener('keydown', handler);
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
        previewText.style.fontFamily = selectedFont.family;

        // Show loading state if fonts not loaded
        if (!fontsLoaded && fontsLoading) {
            previewText.style.display = 'none';
            const loadingDiv = previewBox.querySelector('.font-loading');
            if (loadingDiv) loadingDiv.style.display = 'block';
        } else {
            previewText.style.display = 'block';
            const loadingDiv = previewBox.querySelector('.font-loading');
            if (loadingDiv) loadingDiv.style.display = 'none';
        }
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
 * Show toast notification
 */
function showToast(message) {
    const existing = document.querySelector('.font-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'font-toast';
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 1500);
}

/**
 * Initialize font selector
 */
export async function initFontSelector(currentLang) {
    // Load Google Fonts
    await loadGoogleFonts();

    // Render UI
    renderFontSelector(currentLang);

    // Update preview when text input changes
    const textInput = document.getElementById('inp-txt');
    if (textInput) {
        textInput.addEventListener('input', updateFontPreview);
    }
}
