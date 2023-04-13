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
.scrolling-image {
    z-index:-1;
    top:0;
    position: fixed;
    width: 3200px; /* img width x2 */
    height: 100%;
    background: url("/images/mainmenu_placeholder.png") repeat-x;
    animation: verticAnim 20s linear infinite;
}
@keyframes verticAnim {
    to {
        transform: translate(-1600px);
    }
}
</style>