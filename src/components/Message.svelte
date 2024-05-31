<script>
    import { fly } from 'svelte/transition';
    import {message} from '../messageStore.js';

    let msg;

    message.subscribe(data => {
        msg = data
    });

    const backgroundColors = {
        success: 'rgba(1,126,1,0.6)',
        error: 'rgba(206,22,22,0.47)',
        info: 'rgba(0,112,74,0.71)'
    };

    function closeMessage() {
        message.set({
            show: false,
            type: 'info',
            text: ''
        });
    }
</script>

<style>
    .message-modal {
        position: fixed;
        bottom: 5%;
        right: -5%;
        transform: translate(-50%, -50%);
        width: 300px;
        padding: 10px;

        border-radius: 8px;

        font-family: "Exo 2", sans-serif;
        font-weight: bolder;
        color: white;
        text-align: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 9999;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .close-button {
        position: absolute;
        right: 10px;
        top: 5px;
        background: transparent;
        border: none;
        font-size: 20px;
        color: white;
        cursor: pointer;
    }
</style>

{#if msg.show}
    <div class="message-modal" style="background-color: {backgroundColors[msg.type]}" in:fly={{ x: 100, duration: 500 }} out:fly={{ x: 100, duration: 500 }}>
        <p>{msg.text}</p>
        <button class="close-button" on:click={closeMessage}>&times;</button>
    </div>
{/if}
