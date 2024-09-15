<!--This is the frontpage!-->
<script>
	import { browser } from '$app/environment';
	import Features from './Features.svelte';
	import Intro from './Intro.svelte';
	import Trailer from './Trailer.svelte';
	import Screenshots from './Screenshots.svelte';
	import { onMount } from 'svelte';

	import { openModal } from 'svelte-modals';
	import Modal from './Modal.svelte';
	onMount(() => {
		// Reset ScrollTrigger
		ScrollTrigger.clearScrollMemory();
		window.history.scrollRestoration = 'manual';
	});

	// Show the modal only once per session:
	if (browser) {
		let modalShown = localStorage.getItem('modalShown');
		if (!modalShown) {
			handleClick();
			localStorage.setItem('modalShown', 1);
		}
	}

	// Function to open the modal and set values
	function handleClick() {
		openModal(Modal, {
			title: 'Hold up!',
			message:
				'Before you enter the website, please read the following. The developers of Fingerbang describe the content of the game like this:',
			message2:
				"'Depicts cartoon violence and gore, use of fictional drugs and mildly crude language.'",
			message3: 'Contents of the game will be shown on this website. Do you still wish to continue?'
		});
	}
</script>

<Intro />
<Trailer />
<Screenshots />
<Features />

<div class="footer-bg" />

<style>
	.footer-bg {
		background-image: url('/images/footer_background.png');
		background-position: bottom;
		background-repeat: repeat-x;
		background-size: contain;
		position: relative;
		height: 265px;
		width: 100vw;
	}
</style>
