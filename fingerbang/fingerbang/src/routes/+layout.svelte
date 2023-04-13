<script>
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
    import './styles.css';
</script>

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
    <div class="scrolling-image">
        <img src="/images/mainmenu_placeholder.png" alt="background">
    </div>
   </div>


<style>
.scrolling-image-container {
  overflow: hidden;
  z-index:-1;
    position:fixed;
    top:0;
    background: url("/images/mainmenu_placeholder.png");
    background-repeat: repeat-x;
    width: 100%;
    height: 100%;
}
</style>