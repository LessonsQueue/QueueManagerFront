<script>
    import { onMount } from 'svelte';
    import Day from './Day.svelte';
    import Queue from './Queue.svelte';
    import { scheduleData, fetchSchedule } from '../scheduleFetch.js';

    let currentSchedule = [];

    onMount(() => {
        fetchSchedule();
    });

    $: scheduleData.subscribe(data => {
        if (data && data.data) {
            currentSchedule = getScheduleWeek(data.data);
        }
    });

    let isQueueOpen = false;
    let position = "right";
    let currentPairName = '';

    function getWeekNumber(d) {
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    }

    function getScheduleWeek(data) {
        const currentWeek = getWeekNumber(new Date());
        return currentWeek % 2 === 0 ? data.scheduleFirstWeek : data.scheduleSecondWeek;
    }

    const handleQueue = (index) => {
        return (event) => {
            isQueueOpen = true;
            position = index < 3 ? "right" : "left";
            currentPairName = event.detail.pairName;
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
        margin: 5px;
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
    <Queue {currentPairName} position={position} open={isQueueOpen} on:closeQueue="{closeQueue}" />
</div>