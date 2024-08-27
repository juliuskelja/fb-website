<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	onMount(() => {
		// import scrolltrigger
		gsap.registerPlugin(ScrollTrigger);
		// screenshots
		let ssimgs = document.querySelector('.three');
		gsap.to('.ssimg', {
			ease: 'none',
			x: () => -(ssimgs.scrollWidth - window.innerWidth),
			scrollTrigger: {
				trigger: ssimgs,
				pin: ssimgs,
				start: 'center center',
				end: () => '+=' + (ssimgs.scrollWidth - window.innerWidth),
				scrub: true,
				invalidateOnRefresh: true,
				pinSpacing: true
			}
		});
	});
</script>

<div class="section three">
	<img class="ssimg" src="/images/ss_00.png" alt="First screenshot" />
	<img class="ssimg" src="/images/ss_01.png" alt="Second screenshot" />
	<img class="ssimg" src="/images/ss_02.png" alt="Third screenshot" />
	<img class="ssimg" src="/images/ss_03.png" alt="Fourth screenshot" />
	<img class="ssimg" src="/images/ss_04.png" alt="Fifth screenshot" />
	<img class="ssimg" src="/images/ss_05.png" alt="Sixth screenshot" />
	<img class="ssimg" src="/images/ss_06.png" alt="Seventh screenshot" />
	<img class="ssimg" src="/images/ss_07.png" alt="Eight screenshot" />
</div>
