<template>
  <div class="notes">
    <div v-for="i of [3, 2, 1]" :key="i" class="interval">
      <Node
        v-for="tone of ['do', 're', 'mi', 'fa', 'so', 'la', 'ti']"
        :key="`${tone}${i}`"
        :img="`/imgs/notes/${tone}.png`"
        :src="`/media/${config.instrument}/${tone}${i}.mp3`"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Node from './Node.vue'
import { Config } from '../utils/config'

export default {
  props: {
    config: {
      type: Config,
      required: true,
    },
  },
  components: { Node },
}
</script>

<style>
.notes {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
}

.interval {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  place-items: center;
}
</style>
