<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	onMount(() => {
		// import scrolltrigger
		gsap.registerPlugin(ScrollTrigger);
		// rank timeline
		const tl = gsap.timeline();
		tl.from('.rank-f', { yPercent: 100, opacity: 0 })
			.from('.rank-d', { yPercent: 100, opacity: 0 })
			.from('.rank-c', { yPercent: 100, opacity: 0 })
			.from('.rank-b', { yPercent: 100, opacity: 0 })
			.from('.rank-a', { yPercent: 100, opacity: 0 })
			.from('.rank-s', { yPercent: 100, opacity: 0 });
		ScrollTrigger.create({
			animation: tl,
			trigger: '.ranks',
			scrub: true,
			start: 'bottom bottom',
			end: 'top 40%'
		});
		// h2 animations
		gsap.fromTo(
			'.rankH2',
			{ opacity: 0 },
			{ scrollTrigger: { trigger: '.ranks', scrub: true }, opacity: 1 }
		);
		gsap.fromTo(
			'.gunH2',
			{ opacity: 0 },
			{ scrollTrigger: { trigger: '.guns', scrub: true }, opacity: 1 }
		);
	});
</script>

<div class="section four">
	<h2 class="rankH2">Hone Your Skills for a Better Rank!</h2>
	<div class="ranks">
		<img class="rankimg rank-f" src="/images/ranks/rank_f.png" alt="Rank F" />
		<img class="rankimg rank-d" src="/images/ranks/rank_d.png" alt="Rank D" />
		<img class="rankimg rank-c" src="/images/ranks/rank_c.png" alt="Rank C" />
		<img class="rankimg rank-b" src="/images/ranks/rank_b.png" alt="Rank B" />
		<img class="rankimg rank-a" src="/images/ranks/rank_a.png" alt="Rank A" />
		<img class="rankimg rank-s" src="/images/ranks/rank_s.png" alt="Rank S" />
	</div>

	<h2 class="gunH2">Fight your way through enemies</h2>
	<div class="enemies">
		<div class="enemy e-1">
			<img src="images/enemy.png" alt="Enemy" />
		</div>
		<div class="enemy e-2">
			<img src="images/enemy.png" alt="Enemy" />
		</div>
		<div class="enemy e-3">
			<img src="images/enemy.png" alt="Enemy" />
		</div>
	</div>
</div>
