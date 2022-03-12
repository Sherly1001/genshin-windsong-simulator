<template>
  <Settings :config="config" />
  <Notes :config="config" />
</template>

<script lang="ts">
import { useCookies } from 'vue3-cookies'

import Settings from './comps/Settings.vue'
import Notes from './comps/Notes.vue'

import { Config } from './utils/config'

const { cookies } = useCookies()

export default {
  components: {
    Settings,
    Notes,
  },
  data(): any {
    let ins = cookies.get('ins')
    return {
      config: new Config(cookies, ins),
    }
  },
}
</script>

<style>
body {
  overflow: hidden;
  margin: 0;
  padding: 0;
}

#app {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  background: url('/imgs/bg.jpg') center;
}

#app * {
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

img {
  width: 100%;
  height: 100%;
}
</style>
