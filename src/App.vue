<template>
  <div>
    <add-blog></add-blog>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
export default {
  components: {
    'add-blog': addBlog
  },
  data () {
    return{
      posts: ''
    }
  },
  mounted:function(){
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => this.posts = response.data);
  }
}
</script>

<style scoped>

<style>
  body{
    margin: 0;
    font-family: 'Nunito SemiBold';
  }
</style>
