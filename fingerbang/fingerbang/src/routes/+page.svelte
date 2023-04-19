<!--This is the frontpage!-->
<script>
    import Carousel from './Carousel.svelte';
    import Trailer from './Trailer.svelte';
    import { openModal } from 'svelte-modals'
    import Modal from './Modal.svelte';
    import { browser } from '$app/environment';

    // Show the modal only once per session:
    if (browser) {
        let modalShown = localStorage.getItem('modalShown');
        if (!modalShown) {
            handleClick();
            localStorage.setItem('modalShown', 1)
            }
            }

    // Function to open the modal and set values
    function handleClick() {
    openModal(Modal, { title: "Hold up!", message: "Before you enter the website, please read the following. The developers of Fingerbang describe the content of the game like this:", message2: "'Depicts cartoon violence and gore, use of fictional drugs and mildly crude language.'", message3: "Contents of the game will be shown on this website. Do you still wish to continue?" })
  }

</script>

<div class="contents ctrailer">

<article id="trailer">
    <Trailer />
</article>

    <div class="contents-1">
<article id="download">
    <h1 style="margin-top:0">Get on Steam</h1>
    <iframe title="Install Game" src="https://store.steampowered.com/widget/2200380/" frameborder="0" id="getOnSteam" ></iframe>
</article>


<article id="intro">
    <h1>About Fingerbang</h1>
    <p>
        FingerBang: All Bullets Pointin' is a first person shooter game taking inspiration from the “boomer shooter” games of old. It combines elements from games both old and new, and includes a ranking system based on player performance.
    </p>
    <p>
        You play as a former police officer taking justice in your own hands (literally), as you tear your way through the criminal element of the city, trying to put an end to the manufacturing and spreading of a dangerous new drug known as Strutusol.
    </p>

    <h1>Features</h1>
    ...
</article>

<div id="screenshots-bg">
<article id="screenshots">
<Carousel />
</article></div>


</div>

</div>