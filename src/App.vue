<template>
  <div>
    <app-header></app-header>
    <heroes></heroes>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Heroes from './components/Heroes.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'heroes': Heroes
  },
  data () {

  }
}
</script>

<style scoped>

</style>
