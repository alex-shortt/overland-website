import "./styles/main.scss"
import "./components/jquery.ripples.js"
import { delay } from "./common/promises.js"

// GLOBAL
$(".ovr-brand").click(() => pushPage("brand"))
$(".ovr-music").click(() => pushPage("music"))
$(".ovr-animation").click(() => pushPage("animation"))
$(".ovr-about").click(() => pushPage("about"))
$(".ovr-contact").click(() => pushPage("contact"))
$(".ovr-logo").click(() => pushPage(""))

function getHash() {
  return location.hash.replace(/^#/, "") || ""
}

async function pushPage(page, overload) {
  function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  let title = page ? `Ovrlnd || ${jsUcfirst(page)}` : "Ovrlnd"
  let url = `#${page}`

  $(`.ovr-footer-icon`).removeClass("active")
  $(`.ovr-${page}`).addClass("active")

  await hidePages(page)

  if (!overload) {
    window.history.pushState({ page: page }, title, url)
    document.title = title
  }

  await showPage(getHash())
}

async function hidePages(nextPage) {
  const fadePages = ["home", "ovr", "media", "contact"]

  let stayInMedia = nextPage != "" && !$("#ovr").hasClass("hidden")

  unloadHome()

  fadePages.forEach(page => {
    if (stayInMedia && page == "ovr") return
    $(`#${page}`).addClass("fadeout")
  })

  await delay(750)

  fadePages.forEach(page => {
    if (stayInMedia && page == "ovr") return
    $(`#${page}`).addClass("hidden")
  })

  fadePages.forEach(page => {
    if (stayInMedia && page == "ovr") return
    $(`#${page}`).removeClass("fadeout")
  })
}

async function showPage(page) {
  if (page == "") {
    $("#home").removeClass("hidden")
    loadHome()
  } else {
    $("#ovr").removeClass("hidden")

    if (page == "contact") {
      $("#contact").removeClass("hidden")
    } else {
      $("#media").removeClass("hidden")
    }
  }
}

async function loadHome() {
  $("#home-logo").removeClass("invisible")
  await delay(750)
  $("#home-brand").removeClass("invisible")
  await delay(500)
  $("#home-music").removeClass("invisible")
  await delay(500)
  $("#home-animation").removeClass("invisible")
  await delay(500)
  $("#home-about").removeClass("invisible")
  await delay(500)
  $("#home-contact").removeClass("invisible")
  await delay(500)
}

function unloadHome() {
  $("#home-logo").addClass("invisible")
  $("#home-brand").addClass("invisible")
  $("#home-music").addClass("invisible")
  $("#home-animation").addClass("invisible")
  $("#home-about").addClass("invisible")
  $("#home-contact").addClass("invisible")
}

window.onpopstate = function(e) {
  console.log(e.state.page)
  pushPage(e.state.page, true)
}

// HOME
$("#home").ripples({
  resolution: 512,
  dropRadius: 20,
  perturbance: 0.04
})

// SITE
showPage(getHash())
