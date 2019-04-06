import { brand, music, animation } from "./definitions.js"

function insertContent(coll, ind, isLeft) {
  const video = coll[ind]
  const dir = isLeft ? "left" : "right"
  const thumb = `https://img.youtube.com/vi/${video.video}/maxresdefault.jpg`

  const parent = $(`.media-video.${dir}`)
  const topText = $(`.media-video.${dir} > div > h1`)
  const bottomText = $(`.media-video.${dir} > div > h2`)
  const bgImage = $(`.media-video-video.${dir}`)

  topText.html(`<span>${video.topText}</span>`)
  bottomText.html(`<span>${video.bottomText}</span>`)
  bgImage.css("background-image", `url('${thumb}')`)
}

function getUniqueVideos(coll) {
  let randVideoLeft = Math.floor(Math.random() * coll.length)
  while (coll[randVideoLeft].thumbBroken != null) {
    randVideoLeft = Math.floor(Math.random() * coll.length)
  }

  let randVideoRight = randVideoLeft
  while (
    randVideoRight == randVideoLeft ||
    coll[randVideoRight].thumbBroken != null
  ) {
    randVideoRight = Math.floor(Math.random() * coll.length)
  }

  return [randVideoLeft, randVideoRight]
}

export function placeBrandVideos() {
  const videos = getUniqueVideos(brand)
  console.log("brand")
  insertContent(brand, videos[0], true)
  insertContent(brand, videos[1], false)
}

export function placeMusicVideos() {
  const videos = getUniqueVideos(music)
  console.log("music")
  insertContent(music, videos[0], true)
  insertContent(music, videos[1], false)
}

export function placeAnimationVideos() {
  const videos = getUniqueVideos(animation)
  console.log("anim")
  insertContent(animation, videos[0], true)
  insertContent(animation, videos[1], false)
}
