<template>
  <div class="notes" v-if="rotate_ok">
    <Note
      v-for="tone of tones"
      :key="tone"
      :ref="tone"
      :img="`/imgs/notes/${tone.replace(/\d+/, '')}.png`"
      :src="`/media/${config.instrument}/${tone}.mp3`"
    />
  </div>
  <div v-else class="noti"><span>please rotate the screen</span></div>
</template>

<script lang="ts">
import Note from './Note.vue'
import { Config } from '../utils/config'

export default {
  props: {
    config: {
      type: Config,
      required: true,
    },
  },
  components: { Note },
  data() {
    const map_note = {
      q: 'do3',
      w: 're3',
      e: 'mi3',
      r: 'fa3',
      t: 'so3',
      y: 'la3',
      u: 'ti3',

      a: 'do2',
      s: 're2',
      d: 'mi2',
      f: 'fa2',
      g: 'so2',
      h: 'la2',
      j: 'ti2',

      z: 'do1',
      x: 're1',
      c: 'mi1',
      v: 'fa1',
      b: 'so1',
      n: 'la1',
      m: 'ti1',
    } as { [index: string]: string }

    const tones = Object.values(map_note)

    const rotate_ok = this.check_rotate()

    return {
      map_note,
      tones,
      rotate_ok,
    }
  },
  computed: {
    notes() {
      const map = new Map<string, typeof Note>()
      for (let key in this.map_note) {
        const note = this.$refs[this.map_note[key]] as [typeof Note]
        if (note) map.set(key, note[0])
      }
      return map
    },
  },
  mounted() {
    document.onkeydown = (e) => {
      this.notes.get(e.key)?.play(e)
    }
    document.onkeyup = (e) => {
      this.notes.get(e.key)?.release(e)
    }
    window.onresize = (_e) => {
      this.rotate_ok = this.check_rotate()
    }
    window.onorientationchange = (_e) => {
      this.rotate_ok = this.check_rotate()
    }
  },
  methods: {
    check_rotate() {
      return (
        window.orientation == 90 || window.screen.width > window.screen.height
      )
    },
  },
}
</script>

<style>
.notes {
  margin: auto;
  position: relative;
  top: 40vh;
  width: 80vw;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: 3vw;
  grid-row-gap: 2vw;
  justify-items: center;
  align-items: center;
}

.noti {
  position: relative;
  top: 30vh;
  margin: auto;
  width: 85vw;
  height: 10vh;
  background: #363636;
  color: #ff5050;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5em;
  box-shadow: 0.5em 0.5em 5em 2em black;
  border-radius: 1em;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 1024px) {
  .notes {
    width: 85vw;
  }
}
</style>
