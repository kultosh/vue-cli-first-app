<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" name="" value="" v-model="search" placeholder="search blogs">
    <div class="single-blog" v-for="blog in filteredBlogs">
      <h3 v-rainbow>{{blog.title | to-uppercase}}</h3>
      <article>{{blog.body | snippet}}</article>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data(){
    return {
      blogs: [],
      search: ''
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      // console.log(response.data);
      this.blogs = response.data.slice(0,10);
    })
  },
  computed: {
    filteredBlogs:function(){
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search);
      })
    }
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
