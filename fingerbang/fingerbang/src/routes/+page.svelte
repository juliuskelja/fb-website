<!--This is the frontpage!-->
<script>
	import Carousel from './Carousel.svelte';
	import Creators from './Creators.svelte';
	import { openModal } from 'svelte-modals';
	import Modal from './Modal.svelte';
	import { browser } from '$app/environment';
	import Features from './Features.svelte';
	import Intro from './Intro.svelte';
	import Trailer from './Trailer.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	onMount(() => {
		// import scrolltrigger
		gsap.registerPlugin(ScrollTrigger);
		// trailer scrolltrigger
		gsap.fromTo(
			'.two',
			{ yPercent: 0 },
			{
				scrollTrigger: {
					trigger: '.two',
					markers: true,
					id: 'trailer'
				},
				opacity: 1,
				yPercent: -50,
				duration: 3
			}
		);
		// screenshots
		const ssTimeline = gsap.timeline();
		let ssSections = gsap.utils.toArray('.three .ssimg');
		console.log(ssSections.length);
		ssTimeline.from('.ss-2', { xPercent: 100 }).from('.ss-3', { xPercent: 100 });
		ScrollTrigger.create({
			animation: ssTimeline,
			trigger: '.three',
			markers: true,
			id: 'screenshots',
			start: 'top 30%',
			end: 'max',
			pin: true,
			scrub: true,
			endTrigger: '.four',

			toggleClass: '.end'
		});
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

<div class="section one">
	<Intro />
</div>

<div class="section two" style="opacity:0">
	<Trailer />
</div>

<div class="section three">
	<img class="ss-img" src="/images/ss_00.png" alt="First screenshot" />
	<div class="ssimg ss-2">
		<img class="ss-img" src="/images/ss_01.png" alt="Second screenshot" />
	</div>
	<div class="ssimg ss-3">
		<img class="ss-img" src="/images/ss_02.png" alt="Third screenshot" />
	</div>
</div>

<div class="section four" />

<div class="contents" style="display:none">
	<div id="features">
		<img class="ss-img" src="/images/ss_01.png" alt="Second screenshot" />
		<Features />
	</div>
	<div id="screenshots">
		<Carousel />
	</div>

	<div id="creators">
		<Creators />
	</div>
</div>
