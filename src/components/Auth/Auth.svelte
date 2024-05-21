<script>
    import LoginForm from './LoginForm.svelte';
    import SignupForm from './SignUpForm.svelte';
    let showLoginForm = true;

    const handleLogin = (event) => {
        console.log('Login data:', event.detail);
    }

    const handleSignup = (event) => {
        console.log('Signup data:', event.detail);
    }

    const switchToSignup = () => {
        showLoginForm = false;
    }

    const switchToLogin = () => {
        showLoginForm = true;
    }
</script>

<style>
    .auth-container {
        text-align: center;
        padding: 20px;
        font-family: 'Arial', sans-serif;
    }

    img.logo {
        width: 150px;
        margin-top: 20px;
        border-radius: 50%;
    }

    .text-link {
        margin-top: 20px;
        font-size: 16px;
    }

    .here-link {
        color: #00704a;
        cursor: pointer;
        text-decoration: underline;
    }

    .here-link:hover {
        color: #005a36;
    }

    button {
        margin-top: 20px;
        width: auto;
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
        <div class="text-link">
            Don't have an account? Register <span class="here-link" on:click={switchToSignup}>here</span>.
        </div>
    {:else}
        <SignupForm on:signup={handleSignup}/>
        <div class="text-link">
            Already have an account? Login <span class="here-link" on:click={switchToLogin}>here</span>.
        </div>
    {/if}
</div>
