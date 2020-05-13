<template>
  <div>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button type="button" name="button" v-on:click=" component = 'form-one' ">Form One</button>
    <button type="button" name="button" v-on:click=" component = 'form-two' ">Form Two</button>
  </div>
</template>

<script>
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';

export default {
  components:{
    'form-one': formOne,
    'form-two': formTwo
  },
  data () {
    return{
      component: "form-one"
    }
  },
  methods: {
    // showFormOne:function(){
    //   this.component = "form-one";
    // },
    // showFormTwo:function(){
    //   this.component = "form-two";
    // }
  }
}
</script>

<style scoped>

</style>
