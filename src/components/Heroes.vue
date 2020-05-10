<template>
  <div id="heroes">
    <ul>
      <li v-for="hero in heroes" v-on:click="hero.show =! hero.show">
        <h2>{{hero.role}}</h2>
        <h3 v-show="hero.show">{{hero.name}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data(){
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
  #heroes{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }

  li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin:10px;
  }
</style>
