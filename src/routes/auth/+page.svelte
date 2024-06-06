<script>
  import Header from '../../components/Header.svelte';
  import Footer from '../../components/Footer.svelte';
  import Message from '../../components/Message.svelte';
  import Auth from '../../components/Auth/Auth.svelte';
  import { auth, checkAuth } from '../../auth';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { showMessage } from '../../messageStore';
  import { goto } from '$app/navigation';

  let isLogined = false;
  let showContent = false;

  auth.subscribe(value => {
    isLogined = value;
  });

  onMount(() => {
    setTimeout(() => {
      showContent = true;
    }, 100);

    checkAuth();
    if (!isLogined) return;
    showMessage('error', 'You are already logined');
    goto('/');
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

{#if showContent}
  <div class="app-container" in:fade={{duration: 1000}}>
    <Header />
    <main>
      <Auth />
      <Message />
    </main>
    <Footer />
  </div>
{/if}