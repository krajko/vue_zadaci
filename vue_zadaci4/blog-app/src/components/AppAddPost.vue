<template>
  <transition name="fade-in-fwd">

  <div class="mt-0">

    <form class="mx-auto" style="max-width: 500px;" v-on:submit.prevent="submit">
      <input class="form-control bold mb-3" v-model.trim="$v.post.title.$model" :class="{ 'is-invalid': !$v.post.title.minLength }" type="text" placeholder="Title" required>
      <textarea class="form-control mb-3" v-model.trim="$v.post.text.$model" :class="{ 'is-invalid': !$v.post.text.maxLength }" rows="12" placeholder="Content" required></textarea>

      <div class="d-flex flex-row justify-content-center">
        <button class="col-3 btn btn-secondary me-2" type="button" @click="reset">Reset</button>
        <button class="col-3 btn btn-warning ms-2" type="submit">Submit</button>
      </div>
    </form>

  </div>

  </transition>
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

  created() {
    this.get()
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
    },

    async get() {
      if (this.editMode) {
        try {
          this.post = await Posts.get(this.$route.params.id);
        } catch(err) {
          console.log(err);
          reset();
        }
      } else {
        reset();
      }
    },

    async edit() {
      try {
        await Posts.edit(this.post);
        this.$router.push({ name: 'Post', params: { id: this.post.id} });
      } catch(err) {
        console.log(err);
      }
    },

    submit() {
      if (this.editMode) {
        this.edit();
      } else {
        this.add();
      }
    }
  },

  computed: {
    editMode() {
      if (this.$route.params.id) {
        return true;
      }

      return false;
    }
  }
}
</script>

<style scoped>

  .form-control:focus {
    border-color: #75cfb9de;
  }

</style>
