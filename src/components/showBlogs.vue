<template>
  <div v-theme="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <div class="single-blog" v-for="blog in blogs">
      <h3 v-rainbow>{{blog.title}}</h3>
      <article>{{blog.body}}</article>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data(){
    return {
      blogs: [],
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      // console.log(response.data);
      this.blogs = response.data.slice(0,10);
    })
  }
}
</script>
<style scoped>
  #show-blogs{
    max-width: 800px;
    margin: 0 auto;
  }

  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }
</style>
