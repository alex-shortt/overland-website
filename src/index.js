import "./styles/main.scss"
import "./components/jquery.ripples.js"
import { pushPage, showPage, getHash } from "./components/navigation.js"
import { placeBrandVideos } from "./components/media.js"
import { openVideoPlayer } from "./components/videoPlayer.js"

// GLOBAL
$(".ovr-brand").click(() => pushPage("brand"))
$(".ovr-music").click(() => pushPage("music"))
$(".ovr-animation").click(() => pushPage("animation"))
$(".ovr-about").click(() => pushPage("about"))
$(".ovr-contact").click(() => pushPage("contact"))
$(".ovr-logo").click(() => pushPage(""))

// MEDIA
placeBrandVideos()
$(".media-video.left").click(() => {openVideoPlayer(true)})
$(".media-video.right").click(() => {openVideoPlayer(false)})


// SITE
showPage(getHash())
