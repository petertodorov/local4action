module.exports = class ColoredCircle {
  constructor(parentEl, canvasContext, x, y, dx, dy, radius, color) {
    this.parentElWidth = parentEl.width
    this.parentElHeight = parentEl.height

    this.canvasContext = canvasContext
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.color = color
  }

  draw() {
    this.canvasContext.beginPath()
    this.canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    this.canvasContext.strokeStyle = 'transparent'
    this.canvasContext.fillStyle = this.color
    this.canvasContext.fill()
    this.canvasContext.stroke()
  }

  update() {
    if (this.x + this.radius > this.parentElWidth || this.x - this.radius < 0) {
      this.dx = -this.dx
    }

    if (
      this.y + this.radius > this.parentElHeight ||
      this.y - this.radius < 0
    ) {
      this.dy = -this.dy
    }

    this.x += this.dx
    this.y += this.dy

    this.draw()
  }
}

// module.exports = function ColoredCircle(
//   parentEl,
//   canvasContext,
//   x,
//   y,
//   dx,
//   dy,
//   radius,
//   color
// ) {
//   // The Circle class
//   this.parentEL = parentEl
//   this.canvasContext = canvasContext
//   this.x = x
//   this.y = y
//   this.dx = dx
//   this.dy = dy

//   this.radius = radius
//   this.color = color
//   this.draw = function () {
//     this.canvasContext.beginPath()

//     this.canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)

//     this.canvasContext.strokeStyle = 'transparent'
//     this.canvasContext.fillStyle = this.color
//     this.canvasContext.fill()

//     this.canvasContext.stroke()
//   }

//   this.update = function () {
//     if (this.x + this.radius > parentEl.width || this.x - this.radius < 0) {
//       this.dx = -this.dx
//     }

//     if (this.y + this.radius > parentEl.height || this.y - this.radius < 0) {
//       this.dy = -this.dy
//     }

//     this.x += this.dx
//     this.y += this.dy

//     this.draw()
//   }
// }
