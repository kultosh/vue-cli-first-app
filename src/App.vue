<template>
  <div>
    <h1>{{title}}:</h1>
    <hero></hero>
  </div>
</template>

<script>
import Hero from './Hero.vue'

export default {
  components: {
    'hero': Hero
  },
  data () {
    return{
        title: 'Nesting Compnent Globally',
    }
  }
}
</script>

<style>

</style>
