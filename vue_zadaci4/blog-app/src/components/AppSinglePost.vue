<template>
  <div class="mx-auto mt-0" style="max-width: 600px;">
    <div class="row text-start">
      <h3><strong> {{ post.title }} </strong></h3>
      <p> {{ post.text }}</p>
    </div>
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
    this.getPost();
  },

  methods: {
    async getPost() {
      try {
        this.post = await Posts.get(this.$route.params.id);
        console.log(this.post);
      } catch(err) {
        console.log(err);
      }
    }

  }
}
</script>
