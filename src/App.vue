<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlogs.vue';
import listBlog from './components/listBlogs.vue';
import header from './components/header.vue';

export default {
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlog,
    'list-blogs': listBlog,
    'app-header': header,
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
