<template lang="html">
  <div>
    <navbar></navbar>
    <div class="container">
      <button class="btn btn-primary" @click="fetchViewRooms" name="button">Get viewrooms</button>
      <ul class="list-group" v-for="things in rooms">
        <li class="list-group-item">{{things.name}}</li>
        <router-link tag="button" :to='`viewroom/${things.name}`'>Enter</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import navbar from "./Navbar.vue"
import viewroom from "./Viewroom"
export default {
  components: {
    navbar,viewroom
  },
  data () {
    return {
      rooms: ''
    }
  },
  methods: {
    fetchViewRooms() {
      this.$http.get('http://localhost:3000/messages/viewrooms')
        .then(response => {
          return response.json();

        })
        .then(data => {
          console.log(data);
          this.rooms = data
          console.log(this.rooms);
        });
    }
  },
  mounted() {
      this.$http.get('http://localhost:3000/messages/viewrooms')
        .then(response => {
          return response.json();

        })
        .then(data => {
          console.log(data);
          this.rooms = data
          console.log(this.rooms);
        });

  }
}
</script>

<style lang="css">
</style>
