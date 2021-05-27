<template>
  <div class="container">
    <ul class="list-unstyled d-flex flex-column justify-content-center">
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>

      <li v-if="posts.length === 0">No posts to show.</li>
    </ul>
  </div>
</template>

<script>
import Posts from '../services/Posts.js';

export default {
  name: 'AppPosts',

  data() {
    return {
      posts: []
    }
  },

  created() {

  },

  methods: {
    async getPosts () {
      try {
        this.posts = await Posts.getAll();
      } catch(err) {
        console.log(err);
        this.posts = [];
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
