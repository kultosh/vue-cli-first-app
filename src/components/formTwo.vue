<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form Two - Log In</h3>
        <p>Enter Your Details To Log-In</p>
      </div>
      <div slot="form-fields">
        <input type="text" name="" value="" placeholder="username">
        <input type="password" name="" value="" placeholder="password">
        <label>Your Message</label>
        <textarea name="name" rows="8" cols="80"></textarea>
      </div>
      <div slot="form-controls">
        <button type="button" name="button" v-on:click="handleSubmit">Login</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
  import formHelper from './formHelper';
  export default {
    components: {
      'form-helper': formHelper
    }
  }
</script>
