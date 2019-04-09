import { brand, music, animation } from "./definitions.js"

let coll
let ind

function getCollection() {
  switch ($("#media").data().collection) {
    case "brand":
      return brand
    case "music":
      return music
    case "animation":
      return animation
  }
}

function getIndex(isLeft) {
  return $("#media").data().videos[isLeft ? 0 : 1]
}

function updateVideo() {
  if (!coll) {
    $("#modal-container > iframe").remove()
    return
  }

  const videoCode = `<iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/${
                          coll[ind].video
                        }?autoplay=1&disablekb=1&rel=0"
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                     </iframe>`

  $("#modal-container > iframe").remove()
  $("#modal-container").append(videoCode)
}

export function incrVideo(dir) {
  ind += dir
  if (ind > coll.length - 1) ind = 0
  if (ind < 0) ind = coll.length - 1

  updateVideo()
}

export function openVideoPlayer(index) {
  coll = getCollection()
  ind = index

  $("#modal").addClass("open")
  updateVideo()
}

export function closeVideoPlayer() {
  coll = null

  updateVideo()
  $("#modal").removeClass("open")
}
