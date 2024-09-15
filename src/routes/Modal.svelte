<script>
	import { closeModal } from 'svelte-modals';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	export let isOpen;
	export let title;
	export let message;
	export let message2;
	export let message3;

	function hideModal() {
		gsap.to('.modal', {
			duration: 2,
			opacity: 0,
			onComplete: () => {
				closeModal();
			}
		});
	}

	onMount(() => {
		gsap.fromTo('.modal', { y: '-50%' }, { y: 0 });
	});
</script>

{#if isOpen}
	<div role="dialog" class="modal">
		<div class="contents">
			<h1 style="text-align:center;padding:10px;margin:0">{title}</h1>
			<p id="message1">{message}</p>
			<p id="message2"><em>{message2}</em></p>
			<p id="message3">{message3}</p>
			<div class="actions">
				<button class="modalBtn" on:click={hideModal}>I understand</button>
			</div>
		</div>
	</div>
{/if}

<style>
	#message2 {
		font-size: 1.5em;
	}
	.modalBtn {
		height: 50px;
		width: 250px;
		background: linear-gradient(to top, #999999 0%, #999999 50%, #d9d9d9 50%, #d9d9d9 100%);
		display: flex;
		justify-content: center;
		align-items: center;
		border: 3px solid #63016d;
		border-radius: 5px;
		font-family: 'public pixel', sans-serif !important;
		text-transform: uppercase;
		text-decoration: none;
		color: #63016d !important;
		font-size: 1rem;
		font-weight: 600;
		-webkit-text-stroke: 1px black;
	}
	.modalBtn:hover {
		cursor: pointer;
	}
	.modal {
		display: block;
		margin: 0 auto;
		top: 0;
		max-width: 50%;
	}

	.contents {
		border: 2px solid #4a025e;
		min-width: 240px;
		border-radius: 6px;
		padding: 3rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		pointer-events: auto;
		font-size: 1.2rem;
	}

	p {
		text-align: center;
		margin-top: 16px;
	}

	.actions {
		margin-top: 32px;
		display: flex;
		justify-content: center;
	}
</style>
