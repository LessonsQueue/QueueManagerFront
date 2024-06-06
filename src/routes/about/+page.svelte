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
                <div class="text-block" in:fade={{duration: 1000}}>
                    <p> Ми — група талановитих професіоналів, об'єднаних спільною метою: зробити процес запису в черги максимально зручним і швидким
                        для кожного користувача.</p>
                    <p>У світі, де кожна хвилина на рахунку, зручність та ефективність стають ключовими факторами для успіху будь-якого сервісу.
                        Ми, команда розробників і візіонерів, вирішили створити систему електронних черг, яка радикально змінить ваш підхід до планування
                        і управління часом. Наша мета була не просто створити ще один інструмент, але запропонувати рішення, яке зробить кожен досвід запису
                        швидким, простим і безболісним. Завантаженість нашого щоденного життя часто призводить до необхідності чекати в довгих і нудних чергах. Ч
                        и то в лікарні, на консультації у вчителя, чи навіть чекаючи на замовлення в кафе — усюди ми витрачаємо багато часу, який міг би бути
                        використаний набагато продуктивніше. Тому ми запитали себе: "А що як ми можемо максимально спростити цей процес?"
                        З цією ідеєю ми створили платформу, яка дозволяє користувачам з легкістю записуватися в електронну чергу з будь-якого пристрою,
                        що має доступ до інтернету. Наша система надає змогу переглядати доступні часові слоти в реальному часі, вибирати найзручніший час
                        та навіть отримувати повідомлення про наближення вашої черги. Важливість нашої системи не обмежується лише комфортом користувачів —
                        вона також приносить значні переваги для бізнесів та установ, що її впроваджують. Завдяки зменшенню часу очікування та підвищенню
                        загальної задоволеності клієнтів, наша система сприяє підвищенню ефективності обслуговування та зростанню клієнтської бази.
                        Створюючи наш продукт, ми опиралися на дослідження, інноваційні технології та відгуки реальних користувачів, щоб забезпечити,
                        що наша платформа відповідає високим стандартам якості і зручності. Ми пишаємося можливістю зробити ваш щоденний розклад трохи
                        легшим та продуктивнішим, відкриваючи нові можливості для того, як ми всі взаємодіємо зі світом навколо нас. Ну а ще нам треба було
                        написати лабу 4 та курсач з МТПРЗ, який був би великий за обсягом. То чому б тоді не поєднати корисне з приємним? Саме так ми і
                        зробили :D</p>
                    <p> Ми пишаємося тим, що збираємо команду не лише професіоналів, а й справжніх ентузіастів своєї справи. Кожен з нас робить
                        унікальний внесок у розвиток нашої платформи, що дозволяє нам постійно випереджати очікування наших клієнтів.</p>
                </div>
                <div class="image" in:fade={{duration: 1000}}>
                    <img src="/src/img/about.png" alt="aboutUs"/>
                </div>
            </div>
            <div class="contact-section" in:fade={{duration: 1000}}>
                <div class="contact-items">
                    <div class="contact-item">
                        <img src="/src/img/icons/email.png" alt="Email Icon">
                        <a href="mailto:im22group@gmail.com"><p>im22group@gmail.com</p></a>
                    </div>
                    <div class="contact-item">
                        <img src="/src/img/icons/phone.png" alt="Phone Icon">
                        <a href="#"><p>+38-097-364-14-88</p></a>
                    </div>
                    <div class="contact-item">
                        <img src="/src/img/icons/telegram.png" alt="Telegram Icon">
                        <a href="#"><p>@Nefarov.NET</p></a>
                    </div>
                    <div class="contact-item">
                        <img src="/src/img/icons/github.png" alt="GitHub Icon">
                        <a href="https://github.com/LessonsQueue"><p>LessonsQueue</p></a>
                    </div>
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
        gap: 20px;
    }

    .text-block {
        flex: 1;
        padding: 10px;
        font-family: "Exo 2", sans-serif;
        background-color: #f8f8f8;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        border-radius: 10px;
    }

    .image {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 10px;
    }

    .image img {
        max-width: 100%;
        height: auto;
        border-radius: 10px;
    }

    .contact-section {
        padding: 20px;
        text-align: center;
        background-color: #f8f8f8;
        border-radius: 10px;
        margin-top: 20px;
    }

    .contact-section h2 {
        font-family: "Exo 2", sans-serif;
    }

    .contact-items {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 10px;
    }

    .contact-item {
        flex: 1 1 200px;
        background: white;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        border-radius: 5px;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contact-item img {
        width: 50px;
        height: 50px;
        margin-top: 15px;
    }

    .contact-item p {
        font-family: "Exo 2", sans-serif;
        color: #333;
        font-size: 16px;
    }

</style>