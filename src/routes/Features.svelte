<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	onMount(() => {
		// import scrolltrigger
		gsap.registerPlugin(ScrollTrigger);
		// h2 animation
		gsap.fromTo(
			'.enemyH2',
			{ opacity: 0 },
			{ scrollTrigger: { trigger: '.area', scrub: true }, opacity: 1 }
		);
		//Enemies
		let area = document.querySelector('.area');
		const enemyTl1 = gsap.timeline();
		enemyTl1
			.from('.e-1', { x: '-100vw', opacity: 0 })
			.from('.e-2', { y: '-100vw', opacity: 0 })
			.from('.e-3', { x: '100vw', opacity: 0 })
			.from('.handgun', { yPercent: 100 })
			.set('.handgun_spritesheet', { className: 'shoot' })
			.to('.e-1, .e-2, .e-3', { y: '100vh' }, '+=0.5')
			.to('.floor', { opacity: 0 })
			.to('.handgun', { yPercent: 100 })
			.fromTo('.enemyH2', { opacity: 1 }, { opacity: 0 });
		ScrollTrigger.create({
			animation: enemyTl1,
			trigger: '.enemyH2',
			pin: area,
			start: 'top 10%',
			end: () => '+=' + (area.scrollWidth - window.innerWidth),
			scrub: 1.1,
			id: 'enemy',
			pinSpacing: true
		});

		// Ranks and download
		let cont = document.querySelector('.rd-container');
		const tl = gsap.timeline();
		tl.from('.rankH2', { opacity: 0 })
			.from('.rank-f', { yPercent: 100, opacity: 0 })
			.from('.rank-d', { yPercent: 100, opacity: 0 })
			.from('.rank-c', { yPercent: 100, opacity: 0 })
			.from('.rank-b', { yPercent: 100, opacity: 0 })
			.from('.rank-a', { yPercent: 100, opacity: 0 })
			.from('.rank-s', { yPercent: 100, opacity: 0 })
			.to('.panel', { opacity: 0 })
			.from('.download', { xPercent: 100, opacity: 0 });
		ScrollTrigger.create({
			animation: tl,
			trigger: '.ranks',
			scrub: 1.1,
			id: 'ranks',
			start: 'top center',
			end: () => '+=' + (cont.scrollWidth - window.innerWidth),
			pinSpacing: true,
			pin: cont
		});
	});
</script>

<div class="section four">
	<!--Start of area-->
	<div class="area">
		<!--Enemies-->
		<h2 class="enemyH2">Fight your way through enemies</h2>
		<div class="enemies pixelart">
			<div class="e">
				<img class="enemy e-1" src="images/enemy3.png" alt="Enemy" />
			</div>
			<div class="e">
				<img class="enemy e-2" src="images/enemy3.png" alt="Enemy" />
			</div>
			<div class="e">
				<img class="enemy e-3" src="images/enemy3.png" alt="Enemy" />
			</div>
		</div>
		<!--End of enemies div-->
		<div class="handgun pixelart">
			<img class="handgun_spritesheet " src="/images/guns/true_handgun.png" alt="Handgun" />
		</div>
	</div>
	<!--End of area-->

	<!--Container for ranks and download-->
	<div class="rd-container">
		<!--Ranks-->
		<div class="panel">
			<h2 class="rankH2">Hone Your Skills for a Better Rank!</h2>
			<div class="ranks">
				<div class="rank">
					<img class="rankimg rank-f" src="/images/ranks/rank_f.png" alt="Rank F" />
				</div>
				<div class="rank">
					<img class="rankimg rank-d" src="/images/ranks/rank_d.png" alt="Rank D" />
				</div>
				<div class="rank">
					<img class="rankimg rank-c" src="/images/ranks/rank_c.png" alt="Rank C" />
				</div>
				<div class="rank">
					<img class="rankimg rank-b" src="/images/ranks/rank_b.png" alt="Rank B" />
				</div>
				<div class="rank">
					<img class="rankimg rank-a" src="/images/ranks/rank_a.png" alt="Rank A" />
				</div>
				<div class="rank">
					<img class="rankimg rank-s" src="/images/ranks/rank_s.png" alt="Rank S" />
				</div>
			</div>
		</div>
		<!--End of ranks-->

		<!--Download-->
		<div class="download">
			<h1 id="downloadH1">Download now</h1>

			<div class="steam">
				<iframe
					class="download-steam"
					width="100%"
					height="100%"
					src="https://store.steampowered.com/widget/2200380/"
					frameborder="0"
					title="download"
				/>
			</div>
		</div>
		<!--End of download-->
	</div>
	<!--End of container for ranks and download-->
</div>

<style>
	.steam {
		padding-bottom: 56.25%;
		position: relative;
		display: block;
		width: 100%;
	}
	.download-steam {
		aspect-ratio: 16 / 9;
		width: 100%;
		height: 100%;
	}
</style>
