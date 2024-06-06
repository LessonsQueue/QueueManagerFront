<script>
    import { auth, logOut } from '../auth';
    import { showMessage } from '../messageStore';

    let isLogined = false;
    auth.subscribe(value => {
        isLogined = value;
    });

    const handleLogOut = () => {
        console.log('logout');
        logOut();
        showMessage('info', 'You are logged out');
    }
</script>

<header>
    <nav>
        <a href="/">Queues</a>
        <a href="/about">About</a>
        <a href="https://send.monobank.ua/jar/ATcjAVGpYV" target="_blank" rel="noreferrer noopener nofollow"
           class = "header-element">Donate</a>
        {#if isLogined}
            <a href="/" on:click={handleLogOut}>Log out</a>
        {:else}
            <a href="/auth">Sign In</a>
        {/if}
    </nav>
</header>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
    }

    header {
        background-color: #00704a;
        color: white;

        padding: 0.3rem;
        margin: 0;

        font-family: "Exo 2", sans-serif;
        font-size: 1.5rem;
        font-weight: bolder;

        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;
        top: 0;
    }

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    nav a {
        color: white;
        text-decoration: none;
        padding: 0.5rem;
    }
</style>
