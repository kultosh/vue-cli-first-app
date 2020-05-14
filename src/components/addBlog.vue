<template>
  <div id="add-blog">
    <h2>Add a New Movie Post</h2>
    <form v-if="!submitted">
      <label for="">Movie Title:</label>
      <input type="text" name="" v-model.lazy="blog.title">
      <label for="">Movie Content:</label>
      <textarea name="name" rows="8" cols="80" v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label for="">Marvel</label>
        <input type="checkbox" name="" value="marvel" v-model="blog.categories">
        <label for="">DC</label>
        <input type="checkbox" name="" value="dc" v-model="blog.categories">
        <label for="">Disney</label>
        <input type="checkbox" name="" value="disney" v-model="blog.categories">
      </div>
      <label for="">Character:</label>
      <select v-model="blog.characters">
        <option v-for="character in characters">{{character}}</option>
      </select>
      <button type="button" v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post!</h3>
    </div>
    <div id="preview">
      <h3>Preview Movie</h3>
      <p>Movie Title:{{blog.title}}</p>
      <p>Movie Content:</p>
      <p>{{blog.content}}</p>
      <p>Movie Categories:</p>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>
      </ul>
      <p>Characters:{{blog.characters}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return{
      blog: {
        title: '',
        content:'',
        categories: [],
        characters: ''
      },
      characters: ['Captain America','Super Man', 'X-Men'],
      submitted: false,
    }
  },
  // mounted:function(){
  //
  //     axios.post('http://jsonplaceholder.typicode.com/posts',{
  //       title: this.blog.title,
  //       body: this.blog.content,
  //       userId: 1
  //     }).then(data=>{
  //       console.log(data);
  //       this.submitted = true;
  //     })
  // }
  // methods:{
  //   post:function(){
  //     axios.post('http://jsonplaceholder.typicode.com/posts',{
  //       title: this.blog.title,
  //       body: this.blog.content,
  //       userId: 1
  //     }).then(response=>{
  //       console.log(response.data);
  //       this.submitted = true;
  //     })
  //   }
  // }
  methods:{
    post:function(){
      axios.post('http://jsonplaceholder.typicode.com/posts',{
        title: this.blog.title,
        body: this.blog.content,
        userId: 1
      }).then(data=>{
        console.log(data);
        this.submitted = true;
      })
    }
  }

}
</script>

<style>
  #add-blog*{
    box-sizing: border-box;
  }
  #add-blog{
    margin: 20px auto;
    max-width: 500px;
  }
  label{
    display: block;
    margin: 20px 0 10px;
  }
  input[type="text"],textarea{
    display: block;
    width: 100p%;
    padding: 8px;
  }
  #preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }
  h3{
    margin-top: 10px;
  }
  #checkboxes input{
    display: inline-block;
    margin-right: 10px;
  }
  #checkboxes label{
    display: inline-block;
  }
</style>
