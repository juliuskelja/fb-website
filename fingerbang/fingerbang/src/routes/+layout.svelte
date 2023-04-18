<script>
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
    import './styles.css';
    import { Modals, closeModal } from 'svelte-modals'
</script>

<Modals>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      slot="backdrop"
      class="backdrop"
      on:click={closeModal}
    />
</Modals>

<div id="page-container">
    <div id="content-wrap">
<div class="app">
    <Header />

    <main>
        <slot />
    </main>
    </div>

    <Footer />
</div>
</div>
<div class="scrolling-image-container">
    <div class="scrolling-image"></div>
</div>

<style>
        .backdrop {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: rgba(0,0,0,0.50)
    }
.scrolling-image-container {
    overflow: hidden;
}
.scrolling-image {
    z-index:-1;
    top:0;
    position: fixed;
    width: 3200px; /* img width x2 */
    height: 100%;
    background: url("/images/mainmenu_placeholder.png") repeat-x;
    animation: verticAnim 50s linear infinite;
}
@keyframes verticAnim {
    to {
        transform: translate(-1600px);
    }
}
</style>