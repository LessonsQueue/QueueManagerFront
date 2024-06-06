<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";

    let showContent = false;

    onMount(() => {
        setTimeout(() => {
            showContent = true;
        }, 100);
    });
</script>

<div class="container">
    <Header />
    <main>
        {#if showContent}
            <h1 in:fade={{duration: 1000}}>Про нашу команду</h1>
            <div class="text-image-wrapper">
                <div class="text" in:fade={{duration: 1000}}>
                    <p>Ми — група талановитих професіоналів, об'єднаних спільною метою: зробити процес запису в черги максимально зручним і швидким
                        для кожного користувача.</p>
                    <p>Кожен день нашої роботи приносить нові виклики та можливості для покращення досвіду користувачів. У нашому блозі ви знайдете реальні історії людей,
                        які вже оцінили переваги електронної системи запису в черги. Ми детально розповідаємо про те, як наша платформа допомагає студентам ефективно
                        планувати свій день, мінімізуючи час очікування та збільшуючи продуктивність їхнього навчання. Завдяки нашій системі, кожен користувач може з
                        легкістю записатися на необхідні зустрічі чи консультації, не витрачаючи час у довгих чергах.</p>
                    <p> Ми пишаємося тим, що збираємо команду не лише професіоналів, а й справжніх ентузіастів своєї справи. Кожен з нас робить  унікальний внесок у розвиток нашої платформи,
                        що дозволяє нам постійно випереджати очікування наших клієнтів.</p>
                </div>
                <div class="image" in:fade={{duration: 1000}}>
                    <img src="/src/img/about.png" alt="aboutUs"/>
                </div>
            </div>
        {/if}
    </main>
    <Footer />
</div>


<style>
    body, html {
        height: 100%;
        margin: 0;
    }

    h1 {
        padding-left: 10px;
        font-family: "Exo 2", sans-serif;
    }

    .container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        padding: 10px;
    }

    .text-image-wrapper {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }

    .text {
        flex: 1;
        padding: 10px;
        font-family: "Exo 2", sans-serif;
    }

    .image {
        flex: 1;
        display: flex;
        justify-content: flex-end;
    }

    .image img {
        max-width: 100%;
        height: auto;
    }
</style>