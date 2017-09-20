<template lang="html">
  <div>
    <navbar></navbar>
    <div class="" v-for="things in rooms">
      <div class="container">
        <div class="row">
          <div class=" panel panel-default col-md-4 col-md-offset-3">
            <div class="panel-body">
              <ul class="text-left">
                  {{things.name}}
                <router-link tag="button" id="btn" class="btn btn-default text-right" :to='`viewroom/${things.name}`'>Enter Room</router-link>
              </ul>
            </div>

          </div>

        </div>
      </div>
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
      this.$http.get('https://emteevedb.herokuapp.com/messages/viewrooms')
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
      this.$http.get('https://emteevedb.herokuapp.com/messages/viewrooms')
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
#btn {
  background-color: #6441a4;
  font-weight: bold;
  font-family: sans-serif;
  color:white;
  opacity: 1
}
#btn:hover {
  opacity: .7;
}
</style>
