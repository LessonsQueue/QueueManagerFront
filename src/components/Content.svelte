<script>
    import Day from './Day.svelte';
    import { scheduleData } from '../mockData.js';

    const schedule = scheduleData.data.scheduleFirstWeek;
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
        {#each schedule as day}
            <div class="day-item">
                <Day {day} />
            </div>
        {/each}
    </div>
</div>
