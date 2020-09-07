<template>
  <main class="index-main-wrapper">
    <article class="index-text-container">
      <section class="text-container">
        <h1 class="text-title">
          Local Experiences Transforming Global Policies
        </h1>
        <Button
          :href="button.href"
          :title="button.title"
          :color="button.color"
          :background="button.background"
        />
      </section>

      <section class="time-map-container">
        <div class="text-icon-container">
          <p>Real Time map of local expreiences</p>
          <div class="icon-container">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path
                d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"
              />
            </svg>
          </div>
        </div>
      </section>
    </article>
    <article ref="canvasContainer" class="canvas-container">
      <canvas ref="canvas"></canvas>
    </article>
  </main>
</template>
<script>
import createColoredCircles from '../assets/js/canvas/createColoredCircles.js'
import circleCreator from './../assets/js/canvas/circleCreator.js'
import circleColors from './../assets/js/canvas/circleColors.js'
import { loadCanvas } from './../assets/js/canvas/loadCanvas.js'
export default {
  data() {
    return {
      circleColors,
      circleCreator,
      coloredCircles: [],
      loadCanvas,
      createColoredCircles,
      button: {
        title: 'Join The Global Acceleration',
        href: '/',
        color: 'white',
        background: '#34b8d9',
      },
    }
  },
  mounted() {
    const canvas = this.$refs.canvas
    const canvasContext = canvas.getContext('2d')
    const parentEl = this.$refs.canvasContainer.getBoundingClientRect()
    const coloredCircles = this.createColoredCircles(
      canvas,
      parentEl,
      canvasContext
    )
    this.loadCanvas(canvas, canvasContext, parentEl, coloredCircles)
  },
}
</script>
