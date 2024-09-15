<script>
	import { onMount } from 'svelte';
	onMount(() => {
		// Reset ScrollTrigger
		ScrollTrigger.clearScrollMemory();
		window.history.scrollRestoration = 'manual';
	});
</script>

<div class="contents normal">
	<h1>Creators</h1>
	<p>
		Fingerbang: All Bullets Pointin' is developed by Fingerlab and published by Jamk Games on Steam.
		Fingerlab is a group of students, who originally made Fingerbang as a school project during the
		period of 9 weeks in 2022. Fingerbang is being further developed, starting the new year of 2023.
		New updates contain new stuff to play!
	</p>
	<ul class="creators">
		<li>
			<b>Peter Hakanen</b>: Tech Lead, Programming, Gameplay Design, Level Design
		</li>
		<li>
			<b>Aleksi Pellinen</b>: Art Lead, Narrative, Animation, Level Design, Game Design
		</li>
		<li>
			<b>Jukka Nieminen</b>: Programming, QA Lead, VFX Art
		</li>
		<li>
			<b>Teemu Toikkanen</b>: UI Design, Level Design, Environmental Art
		</li>
		<li>
			<b>Antton Paananen</b>: Programming, AI
		</li>
		<li>
			<b>Julius Kelja</b>: Marketing, Website
		</li>
	</ul>

	<ul class="creators">
		<li>
			<b>Music</b>: Janne Mustakallio, Eerik Annola
		</li>
		<li>
			<b>Sound Effects</b>: Jaakko Kuorikoski, Mira Oja (Dreamlakes), Matti Mali
		</li>
	</ul>
</div>
