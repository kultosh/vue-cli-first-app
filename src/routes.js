import showBlogs from './components/showBlogs.vue';
import addBlog from './components/addBlog.vue';
import listBlog from './components/listBlogs.vue';
import singleBlog from './components/singleBlog.vue';

export default [
  { path: '/', component: showBlogs},
  { path: '/add', component: addBlog },
  { path: '/list-blogs', component: listBlog},
  { path: '/blog/:id', component: singleBlog }
]
