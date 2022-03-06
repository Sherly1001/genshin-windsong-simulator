<template></template>

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
