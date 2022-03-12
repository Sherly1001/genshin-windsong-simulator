<template>
  <div class="inst">
    <div
      v-for="ins of config.instruments"
      :key="ins"
      :class="`ins ${ins == config.instrument ? 'selected' : ''}`"
      @click="config.setIns(ins)"
    >
      <img :src="`/imgs/instruments/${ins}.png`" />
    </div>
  </div>
</template>

<script lang="ts">
import { Config } from '../utils/config'

export default {
  props: {
    config: {
      type: Config,
      required: true,
    },
  },
}
</script>

<style>
.inst {
  position: absolute;
  top: 2vh;
  right: 2vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0.3em;
}

.ins {
  width: 2.5em;
  height: 2.5em;
  cursor: pointer;
  padding: 0.2em;
  border-radius: 0.4em;
}

.ins.selected {
  background: lightblue;
}
</style>
