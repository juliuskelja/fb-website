<header>
    
<nav>
    <!--Logo-->
    <div id="headerlogo">
    <img alt="Fingerbang logo" src="/images/community_icon_transparent.png" style="height:auto; max-width: 50px;"/>
    </div>
    <!--Navigation links-->
    <div id="navitem-container">
        <div class="navitem">
            <a href="/">Home</a>
        </div>
        <div class="navitem">
            <a href="/about">About</a>
        </div>
        <div class="navitem">
            <a href="/news">News</a>
        </div>
        <div class="navitem">
            <a href="/support">Support</a>
        </div>
    </div>

    <!--Play Free button-->
        <div class="playButtonDiv">
        <a href="https://store.steampowered.com/app/2200380/Fingerbang_All_Bullets_Pointin/" >
            <div class="playfreeButton">
                Play Free
            </div>
        </a>
        </div>
</nav>
</header>

<style>
header {
    background-color: #070707;
    height: 80px;
    position:sticky;
    top:0;
    z-index:1;
}
nav {
    display: flex;
    font-family: 'public pixel', sans-serif !important;
    height:100%;
    width: 100%;
    flex-direction: row;
    align-items: center;
    text-transform: uppercase;
}

#navitem-container {
    display:flex;
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
.playfreeButton {
    height: 50px;
    width: 250px;
    background: linear-gradient(to top, #999999 0%, #999999 50%, #D9D9D9 50%, #D9D9D9 100%);
    display:flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #63016D;
    border-radius: 5px;
}
.playButtonDiv a {
    text-decoration: none;
    color:#63016D !important;
    font-size: 1.2rem;
    font-weight: 600;
    -webkit-text-stroke: 1px black;
}

#headerlogo {
    padding-left:1rem;
    padding-right: 1rem;
}

.navitem {
    margin: 5px;
}

.navitem a {
    color:rgb(239, 239, 239);
    text-decoration: none;
}
.navitem a:hover {
    text-decoration: underline;
}
</style>