import { brand, music, animation } from "./definitions.js"
import { openVideoPlayer } from "./videoPlayer.js"

function insertContent(coll, ind, isLeft) {
  const video = coll[ind]
  const dir = isLeft ? "left" : "right"
  const thumb = `https://img.youtube.com/vi/${video.video}/maxresdefault.jpg`

  const parent = $(`.media-video.${dir}`)
  const topText = $(`.media-video.${dir} > div > h1`)
  const bottomText = $(`.media-video.${dir} > div > h2`)
  const bgImage = $(`.media-video-video.${dir}`)

  parent.off("click")
  parent.click(() => openVideoPlayer(ind))
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

function insertVidoTiles(coll) {
  $("#media-bottom").html("")
  $("#media-bottom").scrollTop()

  for (const [i, vid] of coll.entries()) {
    const thumb = `https://img.youtube.com/vi/${vid.video}/maxresdefault.jpg`
    $("#media-bottom").append(
      `<div id="video-${i}" class="media-tile">
        <div class="media-tile-box">
          <div class="media-tile-image" style="background-image:url('${thumb}')"></div>
          <i class="fas fa-play media-tile-play"></i>
        </div>
        <h2>${vid.topText}</h2>
        <h4>${vid.bottomText}</h4>
      </div>`
    )

    $(`#video-${i}`).click(() => openVideoPlayer(i))
  }
}

export function placeBrandVideos() {
  const videos = getUniqueVideos(brand)
  insertContent(brand, videos[0], true)
  insertContent(brand, videos[1], false)
  insertVidoTiles(brand)
  $("#media").data({ collection: "brand", videos: videos })
}

export function placeMusicVideos() {
  const videos = getUniqueVideos(music)
  insertContent(music, videos[0], true)
  insertContent(music, videos[1], false)
  insertVidoTiles(music)
  $("#media").data({ collection: "music", videos: videos })
}

export function placeAnimationVideos() {
  const videos = getUniqueVideos(animation)
  insertContent(animation, videos[0], true)
  insertContent(animation, videos[1], false)
  insertVidoTiles(animation)
  $("#media").data({ collection: "animation", videos: videos })
}
