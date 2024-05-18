<script>
    import { createEventDispatcher } from 'svelte';
    export let day;
    const dispatch = createEventDispatcher();

    function showQueue(pair) {
        dispatch('showQueue', { pairName: pair.name });
    }

    function groupPairsByTime(pairs) {
        const grouped = {};
        pairs.forEach(pair => {
            if (!grouped[pair.time]) {
                grouped[pair.time] = [];
            }
            grouped[pair.time].push(pair);
        });
        return Object.values(grouped);
    }

    function getTypeOfPair(type){
        if (type === 'Лаб on-line') {
            return 'type-lab';
        } else if (type === 'Лек on-line') {
            return 'type-lec';
        } else {
            return 'type-prac';
        }
    }
</script>

<style>
    .day {
        background-color: white;
        color: black;
        padding: 0 10px 0 10px;
        margin: 10px;
    }

    .day-item {
        background-color: #f0f0f0;
        padding: 10px;
        margin: -10px 0;
        border-left: 5px solid #00704a;
        cursor: pointer;
        border-radius: 5px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    }

    h2 {
        text-align: center;
        color: #00704a;
        font-size: 1.5rem;
    }

    .day-item p {
        margin: 0 0;
    }

    .time {
        text-align: start;
        font-size: 1.2rem;
        color: #00704a;
        font-weight: bold;
    }

    .day-item .name {
        font-family: "Exo 2", sans-serif;
        font-size: 0.9rem;
        font-weight: 650;
        color: #333;
    }

    .day-item .type {
        font-family: "Exo 2", sans-serif;
        font-size: 1rem;
        color: #00704a;
        font-weight: bold;
    }

    .type-lab {
        color: #f6910d;
    }

    .type-lec {
        color: #676db2;
    }

    .type-prac {
        color: #b25869;
    }

    .day-item .teacher {
        font-family: "Exo 2", sans-serif;
        font-size: 0.8rem;
        color: #666;
    }
</style>

<div class="day">
    <h2>{day.day}</h2>
    {#each groupPairsByTime(day.pairs) as group}
        <div class="day-item-group">
            <p class="time">{group[0].time.replace('.', ':')}</p>
            {#each group as pair}
                <div class="day-item" on:click={() => showQueue(pair)}>
                    <p class="{getTypeOfPair(pair.type)}">{pair.type.replace('on-line', '')}</p>
                    <p class="name">{pair.name}</p>
                    <p class="teacher"><b>Викладач:</b> {pair.teacherName}</p>
                </div>
            {/each}
        </div>
    {/each}
</div>