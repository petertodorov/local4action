// Multiple Colored Animated Circle - Get Canvas element by Id
const canvas5 = document.getElementById('canvas5')
canvas5.classList.add('canvas-el')
const parentEl = document
  .getElementsByClassName('circles-container')[0]
  .getBoundingClientRect()

// Set Canvas dimensions
canvas5.width = parentEl.width
canvas5.height = parentEl.height

// Get drawing context
const c5 = canvas5.getContext('2d')

// The Circle class
function ColoredCircle(x, y, dx, dy, radius, color) {
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy

  this.radius = radius
  this.color = color
  this.draw = function () {
    c5.beginPath()

    c5.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)

    c5.strokeStyle = 'transparent'
    c5.fillStyle = this.color
    c5.fill()

    c5.stroke()
  }

  this.update = function () {
    if (this.x + this.radius > parentEl.width || this.x - this.radius < 0) {
      this.dx = -this.dx
    }

    if (this.y + this.radius > parentEl.height || this.y - this.radius < 0) {
      this.dy = -this.dy
    }

    this.x += this.dx
    this.y += this.dy

    this.draw()
  }
}

const coloredCircles = []

const circleColors = [
  'rgba(0,189,221,0.4)',
  'rgba(13,109,156,0.4)',
  'rgba(190,35,0,37,0.5)',
  'rgba(232,211,232,0.5)',
  'rgba(212,231,212,0.5)',
  'rgba(232,67,42,0.5)',
  'rgba(102,191,64,0.5)',
  'rgba(23,191,11,0.5)',
  'rgba(15,211,134,0.5)',
]

// Radius

for (let i = 0; i < 10; i++) {
  const radius = Math.random() * 50

  // Starting Position
  const x = Math.random() * (parentEl.width - radius * 2) + radius
  const y = Math.random() * (parentEl.height - radius * 2) + radius

  // Speed in x and y direction
  const dx = (Math.random() - 0.5) * 5
  const dy = (Math.random() - 0.5) * 5

  // Color
  const color = circleColors[i]

  coloredCircles.push(new ColoredCircle(x, y, dx, dy, radius, color))
}

function animate5() {
  requestAnimationFrame(animate5)

  c5.clearRect(0, 0, parentEl.width, parentEl.height)

  for (let r = 0; r < 10; r++) {
    coloredCircles[r].update()
  }
}

animate5()
