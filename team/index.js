import "./styles/main.scss"
import { cloudfrontURL, members } from "./components/definitions"

export function getHash() {
  return location.hash.replace(/^#/, "") || ""
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const member = members[getHash()]
if (!member) {
  window.location.hash = ""
  window.location.pathname = ""
}

function resolveImageURL(url) {
  return `${cloudfrontURL}${url}`
}

$("#name").html(member.name)
$("#desc").html(member.desc)
$("#profile-image").attr("src", resolveImageURL(member.profileImage))
shuffle(member.photos).map(photo =>
  $(".mosaic-wrapper").append(`
  <div class="mosaic-item">
    <img src=${resolveImageURL(photo)} />
  </div>
`)
)

$(".mosaic-wrapper").masonry({
  itemSelector: ".mosaic-item",
  isAnimated: true
})
// // layout Masonry after each image loads
// $grid.imagesLoaded().progress(function() {
//   $grid.masonry("layout")
// })
