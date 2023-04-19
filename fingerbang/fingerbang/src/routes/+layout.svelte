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
      z-index:10;
      background: rgba(0,0,0,0.5)
    }
.scrolling-image-container {
    overflow: hidden;
}
.scrolling-image {
    z-index:-1;
    top:0;
    width:5076px;
    height: 900px;
    position: fixed;
    background-image: url("/images/mainmenu_placeholder.png");
    background-repeat:  repeat-x;
    animation: verticAnim 60s linear infinite;
}
@keyframes verticAnim {
    from {
        transform: translate3d(0,0,0)
    }
    to {
        transform: translate3d(-1600px, 0,0);
    }
}
</style>