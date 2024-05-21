<script>
    import { createEventDispatcher } from 'svelte';
    import { slide } from 'svelte/transition';

    export let firstName = '';
    export let lastName = '';
    export let email = '';
    export let password = '';
    export let confirmPassword = '';

    const dispatch = createEventDispatcher();

    const handleSubmit = () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        dispatch('signup', { firstName, lastName, email, password });
    }
</script>

<style>
    form {
        max-width: 700px;
        margin: 35px 35px 35px 35px;
        padding: 20px;
        background-color: #f3f3f3;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    .input-container {
        position: relative;
        margin-top: 10px;
    }

    input[type="text"], input[type="email"], input[type="password"] {
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

    input[type="text"]:focus, input[type="email"]:focus, input[type="password"]:focus {
        border-color: #00704a;
        box-shadow: 0 0 8px rgba(0, 160, 130, 0.2);
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

    .welcome-title {
        margin: 5px 5px 20px 5px;
        font-size: 24px;
        color: #333;
        font-weight: 500;
        text-align: center;
    }
</style>

<form on:submit|preventDefault={handleSubmit} in:slide={{ duration: 1000 }}>
    <div class="welcome-title">Become a part of IM-22 workspace</div>
    <div class="input-container">
        <i class="fas fa-user icon"></i>
        <input type="text" bind:value={firstName} placeholder="First Name">
    </div>
    <div class="input-container">
        <i class="fas fa-user icon"></i>
        <input type="text" bind:value={lastName} placeholder="Last Name">
    </div>
    <div class="input-container">
        <i class="fas fa-envelope icon"></i>
        <input type="email" bind:value={email} placeholder="Email">
    </div>
    <div class="input-container">
        <i class="fas fa-lock icon"></i>
        <input type="password" bind:value={password} placeholder="Password">
    </div>
    <div class="input-container">
        <i class="fas fa-lock icon"></i>
        <input type="password" bind:value={confirmPassword} placeholder="Confirm Password">
    </div>
    <button type="submit">Register</button>
</form>
