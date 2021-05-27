<template>
  <div class="mt-0">

    <form class="row mx-auto" style="max-width: 500px;" v-on:submit.prevent="add">
      <input class="col-6 form-control mb-3" v-model.trim="$v.post.title.$model" :class="{ 'is-invalid': !$v.post.title.minLength }" type="text" placeholder="Title" required>
      <textarea class="col-6 form-control mb-3" v-model="$v.post.text.$model" :class="{ 'is-invalid': !$v.post.text.maxLength }" rows="12" placeholder="Content" required></textarea>
      <button class="col-3 mx-auto btn btn-secondary" type="button" @click="reset">Reset</button>
      <button class="col-3 mx-auto btn btn-primary" type="submit">Submit</button>
    </form>

  </div>
</template>

<script>
import Posts from '../services/Posts.js';
import { required, minLength, maxLength } from 'vuelidate/lib/validators';

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

  validations: {
    post: {
      title: {
        required,
        minLength: minLength(2)
      },
      text: {
        required,
        maxLength: maxLength(300)
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
