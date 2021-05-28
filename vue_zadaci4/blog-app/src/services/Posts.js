import axios from 'axios';

class Posts {
  constructor () {
    const instance = axios.create({
      baseURL: 'http://localhost:3000/api'
    });

    this.client = instance;
  }

  async getAll() {
    const { data } = await this.client.get('posts?filter={ "include": ["comments"] }');

    return data;
  }

  async get(id) {
    const { data } = await this.client.get(`posts/${id}?filter={ "include": ["comments"] }`);

    return data;
  }

  async add(post) {
    const { status } = await this.client.post('posts', post);

    return status;
  }

  async edit(post) {
    const { status } = await this.client.put(`posts/${post.id}`, post);

    return status;
  }

  async delete(id) {
    const { status } = await this.client.delete(`posts/${id}`);

    return status;
  }

  async addComment(comment, postId) {
    const { status } = await this.client.post(`posts/${postId}/comments`, comment);

    return status;
  }

}

export default new Posts();
