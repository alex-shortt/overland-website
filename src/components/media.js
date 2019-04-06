var brand = [
  {
    video: "NuQIfcNAnCg",
    topText: "Khaotic Collective",
    bottomText: "March Release"
  },
  {
    video: "Ep9TCmd_PC0",
    topText: "Khaotic Collective",
    bottomText: "Sequoia Launch"
  },
  {
    thumbBroken: true,
    video: "FRJ0go0OEWM",
    topText: "Reef",
    bottomText: "Beach Freely"
  },
  {
    video: "B8_Y4tdwntw",
    topText: "Splat",
    bottomText: "Directors Cut"
  },
  {
    video: "OUp_3q2pMo0",
    topText: "Toyota",
    bottomText: "2016 Tacoma"
  },
  {
    video: "-01KseFHJsE",
    topText: "Lucid Monday",
    bottomText: "Los Angeles"
  },
  {
    video: "4KxoIRQcEsM",
    topText: "Fox",
    bottomText: "Sports"
  },
  {
    video: "leRoYrFXaiM",
    topText: "Subway",
    bottomText: "Daniel Suarez"
  },
  {
    video: "h3nbcv2T8xk",
    topText: "Legacy",
    bottomText: "Sports Performance"
  }
]

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

export function placeBrandVideos() {
  let randVideoLeft = Math.floor(Math.random() * brand.length)
  while (brand[randVideoLeft].thumbBroken != null) {
    randVideoLeft = Math.floor(Math.random() * brand.length)
  }

  let randVideoRight = randVideoLeft
  while (
    randVideoRight == randVideoLeft ||
    brand[randVideoRight].thumbBroken != null
  ) {
    randVideoRight = Math.floor(Math.random() * brand.length)
  }

  insertContent(brand, randVideoLeft, true)
  insertContent(brand, randVideoRight, false)
}
