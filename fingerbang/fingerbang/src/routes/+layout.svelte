<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
	import { Modals, closeModal } from 'svelte-modals';
</script>

<!--pop-up modal when entering site-->
<Modals>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div slot="backdrop" class="backdrop" on:click={closeModal} />
</Modals>

<div id="page-container">
	<div id="content-wrap">
		<div class="app">
			<!-- svelte-ignore a11y-missing-content -->
			<a id="topofpage" />
			<Header />
			<main>
				<slot />
			</main>
		</div>

		<Footer />
	</div>
</div>

<style>
	.backdrop {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 11;
		background: url('/images/mainmenu_placeholder.png');
		background-size: contain;
		pointer-events: none;
	}
</style>
