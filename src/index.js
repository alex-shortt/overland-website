import "./styles/main.scss";
import "./components/jquery-3.3.1.min.js";
import "./components/jquery.ripples.js";

// GLOBAL
$("#ovr-brand").click(() => (window.location = "brand"));
$("#ovr-music").click(() => (window.location = "music"));
$("#ovr-animation").click(() => (window.location = "animation"));
$("#ovr-about").click(() => (window.location = "about"));
$("#ovr-contact").click(() => (window.location = "contact"));

// HOME
$("#home-body").ripples({
  resolution: 512,
  dropRadius: 20,
  perturbance: 0.04
});

//BRAND
