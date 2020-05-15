import showBlogs from './components/showBlogs.vue';
import addBlog from './components/addBlog.vue';
import listBlog from './components/listBlogs.vue';

export default [
  { path: '/', component: showBlogs},
  { path: '/add', component: addBlog },
  { path: '/list-blogs', component: listBlog}
]
