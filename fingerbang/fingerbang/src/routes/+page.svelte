<!--This is the frontpage!-->
<script>
	import Creators from './Creators.svelte';
	import { openModal } from 'svelte-modals';
	import Modal from './Modal.svelte';
	import { browser } from '$app/environment';
	import Features from './Features.svelte';
	import Intro from './Intro.svelte';
	import Trailer from './Trailer.svelte';
	import Screenshots from './Screenshots.svelte';
	import Screenshots2 from './Screenshots.svelte';

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
<!--<Screenshots />-->
<Features />

<section style="height:100vh" />

<div class="contents" style="display:none">
	<div id="creators">
		<Creators />
	</div>
</div>
