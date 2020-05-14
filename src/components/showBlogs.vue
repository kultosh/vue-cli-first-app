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
  },
  filters: {
    // 'to-uppercase':function(value){
    //   return value.toUpperCase();
    // }
    //Can be use as:
    toUppercase(value) {
      return value.toUpperCase();
    },
    snippet(value) {
      return value.slice(0,100) + '...';
    }
  },
  directives: {
    'rainbow':{
      bind(el,binding,vnode){
        el.style.color ="#"+Math.random().toString(16).slice(2,8);
      }
    },
    'theme':{
      bind(el,binding,vnode){
        if(binding.value == 'wide'){
          el.style.maxWidth = "1200px"
        }
        else if(binding.value == 'narrow'){
          el.style.maxWidth = "560px"
        }
        if(binding.arg == 'column'){
          el.style.background = '#ddd';
          el.style.padding = '20px';
        }
      }
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
