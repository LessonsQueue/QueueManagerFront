import { writable } from 'svelte/store';

export const message = writable({
    show: false,
    text: '',
    type: 'info'
});

export function showMessage(type, text, duration = 5000) {
    message.set({ show: true, text, type });

    setTimeout(() => {
        message.set({ show: false, text: '', type: 'info' });
    }, duration);

}