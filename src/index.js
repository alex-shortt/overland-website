import "./styles/main.scss"
import "./components/jquery.ripples.js"
import { pushPage, showPage, getHash } from "./components/navigation.js"
import { placeBrandVideos } from "./components/media.js"
import { openVideoPlayer, incrVideo, closeVideoPlayer } from "./components/videoPlayer.js"

// GLOBAL
$(".ovr-brand").click(() => pushPage("brand"))
$(".ovr-music").click(() => pushPage("music"))
$(".ovr-animation").click(() => pushPage("animation"))
$(".ovr-about").click(() => pushPage("about"))
$(".ovr-contact").click(() => pushPage("contact"))
$(".ovr-logo").click(() => pushPage(""))

// MEDIA
placeBrandVideos()

// MODAL
$("#modal-close").click(() => closeVideoPlayer())
$("#modal-left").click(() => incrVideo(-1))
$("#modal-right").click(() => incrVideo(1))

// SITE
showPage(getHash())
