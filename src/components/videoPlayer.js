import { brand, music, animation } from "./definitions.js"

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

export function openVideoPlayer(isLeft) {
  const coll = getCollection()
  const ind = getIndex(isLeft)

  $("#modal").addClass("open")
  console.log(coll, ind)
}
