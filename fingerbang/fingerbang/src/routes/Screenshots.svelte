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
				pin: '.pipe-container',
				start: 'center center',
				end: () => '+=' + (ssimgs.scrollWidth - window.innerWidth),
				scrub: 1,
				invalidateOnRefresh: true,
				pinSpacing: true
			}
		});
		// pipes
		gsap.from('.blue', {
			xPercent: -100,
			scrollTrigger: {
				trigger: ssimgs,
				scrub: 1.1,
				end: () => '+=' + (ssimgs.scrollWidth - window.innerWidth)
			}
		});
		gsap.from('.red', {
			xPercent: 100,
			scrollTrigger: {
				trigger: ssimgs,
				scrub: 1.1,
				end: () => '+=' + (ssimgs.scrollWidth - window.innerWidth)
			}
		});
	});
</script>

<!--Blue pipe and background-->
<div class="pipe-container pixelart">
	<div class="pipe blue">
		<img
			src="/images/textures/block_blue.png"
			alt="blue block"
			style="position:absolute;right:0;height:100%"
		/>
	</div>
	<!--End of blue pipe-->

	<!--Screenshots-->
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
	<!--End of screenshots-->

	<!--Red pipe-->
	<div class="pipe red pixelart">
		<img
			src="/images/textures/block_red.png"
			alt="red block"
			style="height:100%;position:absolute;left:0"
		/>
	</div>
	<!--End of red pipe-->
</div>
