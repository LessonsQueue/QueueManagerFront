<script>
    import {createEventDispatcher} from "svelte";
    import {showMessage} from "../messageStore.js";

    const dispatch = createEventDispatcher();

    export let queue = ["Machko", "Danila", "Radik", "Bodya69" , "Danila", "Radik", "Bodya69" ,"Danila", "Antin", "Radik", "Bodya69"];
    export let currentPairName = '';
    export let position = 'right'; // 'right' or 'left'
    export let open = false;

    const closeQueue = () => dispatch('closeQueue');

    const joinQueue = () => {
        showMessage("info", "Ви були успішно додані до черги!")
        // TO DO implement user adding function
    }

    const removeUserFromQueue = (index) => {
        showMessage("info", "Студента було успішно видалено!")
        // TO DO implement user removing function
    }

    const removeMyself= () => {
        showMessage("info", "Ви успішно видалили себе з черги!")
        // TO DO implement queue delete function
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        position: relative;
    }

    .remove-button {
        cursor: pointer;
        background: transparent;
        border: none;
        font-size: 20px;
        color: red;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
    }

    .close-button{
        width: 50px;
        height: 50px;
        cursor: pointer;
    }

    .leftright{
        height: 4px;
        width: 50px;
        position: absolute;
        margin-top: 24px;
        background-color: white;
        border-radius: 2px;
        transform: rotate(45deg);
        transition: all .3s ease-in;
    }

    .rightleft{
        height: 4px;
        width: 50px;
        position: absolute;
        margin-top: 24px;
        background-color: white;
        border-radius: 2px;
        transform: rotate(-45deg);
        transition: all .3s ease-in;
    }

    .close-button:hover .leftright{
        transform: rotate(-45deg);
        background-color: white;
    }
    .close-button:hover .rightleft{
        transform: rotate(45deg);
        background-color: white;
    }
    .close-button:hover label{
        opacity: 1;
    }

    .joinQueue-button {
        position: sticky;
        bottom: 10px;
        margin-left: 85%;
        padding: 0.5rem 1rem;

        background-color: #00704a;

        color: white;
        font-family: "Exo 2", sans-serif;
        font-weight: bold;

        border: none;
        border-radius: 4px;
        cursor: pointer;

        transition: background-color 0.3s, box-shadow 0.3s;

        z-index: 1050;
    }

    .delete-queue-button {
        background-color: rgba(255, 0, 0, 0.72);

        position: fixed;
        left: 15px;

        height: 5vh;

        color: white;
        font-family: "Exo 2", sans-serif;
        font-weight: bold;

        border: none;
        border-radius: 4px;
        cursor: pointer;

        transition: background-color 0.3s, box-shadow 0.3s;

        z-index: 1050;
    }

    .joinQueue-button:hover {
        background-color: #45a049;
        box-shadow: 0 2px 5px rgba(0,0,0,0.24), 0 5px 15px rgba(0,0,0,0.19);
    }

    .joinQueue-button:active {
        transform: scale(0.95);
    }
</style>

<div class="queue {position} {open ? 'open' : ''}">
    <div class="queue-header">
        <h3>Черга на пару: {currentPairName}</h3>
        <div class="close-button" on:click={closeQueue}>
            <div class="leftright"></div>
            <div class="rightleft"></div>
        </div>
    </div>
    <div class="queue-content">
        {#each queue as person, index}
            <div class="queue-item">
                {person}
                <button class="remove-button" on:click={() => removeUserFromQueue(index)}>&times;</button>
            </div>
        {/each}
        <button class="joinQueue-button" on:click={joinQueue}>Записатися до черги</button>
        <button class="delete-queue-button" on:click={removeMyself}>Видалити себе з черги</button>
    </div>
</div>
