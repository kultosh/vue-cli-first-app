<template>
  <div>
    <form-helper>
      <div slot="form-header">
          <h3>Title Here</h3>
      </div>
      <div slot="form-fields">
          <input type="text" name="name" value="" placeholder="name">
          <input type="password" name="password" value="" placeholder="password">
      </div>
      <div slot="form-controls">
          <button @click="handleSubmit">Submit</button>
      </div>
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
