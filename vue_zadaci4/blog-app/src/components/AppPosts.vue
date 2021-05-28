<template>

  <div class="mt-0">

    <ul class="list-unstyled d-flex flex-column justify-content-center align-items-center">
      <li v-for="post in posts" :key="post.id" class="card col-10 col-sm-8 col-lg-6 col-xl-5 mb-3 mx-2">
        <div class="card-body text-start pt-1">
            <div class="d-flex flex-row justify-content-between">
              <div class="col pt-3">
                <h5 class="card-title"> <strong>{{ post.title }}</strong> </h5>
              </div>
              <div class="text-end">
                <button @click="remove(post.id)" class="btn btn-lg m-0 p-0">&times;</button>
              </div>
            </div>

            <p class="card-text text-muted mb-3 pb-0"><small> {{ post.text | preview(100) }} </small></p>

            <div class="d-flex flex-row justify-content-end align-items-end my-0">
              <p class="col self-align-start text-muted mb-0"><small> {{ post.createdAt | diffForHumans }} </small></p>
              <p v-if="post.comments.length === 1" class="col self-align-start text-muted mb-0"><small> 1 Comment </small></p>
              <p v-else class="col self-align-start text-muted mb-0"><small> {{ post.comments.length }} Comments </small></p>
              <router-link :to="`edit/${post.id}`" class="btn btn-sm btn-secondary col-sm-2 me-2">Edit</router-link>
              <router-link :to="`posts/${post.id}`" class="btn btn-sm btn-primary col-sm-3">View post</router-link>
            </div>
        </div>
      </li>

      <li v-if="isLoading" class="mt-5">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </li>

      <li v-if="!isLoading && !posts.length">No posts to show.</li>
    </ul>

  </div>

</template>

<script>
import Posts from '../services/Posts.js';

export default {
  name: 'AppPosts',

  data() {
    return {
      posts: [],
      isLoading: true
    }
  },

  async created() {
    this.posts = await this.getPosts();
  },

  methods: {
    async getPosts() {
      try {
        this.posts = await Posts.getAll();
        this.isLoading = false;
      } catch(err) {
        console.log(err);
      }
    },

    async remove(id) {
      try {
        await Posts.delete(id);
        this.posts = this.posts.filter(post => post.id !== id);
      } catch(err) {
        console.log(err);
      }
    }
  },

  filters: {
    preview(str, n) {
      return str.slice(0, n) + "...";
    }
  }
}
</script>

<style scoped>

</style>
