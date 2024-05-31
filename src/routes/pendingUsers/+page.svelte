<script>
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    import ApprovalPage from "../../components/ApprovalPage.svelte";
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

<div class="container">
    <Header />
    <main>
        <ApprovalPage />
    </main>
    <Footer />
</div>
