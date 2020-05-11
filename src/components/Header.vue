<template>
  <header>
    <h1 v-on:click="changeDynamicTitle">{{title}}</h1>
  </header>
</template>

<script>
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
        this.$emit('changeTitle','Marvel Movie is Awesome!');
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
