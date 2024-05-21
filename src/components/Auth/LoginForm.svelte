<script>
    import { createEventDispatcher } from 'svelte';
    import { slide } from 'svelte/transition';

    export let email = '';
    export let password = '';

    const dispatch = createEventDispatcher();

    const handleSubmit = () => {
        dispatch('login', { email, password });
    }
</script>

<style>
    form {
        max-width: 800px;
        margin: 50px 50px 35px 50px;
        padding: 20px;
        background-color: #f3f3f3;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3)
    }

    .welcome-title {
        margin: 5px 5px 15px 5px;
        font-size: 24px;
        color: #333;
        font-weight: 500;
    }

    .input-container {
        position: relative;
        margin-top: 10px;
    }

    input[type="email"], input[type="password"] {
        width: 100%;
        padding: 10px 10px 10px 40px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: #00704a;
        z-index: 10;
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

<form on:submit|preventDefault={handleSubmit} in:slide={{ duration: 1000 }}>
    <div class="welcome-title">Welcome back to IM-22 workspace!</div>
    <div class="input-container">
        <i class="fas fa-envelope icon"></i>
        <input type="email" bind:value={email} placeholder="Email">
    </div>
    <div class="input-container">
        <i class="fas fa-lock icon"></i>
        <input type="password" bind:value={password} placeholder="Password">
    </div>
    <button type="submit">Login</button>
</form>
