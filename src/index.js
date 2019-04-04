import "./styles/main.scss"
import "./components/jquery.ripples.js"

// GLOBAL
$("#ovr-brand").click(() => (window.location.href = "/brand"))
$("#ovr-music").click(() => (window.location.href = "/music"))
$("#ovr-animation").click(() => (window.location.href = "/animation"))
$("#ovr-about").click(() => (window.location.href = "/about"))
$("#ovr-contact").click(() => (window.location.href = "/contact"))
$("#ovr-logo").click(() => (window.location.href = "/"))

// HOME
$("#home-body").ripples({
  resolution: 512,
  dropRadius: 20,
  perturbance: 0.04
})

//BRAND
