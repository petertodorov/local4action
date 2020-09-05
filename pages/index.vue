<template>
  <main class="index-main-wrapper">
    <article class="index-text-container">
      <section class="text-container">
        <h1 class="text-title">
          Local Experiences Transforming Global Policies
        </h1>
        <a href="/" class="index-text-button">Join The Global Acceleration</a>
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
    <!-- <article class="circles-container">
      <canvas id="canvas5"></canvas>
    </article> -->
    <article ref="myButton" class="circles-container" @click="clickedButton">
      I WILL HOLD ANIMATED CIRCLES AND WILL HAVE NO BACKGROUND
      <canvas id="canvas5"></canvas>
    </article>
  </main>
</template>

<script>
// // import Canvas from './../assets/js/canvas.js'
// export default {
//   data() {
//     return {
//       message: 'Hello World!',
//     }
//   },
//   mounted() {
//     this.clickedButton()
//   },
//   methods: {
//     clickedButton() {
//       this.$refs.myButton.textContent = this.message
//     },
//   },
// }
//
</script>
