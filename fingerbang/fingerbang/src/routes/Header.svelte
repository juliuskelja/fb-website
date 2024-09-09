<header>
	<nav>
		<!--Logo-->
		<div id="headerlogo">
			<img
				alt="Fingerbang logo"
				src="/images/community_icon_transparent.png"
				style="height:auto; max-width: 50px;"
			/>
		</div>
		<!--Navigation links-->
		<div id="navitem-container">
			<div class="navitem">
				<a href="/">Home</a>
			</div>
			<div class="navitem">
				<a href="/creators">Creators</a>
			</div>
			<div class="navitem">
				<a href="/contact">Contact</a>
			</div>
		</div>
		<!--Hamburger menu-->
		<div class="hamburger">
			<img src="/images/menu.png" alt="Hamburger Menu Icon" />
		</div>
		<!--Play Free button-->
		<div class="playButtonDiv">
			<a href="https://store.steampowered.com/app/2200380/Fingerbang_All_Bullets_Pointin/">
				<div class="playfreeButton">Download</div>
			</a>
		</div>
	</nav>
</header>

<style>
	header {
		background-color: #070707;
		height: 5rem;
		position: sticky;
		top: 0;
		z-index: 1;
		width: 100%;
	}
	nav {
		display: flex;
		font-family: 'public pixel', sans-serif !important;
		height: 100%;
		flex-direction: row;
		align-items: center;
		text-transform: uppercase;
	}

	#navitem-container {
		display: flex;
		flex-direction: row;
		width: 500px;
		justify-content: space-between;
		margin-right: 1rem;
		margin-left: 1rem;
	}
	.playButtonDiv {
		margin-left: auto;
		margin-right: 1rem;
	}

	.hamburger {
		margin-right: 1rem;
		margin-left: auto;
	}
	.hamburger img {
		height: auto;
		max-width: 50px;
	}
	.playfreeButton {
		height: 50px;
		width: 250px;
		background: linear-gradient(to top, #999999 0%, #999999 50%, #d9d9d9 50%, #d9d9d9 100%);
		display: flex;
		justify-content: center;
		align-items: center;
		border: 3px solid #63016d;
		border-radius: 5px;
	}
	.playButtonDiv a {
		text-decoration: none;
		color: #63016d !important;
		font-size: 1.2rem;
		font-weight: 600;
		-webkit-text-stroke: 1px black;
	}

	#headerlogo {
		padding-left: 1rem;
		padding-right: 3rem;
	}

	.navitem {
		margin: 1rem;
	}

	.navitem a {
		color: rgb(239, 239, 239);
		text-decoration: none;
	}
	.navitem a:hover {
		text-decoration: underline;
	}
</style>
