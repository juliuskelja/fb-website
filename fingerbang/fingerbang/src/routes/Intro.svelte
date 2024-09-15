<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	onMount(() => {
		gsap.fromTo(
			'.introimg',
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 3
			}
		);
		gsap.fromTo(
			'.introtext',
			{ opacity: 0, yPercent: 50 },
			{ opacity: 1, duration: 2, yPercent: 0, delay: 3 }
		);
	});
</script>

<div class="section one">
	<div id="introflex">
		<img
			src="/images/library_logo_fingerbang.png"
			alt="Fingerbang logo"
			style="width: 80%;padding-bottom:1rem;"
			class="introimg"
		/>
		<div class="introtext">
			<article id="toptext">
				<p>
					Fingerbang: All Bullets Pointin' is a first person shooter game taking inspiration from
					the “boomer shooter” games of old. It combines elements from games both old and new, and
					includes a ranking system based on player performance.
				</p>
				<p>
					You play as a former police officer taking justice in your own hands (literally), as you
					tear your way through the criminal element of the city, trying to put an end to the
					manufacturing and spreading of a dangerous new drug known as Strutusol.
				</p>
			</article>
		</div>
	</div>
</div>

<style>
	#introflex {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	#toptext {
		max-width: 700px;
		background-color: rgba(0, 0, 0, 0.9);
		border: 3px solid #63016d;
		border-radius: 15px;
		padding: 1rem;
		margin: 2rem;
	}
</style>
