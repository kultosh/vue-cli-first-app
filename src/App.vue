<template>
  <div>
    <h1>{{title}}</h1>
    <p>
      {{greeting()}}
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return{
        title: 'Vue-CLI',
    }
  },
  methods: {
    greeting:function(){
      return "Namaste";
    }
  }
}
</script>

<style>

</style>
