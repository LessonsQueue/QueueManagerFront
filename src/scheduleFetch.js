import { writable } from 'svelte/store';
import { showMessage } from './messageStore';

export const scheduleData = writable({});

export const fetchSchedule = async () => {
    const url = 'https://api.campus.kpi.ua/schedule/lessons?groupId=28bfbe3d-c77c-4068-b3eb-f617d1a19cfc';
    const response = await fetch(url);

    if (!response.ok) {
        showMessage('error', 'Reload page please');
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    scheduleData.set(data);
}