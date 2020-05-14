<template>
  <div>
    <show-blogs></show-blogs>
    <list-blogs></list-blogs>  
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlogs.vue';
import listBlog from './components/listBlogs.vue';

export default {
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlog,
    'list-blogs': listBlog
  },
  data () {
    return{
      posts: ''
    }
  },
}
</script>

<style scoped>

<style>
  body{
    margin: 0;
    font-family: 'Nunito SemiBold';
  }
</style>
