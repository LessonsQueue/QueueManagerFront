<script>
    import { createEventDispatcher } from 'svelte';

    export let email = '';
    export let password = '';
    const dispatch = createEventDispatcher();

    function handleSubmit() {
        dispatch('login', { email, password });
    }
</script>

<style>
    form {
        max-width: 800px;
        margin: 50px auto;
        padding: 20px;
        background-color: #f3f3f3;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3)
    }

    .welcome-title {
        margin: 5px;
        font-size: 24px;
        color: #333;
        font-weight: 500;
    }

    input[type="email"], input[type="password"] {
        width: 100%;
        padding: 10px;
        margin-top: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    button {
        width: 100%;
        padding: 10px;
        background-color: #00704a;
        color: white;
        border: none;
        border-radius: 4px;
        margin-top: 20px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #00bc7c;
    }
</style>


<form on:submit|preventDefault={handleSubmit}>
    <div class="welcome-title">Welcome to IM-22 workspace!</div>
    <input type="email" bind:value={email} placeholder="Email">
    <input type="password" bind:value={password} placeholder="Password">
    <button type="submit">Login</button>
</form>
