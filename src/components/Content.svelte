<script>
    import { onMount } from 'svelte';
    import Day from './Day.svelte';
    import Queue from './Queue.svelte';
    import { scheduleData, fetchSchedule } from '../scheduleFetch.js';
    import { safeFetch } from '../auth';
    import { createHash } from '../utils-hash';
    import { showMessage } from '../messageStore';

    let currentSchedule = [];
    let isQueueOpen = false;
    let position = "right";
    let currentPairName = '';
    let currentQueue = null;
    let queueId = '';

    onMount(() => {
        fetchSchedule();
    });

    $: scheduleData.subscribe(data => {
        if (data && data.data) {
            currentSchedule = getScheduleWeek(data.data);
        }
    });

    const getWeekNumber = (d) => {
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    }

    const getScheduleWeek = (data) => {
        const currentWeek = getWeekNumber(new Date());
        return currentWeek % 2 === 0 ? data.scheduleFirstWeek : data.scheduleSecondWeek;
    }

    const handleQueue = (index) => {
        return (event) => {
            isQueueOpen = true;
            position = index < 3 ? "right" : "left";
            currentPairName = event.detail.pair.name;
            queueId = createHash(event.detail.pair.name, event.detail.pair.time + event.detail.day);
            setTimeout(async () => {
                try {
                    const data = await safeFetch(import.meta.env.VITE_HOST + '/queues/' + queueId);
                    currentQueue = data.participants;
                } catch (err) {
                    showMessage('error', err.message);
                }
            }, 0);
        };
    }

    const closeQueue = () => isQueueOpen = false;
</script>

<style>
    .content-wrapper {
        flex: 1;
        font-family: "Exo 2", sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .day-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 1500px;
        flex-wrap: wrap;
    }

    .day-item {
        flex: 1;
        max-width: calc(33% - 20px);
    }

</style>

<div class="content-wrapper">
    <div class="day-container">
        {#each currentSchedule as day, index}
            <div class="day-item">
                <Day {day} on:showQueue="{handleQueue(index)}" />
            </div>
        {/each}
    </div>
    <Queue {currentPairName} position={position} open={isQueueOpen} queue={currentQueue} queueId={queueId} on:closeQueue="{closeQueue}" />
</div>