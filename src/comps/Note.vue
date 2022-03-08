<template>
  <div
    ref="note"
    class="note"
    @mousedown="play"
    @mouseup="release"
    @mouseleave="release"
  >
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
  computed: {
    note() {
      return this.$refs.note as HTMLDivElement
    },
    audio() {
      return this.$refs.audio as HTMLAudioElement
    },
  },
  methods: {
    play(e: KeyboardEvent | MouseEvent) {
      if (e instanceof KeyboardEvent && e.repeat) return
      this.audio.currentTime = 0
      this.audio.play()
    },
    release(_e: KeyboardEvent | MouseEvent) {},
  },
}
</script>

<style>
.note {
  cursor: pointer;
  margin: 0;
  padding: 0;
}
</style>
