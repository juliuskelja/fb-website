<script>
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
					end: 'top center',
					scrub: 1.1
				},
				opacity: 1,
				y: '-30vh',
				duration: 2
			}
		);
	});
</script>

<div class="section two">
	<div class="trailer">
		<iframe
			class="youtube-video"
			src="https://www.youtube.com/embed/dTAOCBWosVg?si=PZkKWEH9owUQDhzs&amp;controls=0"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
			id="trailerframe"
		/>
	</div>
</div>

<style>
	#trailerframe {
		border: 3px solid black;
		box-shadow: 0 0 10px black;
	}

	.youtube-video {
		aspect-ratio: 16 / 9;
		width: 100%;
	}
</style>
