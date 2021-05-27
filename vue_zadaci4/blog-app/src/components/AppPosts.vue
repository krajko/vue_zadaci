<template>
  <div class="mt-0">
    <ul class="list-unstyled d-flex flex-column justify-content-center align-items-center">
      <li v-for="(post) in posts" :key="post.id" class="card col-10 col-sm-8 col-md-4 mb-3">
        <div class="card-body text-start">
            <h5 class="card-title"> <strong>{{ post.title }}</strong> </h5>
            <hr class="mt-3">

            <p class="card-text mb-3"> {{ post.text | preview }} </p>

            <div class="d-flex flex-row justify-content-end">
              <router-link :to="`posts/${post.id}`" class="btn btn-primary px-4 mt-0">View post</router-link>
            </div>
        </div>
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
    this.posts = this.getPosts();
  },

  methods: {
    async getPosts () {
      try {
        this.posts = await Posts.getAll();
      } catch(err) {
        console.log(err);
      }
    }
  },

  filters: {
    preview(str) {
      return str.slice(0, 250) + "...";
    }
  }
}
</script>

<style scoped>

</style>
