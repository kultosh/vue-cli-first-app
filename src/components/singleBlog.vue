<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>Character: {{blog.characters}}</p>
    <ul>
      <li v-for="category in blog.categories">{{category}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  created(){
    axios.get('https://vue-cli-blog-app.firebaseio.com/posts/'+ this.id + '.json').then(response => {
      return response.data;
    }).then(response => {
      this.blog = response;
    })
  }
}
</script>
<style scoped>
 #single-blog{
   max-width: 960px;
   margin: 0 auto;
 }
</style>
