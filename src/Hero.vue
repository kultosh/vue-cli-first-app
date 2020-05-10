<template>
  <ul>
    <h2>{{name}}</h2>
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
