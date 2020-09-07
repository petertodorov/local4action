<template>
  <div class="about-main-wrapper">
    <article class="about-content-wrapper">
      <h3 class="content-box title">
        I AM THE ABOUT PAGE Lorem ipsum dolor sit amet consectetur adipisicing
        elit Vel assumenda voluptatum cumque nesciunt fugiat sequi dolores
        repellendus veritatis inventore ducimus
      </h3>
      <section class="content-box small-para">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis quos
          sunt laboriosam minima eos, esse quam repellendus incidunt omnis!
          Laudantium eius quis suscipit eaque nihil incidunt, aperiam numquam
          vel amet!
        </p>
      </section>
      <section class="content-box left-padding">
        <h4 class="short-title top-layer">
          Three key concepts should be applied for sustainable grass roots
          movements
        </h4>
        <p class="top-layer">
          Concept Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Deleniti, itaque.
        </p>
        <p class="top-layer">
          Concept Lorem ipsum dolor sit amet, consectetur adipisicing.
        </p>
        <p class="top-layer">
          Concept: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
          quibusdam sunt sit maxime recusandae inventore voluptates dolore.
          Laboriosam, porro architecto!
        </p>
      </section>

      <section class="content-box list">
        <h4 class="top-layer">
          Sustainable development as basis for small scale global bussiness
          initiatives
        </h4>
        <p class="top-layer">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          expedita ullam hic vel libero esse nemo reprehenderit animi dolorem
          earum nostrum cumque et distinctio pariatur inventore voluptate
          perspiciatis aut unde cupiditate, id molestias fugit mollitia
          recusandae! Laudantium excepturi dicta suscipit.
        </p>
      </section>
      <section class="content-box apply">
        <h3>How can you apply?</h3>
        <p>The last call to apply was Lorem ipsum dolor sit.</p>
        <Button
          :href="button.href"
          :title="button.title"
          :color="button.color"
          :background="button.background"
        />
      </section>
    </article>
    <div class="circle-wrapper">
      <span class="circle blue"></span>
      <span class="circle red"></span>
      <span class="circle light-red"></span>
      <span class="circle yellow"></span>
      <span class="circle green"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      button: {
        title: 'Download for more details the Call for Local4Action HUBs',
        href: '/',
        color: 'white',
        background: '#e80707',
      },
    }
  },
}
</script>
<style>
.about-main-wrapper .simple-button {
  margin: 2rem 0;
}
</style>
