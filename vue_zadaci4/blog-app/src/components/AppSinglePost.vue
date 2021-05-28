<template>
  <transition appear appear-active-class="fade-in-bck">

  <div class="mx-auto mt-0 mx-3" style="max-width: 600px;">
    <div v-if="isLoading && !!post" class="mt-5 text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
    </div>

    <div v-else>
      <div class="row text-start mb-3">
        <h3 class="mb-1"><strong> {{ post.title }} </strong></h3>
        <p class="text-muted mb-1"><small> {{ post.createdAt | formatDate }} </small></p>
        <p class="mt-1"> {{ post.text }}</p>
      </div>


      <div class="text-start">
        <h5 v-if="post.comments.length && post.comments.length !== 1"><strong> {{ post.comments.length }} Comments</strong></h5>
        <h5 v-else>1 Comment</h5>
        <hr class="mt-3">

        <form class="d-flex flex-row justify-content-around align-items-end my-4" v-on:submit.prevent="addComment(post.id, comment)">
          <textarea class="form-control col" v-model="comment" rows="3" placeholder="Add comment" required></textarea>
          <button class="btn btn-primary col-2 ms-3" type="submit">Submit</button>
        </form>

        <ul v-if="!!post.comments" class="list-unstyled mt-4">
          <li v-for="comment in post.comments" :key="comment.id">
            <p class="text-muted mt-3 mb-0 pb-0"><em> "{{ comment.text }}" </em></p>
            <p class="text-muted"><em><small> {{ comment.createdAt | diffForHumans }} </small></em></p>
          </li>
        </ul>
      </div>
    </div>
  </div>

  </transition>
</template>

<script>
import Posts from '../services/Posts.js';

export default {
  name: 'Post',

  data() {
    return {
      post: {},
      comment: '',
      isLoading: true
    }
  },

  created() {
    this.getPost();
  },

  methods: {
    async getPost() {
      try {
        this.post = await Posts.get(this.$route.params.id);
        this.post.comments.reverse(); // pošto komentari dolaze sortirani po created_at asc
        this.isLoading = false;
      } catch(err) {
        console.log(err);
      }
    },

    async addComment(id) {
      try {
        await Posts.addComment({ text: this.comment }, id);
        this.post.comments.unshift({ text: this.comment }); // da na vrhu liste bude novi komentar
        this.comment = "";
      } catch(err) {
        console.log(err);
      }
    }

  }
}
</script>

<style>

</style>
