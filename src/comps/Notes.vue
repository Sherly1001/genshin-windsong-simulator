<template>
  <div class="notes">
    <Note
      v-for="tone of tones"
      :key="tone"
      :ref="tone"
      :img="`/imgs/notes/${tone.replace(/\d+/, '')}.png`"
      :src="`/media/${config.instrument}/${tone}.mp3`"
    />
  </div>
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

    return {
      map_note,
      tones,
    }
  },
  computed: {
    notes() {
      const map = new Map<string, typeof Note>()
      for (let key in this.map_note) {
        const note = this.$refs[this.map_note[key]] as [typeof Note]
        map.set(key, note[0])
      }
      return map
    },
  },
  mounted() {
    document.onkeydown = (e) => {
      this.notes.get(e.key)?.play()
    }
    document.onkeyup = (e) => {
      this.notes.get(e.key)?.release()
    }
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

@media only screen and (max-width: 1024px) {
  .notes {
    width: 85vw;
  }
}
</style>
