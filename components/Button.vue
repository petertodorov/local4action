<template>
  <a :href="href" :style="{ background, color }" class="simple-button"
    >{{ title }}
  </a>
</template>
<script>
export default {
  props: {
    href: {
      type: String,
      default: '/',
    },
    title: {
      type: String,
      default: 'some title',
    },
    color: {
      type: String,
      default: '',
    },
    background: {
      type: String,
      default: '',
    },
  },
}
</script>
<style>
.simple-button {
  font-size: 0.8rem;
  display: inline-block;
  border-radius: 25px;
  vertical-align: super;
  text-align: center;
  padding: 0.5em 1em;
}
.simple-button:hover {
  opacity: 0.5;
}
</style>
