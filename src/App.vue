<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlogs.vue';

export default {
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlog
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
