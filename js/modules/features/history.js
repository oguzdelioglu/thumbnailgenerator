/**
 * History Module - Prompt history management
 */

import * as storage from '../core/storage.js';
import { addToHistory as addToHistoryState, removeFromHistory, clearHistory as clearHistoryState, getHistory } from '../core/state.js';

/**
 * Load history from storage
 */
export function loadHistory() {
    const stored = storage.loadHistory();
    return stored;
}

/**
 * Add prompt to history
 */
export function addToHistory(prompt) {
    addToHistoryState(prompt);
    storage.saveHistory(getHistory());
}

/**
 * Delete history item by index
 */
export function deleteHistoryItem(index) {
    removeFromHistory(index);
    storage.saveHistory(getHistory());
}

/**
 * Clear all history
 */
export function clearAllHistory(currentLang) {
    const message = currentLang === 'tr'
        ? 'Tüm geçmiş silinsin mi?'
        : 'Clear all history?';

    if (confirm(message)) {
        clearHistoryState();
        storage.saveHistory([]);
    }
}

/**
 * Render history list
 */
export function renderHistoryList() {
    const list = document.getElementById('history-list');
    if (!list) return;

    const history = getHistory();
    list.innerHTML = '';

    history.forEach((item, index) => {
        const el = document.createElement('div');
        el.className = 'history-item';

        const txtDiv = document.createElement('div');
        txtDiv.className = 'hist-text';
        txtDiv.innerText = item;

        const actionDiv = document.createElement('div');
        actionDiv.className = 'hist-actions';

        const btnCopy = document.createElement('button');
        btnCopy.className = 'h-btn';
        btnCopy.innerText = 'COPY';
        btnCopy.onclick = () => {
            navigator.clipboard.writeText(item);
            btnCopy.innerText = 'OK';
            setTimeout(() => btnCopy.innerText = 'COPY', 1000);
        };

        const btnDel = document.createElement('button');
        btnDel.className = 'h-btn h-del';
        btnDel.innerText = 'X';
        btnDel.onclick = () => deleteHistoryItem(index);

        actionDiv.appendChild(btnCopy);
        actionDiv.appendChild(btnDel);

        el.appendChild(txtDiv);
        el.appendChild(actionDiv);
        list.appendChild(el);
    });
}
