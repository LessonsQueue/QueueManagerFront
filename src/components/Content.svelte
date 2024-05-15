<script>
    import Day from './Day.svelte';
    import Queue from './Queue.svelte';
    import { scheduleData } from '../mockData.js';

    const schedule = scheduleData.data.scheduleFirstWeek;

    let isQueueOpen = false;
    let position = "right";

    function handleQueue(index) {
        return function() {
            isQueueOpen = true;
            position = index < 3 ? "right" : "left";
        };
    }

    function closeQueue() {
        isQueueOpen = false;
    }
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
        {#each schedule as day, index}
            <div class="day-item">
                <Day {day} on:showQueue="{handleQueue(index)}" />
            </div>
        {/each}
    </div>
    <Queue position={position} open={isQueueOpen} on:closeQueue="{closeQueue}" />
</div>