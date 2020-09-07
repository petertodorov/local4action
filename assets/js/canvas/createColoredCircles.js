module.exports = function createColoredCircles(
  canvas,
  parentEl,
  canvasContext
) {
  // Set Canvas dimensions
  canvas.width = parentEl.width
  canvas.height = parentEl.height

  const coloredCircles = []
  for (let i = 0; i < this.circleColors.length; i++) {
    // Radius
    // const radius = Math.random() * 50
    const radius = 50

    // Starting Position
    const x = Math.random() * (parentEl.width - radius * 2) + radius
    const y = Math.random() * (parentEl.height - radius * 2) + radius

    // Speed in x and y direction
    const dx = (Math.random() - 0.5) * 3
    const dy = (Math.random() - 0.5) * 3

    // Color
    const color = this.circleColors[i]
    const CircleCreator = this.circleCreator

    const circle = new CircleCreator(
      parentEl,
      canvasContext,
      x,
      y,
      dx,
      dy,
      radius,
      color
    )
    coloredCircles.push(circle)
  }
  return coloredCircles
}
