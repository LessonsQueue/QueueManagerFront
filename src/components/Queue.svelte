<script>
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();

    export let queue = ["Machko", "Danila", "Antin", "Radik", "Bodya69", "Danila", "Antin", "Radik", "Bodya69" , "Danila", "Antin", "Radik", "Bodya69" , "Danila", "Antin", "Radik", "Bodya69"];
    export let position = 'right'; // 'right' or 'left'
    export let open = false;

    function closeQueue() {
        dispatch('closeQueue');
    }
</script>

<style>
    .queue {
        position: fixed;

        top: 90px;
        bottom: 20px;

        width: 50%;
        background-color: white;
        font-family: "Exo 2", sans-serif;
        box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        overflow-y: auto;
        transition: transform 0.5s ease-in-out;
    }

    .queue.right {
        right: 0;
        transform: translateX(100%);
    }

    .queue.left {
        left: 0;
        transform: translateX(-100%);
    }

    .queue.open {
        transform: translateX(0);
    }

    .queue-header {
        padding: 1rem;
        background-color: #00704a;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 39px;
    }

    .queue-content {
        padding: 1rem;
    }

    .queue-item {
        margin-bottom: 1rem;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .close-button {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        line-height: 1;
    }
</style>

<div class="queue {position} {open ? 'open' : ''}">
    <div class="queue-header">
        <h3>Черга на пару: </h3>
        <button class="close-button" on:click={closeQueue}>Х</button>
    </div>
    <div class="queue-content">
        {#each queue as person}
            <div class="queue-item">
                {person}
            </div>
        {/each}
    </div>
</div>
