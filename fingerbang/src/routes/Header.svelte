<header>
    
<nav>
    <!--Logo-->
    <div id="headerlogo">
    <img alt="Fingerbang logo" src="/images/community_icon_black.jpg" style="height:50px"/>
    </div>
    <!--Navigation links-->
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
    <!--Social medias
        <div id="socialmedias">
            <div class="smedia-item">
                <img src="/images/yt_logo.png" alt="Youtube icon">
            </div>
            <div class="smedia-item">
                <img src="/images/fb_logo.png" alt="Facebook icon">
            </div>
            <div class="smedia-item">
                <img src="/images/twt_logo.png" alt="Twitter icon">
            </div>
            <div class="smedia-item">
                <img src="/images/linkedin_logo.png" alt="LinkedIn icon">
            </div>
        </div>-->

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
    background-color: #010101;
    height: 80px;
    display:flex;
    align-items:center;
    flex-direction: row;
    position:sticky;
    top:0;
    z-index:1;
}
nav {
    display: flex;
    font-family: 'public pixel', sans-serif !important;
    max-height:100%;
    flex-direction: row;
    align-items: center;
    text-transform: uppercase;
}

.playfreeButton {
    height: 50px;
    width: 250px;
    background: linear-gradient(to top, #999999 0%, #999999 50%, #D9D9D9 50%, #D9D9D9 100%);
    right:0;
    position:absolute;
    margin-right: 1rem;
    display:flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #63016D;
    border-radius: 5px;
    top:1rem;
}
.playButtonDiv a {
    text-decoration: none;
    color:#63016D;
    font-size: 1.2rem;
    font-weight: 600;
    -webkit-text-stroke: 1px black;
}

#socialmedias {
    display:flex;
    flex-direction: row;
    right:350px;
    position:absolute;
}

.smedia-item {
    width:35px;
    margin:4px;
}

#headerlogo {
    padding-left:1rem;
}

.navitem a {
    padding-left:5rem;
    color:rgb(239, 239, 239);
    text-decoration: none;
}
.navitem a:hover {
    text-decoration: underline;
}
</style>