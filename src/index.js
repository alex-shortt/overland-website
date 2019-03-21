import "./styles/main.scss"
import Sphere from "./components/sphere.js"
import Skybox from "./components/skybox.js"


async function init(xcells, ycells) {
  var skybox = new Skybox()
  var sphere = new Sphere(xcells, ycells, skybox)
  sphere.loadContainers()
  sphere.initialOrient()

  $(document).keydown(async function(e) {
    switch (e.keyCode) {
      case 37:
        await sphere.zoomOut()
        sphere.currX--
        await sphere.moveTo(sphere.currX, sphere.currY)
        break
      case 39:
        sphere.zoomOut()
        sphere.currX++
        sphere.moveTo(sphere.currX, sphere.currY)
        break
      case 38:
        sphere.zoomOut()
        sphere.currY++
        sphere.moveTo(sphere.currX, sphere.currY)
        break
      case 40:
        sphere.zoomOut()
        sphere.currY--
        sphere.moveTo(sphere.currX, sphere.currY)
        break
    }
  })
}

init(9, 9)
