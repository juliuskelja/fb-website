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
    <div class="scrolling-image"></div>
   </div>


<style>
    .scrolling-image-container {
  overflow: hidden;
}
</style>