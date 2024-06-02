<script>
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';
    import Content from '../components/Content.svelte';
    import Message from '../components/Message.svelte';
    import { onMount } from 'svelte';
    import { checkAuth } from '../auth';

    onMount(() => {
        checkAuth();
    });
</script>

<style>
    .app-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 10px;
    }
</style>

<div class="app-container">
    <Header />
    <main>
        <Content />
        <Message />
    </main>
    <Footer />
</div>
