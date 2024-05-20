<script>
    import LoginForm from './LoginForm.svelte';
    import SignupForm from './SignUpForm.svelte';
    let showLoginForm = true;

    function handleLogin(event) {
        console.log('Login data:', event.detail);
    }

    function handleSignup(event) {
        console.log('Signup data:', event.detail);
    }

    function switchToSignup() {
        showLoginForm = false;
    }

    function switchToLogin() {
        showLoginForm = true;
    }
</script>

<style>
    .auth-container {
        text-align: center; /* Центрування всього контенту */
        padding: 20px;
    }

    img.logo {
        width: 150px; /* Або інший розмір залежно від вашого дизайну */
        margin-top: 20px; /* Додає відступ між логотипом та формою */
        border-radius: 50%;
    }

    button {
        margin-top: 10px; /* Додає відступ між формою та кнопкою */
        width: auto; /* Перевизначення стилів кнопки з LoginForm або SignUpForm */
        padding: 10px 20px;
        background-color: #00704a;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #005a36;
    }
</style>

<div class="auth-container">
    <img class="logo" src="/src/img/IMlogo.jpg" alt="Group Logo">
    {#if showLoginForm}
        <LoginForm on:login={handleLogin}/>
        <button on:click={switchToSignup}>Don't have an account? Register here</button>
    {:else}
        <SignupForm on:signup={handleSignup}/>
        <button on:click={switchToLogin}>Already have an account? Login here</button>
    {/if}
</div>
