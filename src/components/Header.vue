<template>
  <header>
    <h1 v-on:click="changeDynamicTitle">{{title}}</h1>
  </header>
</template>

<script>
  import {bus} from '../main';

  export default{
    props: {
      title:{
        type: String
      }
    },
    data(){
      return {
        title: 'Marvel Super Hero'
      }
    },
    methods: {
      changeDynamicTitle:function(){
        this.title = 'Super Hero';
        // bus.$emit('titleChange','This is Change in Marvel!');
        bus.$emit('titleChange', this.title);
      }
    }
  }
</script>

<style scoped>
  header{
    background: lightgreen;
    padding: 10px;
  }

  h1{
    color: #222;
    text-align: center;
  }
</style>
