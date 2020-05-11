<template>
  <div>
    <slot name="title"></slot>
    <h2>{{title}}</h2>
    <slot name="paragraph"></slot>
  </div>
</template>

<script>
  export default({
    components:{

    },
    data(){
      return{
          title: 'Form Helper'
      }
    },
    methods:{

    }
  })
</script>

<style scoped>
  h2{
    color: green;
  }
</style>
