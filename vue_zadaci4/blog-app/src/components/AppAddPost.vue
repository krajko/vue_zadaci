<template>
  <div class="mt-0">

    <form class="row mx-auto" style="max-width: 500px;" v-on:submit.prevent="add">
      <input class="col-6 form-control mb-3" v-model="post.title" type="text" placeholder="Title">
      <textarea class="col-6 form-control mb-3" v-model="post.text" rows="12" placeholder="Content"></textarea>
      <button class="col-3 mx-auto btn btn-secondary" type="button" @click="reset">Reset</button>
      <button class="col-3 mx-auto btn btn-primary" type="submit">Submit</button>
    </form>

  </div>
</template>

<script>
import Posts from '../services/Posts.js';

export default {
  name: 'AddPost',

  data() {
    return {
      post: {
        title: '',
        text: ''
      }
    }
  },

  methods: {
    async add() {
      try {
        await Posts.add(this.post);
        this.$router.push({ name: 'Posts' });
      } catch(err) {
        console.log(err);
      }
    },

    reset() {
      this.post = {
        title: '',
        text: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
