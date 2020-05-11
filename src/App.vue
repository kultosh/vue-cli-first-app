<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-heroes v-bind:heroes="heroes"></app-heroes>
    <app-footer v-bind:title="title"></app-footer>
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
      ],
      title: "Avenger"
    }
  },
  methods: {
    updateTitle:function(currentTitle){
      this.title = currentTitle;
    }
  }
}
</script>

<style scoped>

</style>
