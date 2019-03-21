class Skybox {
  constructor() {
    this.xbox = $(".Skybox-rotor-x")
    this.ybox = $(".Skybox-rotor-y")
  }

  rotate(x, y, xAngle, yAngle) {
    var xbox = this.xbox
    var ybox = this.ybox

    xbox.css("transition", "transform 1s")
    ybox.css("transition", "transform 1s")

    xbox.css("transform", `rotateY(${xAngle}deg)`)
    ybox.css("transform", `rotateX(${yAngle}deg)`)
  }
}

export default Skybox
