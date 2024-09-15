<script>
	import { onMount } from 'svelte';
	onMount(() => {
		// Reset ScrollTrigger
		ScrollTrigger.clearScrollMemory();
		window.history.scrollRestoration = 'manual';
	});
</script>

<div class="contents normal">
	<h1 style="margin-bottom:2rem">Contact</h1>

	<h2>Email</h2>
	<p class="email">fingerlabofficial[at]gmail.com</p>

	<h2 style="margin-bottom:0">Social Medias</h2>
	<!--Social medias-->
	<div id="socialmedias" style="padding:3rem">
		<div class="smedia-item">
			<a href="https://www.facebook.com/profile.php?id=100089280056541">
				<img src="/images/facebook.png" alt="Facebook icon" /></a
			>
		</div>
		<div class="smedia-item">
			<a href="https://twitter.com/Fingerlab_OFCL">
				<img src="/images/twitter.png" alt="Twitter icon" /></a
			>
		</div>
		<div class="smedia-item">
			<a href="https://www.linkedin.com/company/fingerlabgames/">
				<img src="/images/linkedin.png" alt="LinkedIn icon" /></a
			>
		</div>
		<div class="smedia-item">
			<a href="https://www.youtube.com/channel/UCPDVSjP9SHb4D3qS0M_1nHw">
				<img src="/images/yt.png" alt="Youtube icon" /></a
			>
		</div>
	</div>
</div>

<style>
	.email {
		text-align: center;
		font-size: 1.3rem;
	}
</style>
