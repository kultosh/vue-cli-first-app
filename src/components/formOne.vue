<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form One - Contact Us</h3>
        <p>Fill in this form to contact us</p>
      </div>
      <div slot="form-fields">
        <input type="text" name="" value="" placeholder="name">
        <label>Your Message</label>
        <textarea name="name" rows="8" cols="80"></textarea>
      </div>
      <div slot="form-controls">
        <button type="button" name="button" v-on:click="handleSubmit">Send</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
  import formHelper from './formHelper.vue';
  export default {
    components: {
      'form-helper': formHelper
    },

    data(){
      return {

      }
    }
  }
</script>
