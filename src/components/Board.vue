<template>
    <div id='pixel'>
        <li v-for="pixel in pixels" :key="pixel">
            {{ pixel }}
        </li>
    </div>
</template>

<script>

import Pixel from './Pixel'
export default {
  name: 'Pixel',
  components: {
    Pixel
  },
  data () {
    return {
      pixels: [
        1,2,3,4,5,6,7,8,9
      ]
    }
  }
}
</script>

<style>

</style>