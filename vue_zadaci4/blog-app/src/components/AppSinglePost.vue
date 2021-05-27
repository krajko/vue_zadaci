<template>
  <div>
    <h1> {{ post.title }}</h1>
    <p> {{ post.text }}</p>
  </div>
</template>

<script>
import Posts from '../services/Posts.js';

export default {
  name: 'Post',

  data() {
    return {
      post: {}
    }
  },

  created() {

  },

  methods: {
    async getPost() {
      try {
        this.post = await Posts.get(this.$route.params.id);
      } catch(err) {
        console.log(err);
      }
    }
  }
}
</script>
