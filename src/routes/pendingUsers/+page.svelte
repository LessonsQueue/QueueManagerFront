<script>
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    import ApprovalPage from "../../components/ApprovalPage.svelte";
    import { fade } from 'svelte/transition';
    import {onMount} from "svelte";

    let showContent = false;

    onMount(() => {
        setTimeout(() => {
            showContent = true;
        }, 100);
    });
</script>

<style>
    body, html {
        height: 100%;
        margin: 0;
    }

    .container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
    }
</style>

{#if showContent}
    <div class="container" in:fade={{duration: 1000}}>
        <Header />
        <main>
            <ApprovalPage />
        </main>
        <Footer />
    </div>
{/if}