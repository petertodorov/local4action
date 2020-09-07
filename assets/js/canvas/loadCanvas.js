module.exports = {
  loadCanvas: (canvas, canvasContext, parentEl, coloredCircles) => {
    function animateCircles() {
      requestAnimationFrame(animateCircles)
      canvasContext.clearRect(0, 0, parentEl.width, parentEl.height)
      for (let index = 0; index < coloredCircles.length; index++) {
        coloredCircles[index].update()
      }
    }
    animateCircles()
  },
}
