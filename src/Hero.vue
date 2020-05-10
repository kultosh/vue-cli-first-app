<template>
  <ul>
    <h1>{{name}}</h1>
    <li v-for="hero in characters">{{hero}}</li>
  </ul>
</template>

<script>
  export default{
    data(){
      return {
          name: 'Super Heroes',
          characters: ['Captain America','Iron Man','Thor','Spider Man']
      }
    }
  }
</script>

<style>
  h1{
    color: blue;
  }
</style>
