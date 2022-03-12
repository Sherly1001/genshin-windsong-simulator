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
      this.note.classList.add('pressed')
      this.audio.currentTime = 0
      this.audio.play()
    },
    release(_e: KeyboardEvent | MouseEvent) {
      this.note.classList.remove('pressed')
    },
  },
}
</script>

<style>
.note {
  position: relative;
  cursor: pointer;
  margin: 0;
  padding: 0;
  width: 12vh;
  height: 12vh;
  border-radius: 50%;
}

.note.pressed {
  transform: scale(0.9);
  background: lightblue;
}

.note.pressed img {
  opacity: 0.5;
}

@media only screen and (max-width: 1024px) {
  .note {
    width: 14vh;
    height: 14vh;
  }
}

@media only screen and (max-width: 740px) {
  .note {
    width: 16vh;
    height: 16vh;
  }
}
</style>
