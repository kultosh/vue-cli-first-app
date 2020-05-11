<template>
  <div>
    <form-helper>
      <h1 slot="title">Slot Title</h1>
      <p slot="paragraph">This is the paragraph for slot.</p>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './components/formHelper.vue';

export default {
  components:{
    'form-helper': formHelper
  },
  data () {
    return{
        title: 'Nesting Compnent Globally',
    }
  }
}
</script>

<style scoped>
 h1{
   color: purple;
 }
</style>
