<template>
  <div>
    <app-header></app-header>
    <app-heroes v-bind:heroes="heroes"></app-heroes>
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
    'app-heroes': Heroes
  },
  data() {
    return {
      heroes: [
        {role:'Captain America', name:'Chris Evan', show:false},
        {role:'Iron Man', name:'Robert Downy Jr', show:false},
        {role:'Thor', name:'Chris Hamesworth', show:false},
        {role:'Spider Man', name:'Tom Holland', show:false},
      ]
    }
  }
}
</script>

<style scoped>

</style>
