import Container from "./container.js"
import { delay } from "../common/promises.js"

class Sphere {
  constructor(xcells, ycells, skybox) {
    this.sphere = $(".sphere")
    this.xcells = xcells
    this.ycells = ycells
    this.cells = new Array()
    this.skybox = skybox
    this.currX = 0
    this.currY = 0
  }

  async zoomOut() {
    var sphere = this.sphere
    var x = this.currX
    var y = this.currY
    var x_angle = x * (360 / this.xcells)
    var y_angle = y * (360 / this.ycells)
    sphere.css("transition", "transform 0.5s")
    sphere.css(
      "transform",
      `translate(-50%, -50%) translateZ(100vw) rotateY(${x_angle}deg) rotateX(${y_angle}deg)`
    )
  }

  async zoomIn() {
    var sphere = this.sphere
    var x = this.currX
    var y = this.currY
    var x_angle = x * (360 / this.xcells)
    var y_angle = y * (360 / this.ycells)
    sphere.css("transition", "transform 0.5s")
    sphere.css(
      "transform",
      `translate(-50%, -50%) translateZ(150vw) rotateY(${x_angle}deg) rotateX(${y_angle}deg)`
    )
  }

  loadContainers() {
    var containers = $(".container")

    for (var i = 0; i < containers.length; i++) {
      var coord = $(containers[i]).attr("name")
      var x = coord.substring(0, 1)
      if (x == "-") {
        x = coord.substring(0, 2)
      }
      var y = coord.substring(x.length + 1)

      this.cells[i] = new Container($(containers[i]), x, y)
    }
  }

  initialOrient() {
    var cells = this.cells

    for (var i = 0; i < cells.length; i++) {
      var container = cells[i].elem
      var x = cells[i].x
      var y = cells[i].y

      var x_angle = x * (360 / this.xcells)
      var y_angle = y * (360 / this.ycells)
      console.log(x_angle + " - " + y_angle)
      container.css("position", "absolute")
      container.css(
        "transform",
        `rotateY(${x_angle}deg) rotateX(${y_angle}deg) translateZ(-150vw)`
      )
    }
  }

  async moveTo(x, y) {
    var sphere = this.sphere
    var skybox = this.skybox
    var x_angle = x * (360 / this.xcells)
    var y_angle = y * (360 / this.ycells)
    console.log("AT: " + x_angle + " - " + y_angle)
    await delay(500)
    sphere.css("transition", "transform 1s")
    sphere.css(
      "transform",
      `translate(-50%, -50%) translateZ(100vw) rotateY(${x_angle}deg) rotateX(${y_angle}deg)`
    )
    skybox.rotate(x, y, x_angle, y_angle)
    await delay(1000)
    await this.zoomIn()
  }
}

export default Sphere
