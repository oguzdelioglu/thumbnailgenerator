/**
 * Favorites Module - Favorites management
 */

import * as storage from '../core/storage.js';
import { addFavorite, removeFavorite, clearFavorites, getFavorites, setIsFavorite, checkFavoriteStatus } from '../core/state.js';
import { getCurrentSettings, applySettings } from '../utils/helpers.js';
import { t } from '../../i18n/index.js';

// Re-export state functions for external access
export { addFavorite, removeFavorite, clearFavorites, getFavorites, setIsFavorite, checkFavoriteStatus };

let pendingFavoriteSettings = null;

/**
 * Toggle favorite status
 */
export function toggleFavorite(currentLang) {
    const currentSettings = getCurrentSettings();
    const hash = JSON.stringify(currentSettings);
    const favorites = getFavorites();

    const isCurrentlyFavorite = favorites.some(f => JSON.stringify(f) === hash);

    if (isCurrentlyFavorite) {
        // Remove favorite
        if (confirm(t('modal.removeConfirm'))) {
            const filtered = favorites.filter(f => JSON.stringify(f) !== hash);
            // Update state and storage
            while (getFavorites().length > 0) {
                removeFavorite(0);
            }
            filtered.forEach(f => addFavorite(f));
            storage.saveFavorites(filtered);
            setIsFavorite(false);
            updateFavoritesCount();
            renderFavoritesList(currentLang);

            showToast(t('modal.remove')); // Generic "removed" message
        }
    } else {
        // Prepare to add new favorite
        pendingFavoriteSettings = currentSettings;
        openFavModal(currentLang);
    }
}

/**
 * Open favorite modal
 */
export function openFavModal(currentLang) {
    const modal = document.getElementById('fav-modal');
    const input = document.getElementById('fav-name-input');
    const title = document.getElementById('modal-title');

    // Set localization using i18n
    title.innerText = t('modal.saveFavoriteTitle');
    document.getElementById('btn-cancel-fav').innerText = t('modal.cancel');
    document.getElementById('btn-save-fav').innerText = t('modal.save');
    input.placeholder = t('modal.placeholder');

    // Clear and focus input
    input.value = '';
    modal.classList.add('active');
    setTimeout(() => input.focus(), 100);
}

/**
 * Close favorite modal
 */
export function closeFavModal() {
    document.getElementById('fav-modal').classList.remove('active');
    pendingFavoriteSettings = null;
}

/**
 * Save favorite from modal
 */
export function saveFavoriteFromModal(currentLang) {
    if (!pendingFavoriteSettings) return;

    const input = document.getElementById('fav-name-input');
    const name = input.value.trim();
    const defaultName = t('ui.txtMyFavs'); // Use "MY FAVORITES" / "FAVORİLERİM" as default

    // Update settings with name
    pendingFavoriteSettings.name = name || defaultName;

    // Save to favorites
    addFavorite(pendingFavoriteSettings);
    setIsFavorite(true);

    // Update storage
    storage.saveFavorites(getFavorites());

    // Update UI
    document.getElementById('fav-btn').classList.add('saved');
    updateFavoritesCount();
    renderFavoritesList(currentLang);

    showToast(t('modal.save')); // Generic "saved" message

    closeFavModal();
}

/**
 * Apply favorite by index
 */
export function applyFavorite(index, currentLang) {
    const favorites = getFavorites();
    if (index < 0 || index >= favorites.length) return;

    applySettings(favorites[index]);
    document.getElementById('favorites-dropdown').classList.remove('show');

    showToast(t('modal.save')); // Reuse "saved" message for "applied"
}

/**
 * Delete favorite by index
 */
export function deleteFavorite(index, currentLang) {
    removeFavorite(index);
    storage.saveFavorites(getFavorites());
    updateFavoritesCount();
    renderFavoritesList(currentLang);
    checkCurrentFavoriteStatus();

    showToast(t('modal.remove')); // Generic "removed" message
}

/**
 * Clear all favorites
 */
