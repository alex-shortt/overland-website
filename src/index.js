import "./styles/main.scss"
import "./components/jquery.ripples.js"
import { pushPage, showPage, getHash } from "./components/navigation.js"
import { placeBrandVideos } from "./components/media.js"

// GLOBAL
$(".ovr-brand").click(() => pushPage("brand"))
$(".ovr-music").click(() => pushPage("music"))
$(".ovr-animation").click(() => pushPage("animation"))
$(".ovr-about").click(() => pushPage("about"))
$(".ovr-contact").click(() => pushPage("contact"))
$(".ovr-logo").click(() => pushPage(""))

// SITE
showPage(getHash())
placeBrandVideos()
