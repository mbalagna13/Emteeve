<template lang="html">
  <div>
    <div class="container">
      <button class="btn btn-primary" @click="fetchViewRooms" name="button">Get viewrooms</button>
      <ul class="list-group">
        <li class="list-group-item"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import navbar from "./Navbar.vue"
export default {
  data () {
    return {

    }
  },
  methods: {
    fetchViewRooms() {
      this.$http.get('http://localhost:3000/messages/viewrooms')
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data)
        });
    }
  }
}
</script>

<style lang="css">
</style>