export function clearAllFavoritesFn(currentLang) {
    const favorites = getFavorites();
    if (favorites.length === 0) return;

    if (!confirm(t('ui.btnClearAll') + '?')) return;

    clearFavorites();
    storage.saveFavorites([]);
    updateFavoritesCount();
    renderFavoritesList(currentLang);
    checkCurrentFavoriteStatus();

    showToast(t('modal.remove')); // Generic "removed" message
}

/**
 * Update favorites count display
 */
function updateFavoritesCount() {
    const countEl = document.getElementById('fav-count');
    if (countEl) {
        countEl.innerText = getFavorites().length;
    }
}

/**
 * Render favorites list
 */
function renderFavoritesList(currentLang) {
    const container = document.getElementById('favorites-list');
    if (!container) return;

    const favorites = getFavorites();

    if (favorites.length === 0) {
        container.innerHTML = `
            <div class="fav-empty">
                <div class="fav-empty-icon">⭐</div>
                <div>${currentLang === 'tr' ? 'Henüz favori yok' : 'No favorites yet'}</div>
                <div style="font-size: 0.7rem; margin-top: 5px; opacity: 0.7">
                    ${currentLang === 'tr' ? 'Ayarları kaydetmek için FAVORİ butonuna tıklayın' : 'Click FAVORITE button to save settings'}
                </div>
            </div>
        `;
        return;
    }

    const posLabel = currentLang === 'tr' ? 'Poz: ' : 'Pos: ';
    const defaultTitle = currentLang === 'tr' ? 'Favori' : 'Favorite';
    const customSettings = currentLang === 'tr' ? 'Özel ayarlar' : 'Custom settings';
    const deleteTitle = currentLang === 'tr' ? 'Sil' : 'Delete';

    container.innerHTML = favorites.map((fav, index) => {
        const title = fav.name || fav.expr || fav.bg || fav.outfit || defaultTitle;
        const meta = [
            fav.pos ? posLabel + fav.pos : '',
            fav.txt ? '"' + fav.txt + '"' : ''
        ].filter(Boolean).join(' | ') || customSettings;

        return `
            <div class="fav-item" onclick="window.applyFavorite(${index})">
                <div class="fav-item-content">
                    <div class="fav-item-title">${title}</div>
                    <div class="fav-item-meta">${meta}</div>
                </div>
                <div class="fav-item-actions">
                    <button class="fav-action-btn delete" onclick="event.stopPropagation(); window.deleteFavorite(${index})" title="${deleteTitle}">🗹️</button>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Check if current settings are favorite
 */
function checkCurrentFavoriteStatus() {
    const currentSettings = getCurrentSettings();
    const isFav = checkFavoriteStatus(currentSettings);
    const favBtn = document.getElementById('fav-btn');

    if (favBtn) {
        if (isFav) {
            favBtn.classList.add('saved');
        } else {
            favBtn.classList.remove('saved');
        }
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

/**
 * Setup modal listeners
 */
export function setupModalListeners(currentLang) {
    const saveBtn = document.getElementById('btn-save-fav');
    const cancelBtn = document.getElementById('btn-cancel-fav');
    const input = document.getElementById('fav-name-input');
    const modal = document.getElementById('fav-modal');

    if (saveBtn) saveBtn.onclick = () => saveFavoriteFromModal(currentLang);
    if (cancelBtn) cancelBtn.onclick = closeFavModal;

    // Close on background click
    if (modal) {
        modal.onclick = (e) => {
            if (e.target === modal) closeFavModal();
        };
    }

    // Input key listeners
    if (input) {
        input.onkeydown = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                saveFavoriteFromModal(currentLang);
            } else if (e.key === 'Escape') {
                closeFavModal();
            }
        };
    }
}

/**
 * Toggle favorites dropdown
 */
export function toggleFavoritesDropdown(currentLang) {
    const dropdown = document.getElementById('favorites-dropdown');
    dropdown.classList.toggle('show');
    if (dropdown.classList.contains('show')) {
        renderFavoritesList(currentLang);
    }
}

// Export functions for global access
window.applyFavorite = applyFavorite;
window.deleteFavorite = deleteFavorite;
