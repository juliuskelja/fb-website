<script>
	import { closeModal } from 'svelte-modals'
  
	// provided by <Modals />
	export let isOpen
  
	export let title
	export let message
	export let message2
	export let message3
  
  </script>
  
  {#if isOpen}
	<div role="dialog" class="modal">
	  <div class="contents">
		<h1 style="text-align:center;padding:10px;margin:0">{title}</h1>
		<p>{message}</p>
		<p><em>{message2}</em></p>
		<p>{message3}</p>
		<div class="actions">
		  <button class="modalBtn" on:click={closeModal}>I understand</button>
		</div>
	  </div>
	</div>
  {/if}
  
  <style>
	.modalBtn {
	height: 50px;
    width: 250px;
    background: linear-gradient(to top, #999999 0%, #999999 50%, #D9D9D9 50%, #D9D9D9 100%);
    display:flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #63016D;
    border-radius: 5px;
	font-family: 'public pixel', sans-serif !important;
	text-transform: uppercase;
    text-decoration: none;
    color:#63016D !important;
    font-size: 1rem;
    font-weight: 600;
    -webkit-text-stroke: 1px black;
	}
	.modalBtn:hover {
		cursor: pointer;
	}
	.modal {
	  position: fixed;
	  margin: 0 auto;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  max-width: 70%;
	  padding:5px;
	}
  
	.contents {
	  min-width: 240px;
	  border-radius: 6px;
	  padding: 16px;
	  background: black;
	  display: flex;
	  flex-direction: column;
	  justify-content: space-between;
	  pointer-events: auto;
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