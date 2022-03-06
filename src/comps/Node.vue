<template>
  <div class="node" @mousedown="play">
    <img :src="img" />
    <audio :src="src" ref="audio" />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
  methods: {
    play() {
      const audio = this.$refs.audio as HTMLAudioElement
      audio.currentTime = 0
      audio.play()
    },
  },
}
</script>

<style>
.node {
  cursor: pointer;
}
</style>
