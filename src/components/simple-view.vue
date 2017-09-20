<template lang="html">
  <div class="welcome">
    <navbar></navbar>
    <img height="300" width="400" src="../assets/Screen Shot 2017-09-19 at 11.54.31 AM.png">
    <h1>{{ msg }}</h1>
    <router-link :to="{ name: 'viewrooms', params: {} }"><button id="btn" class="btn btn-default" type="button"  name="button">View Rooms</button></router-link>

  </div>
</template>

<script>
import navbar from './Navbar.vue'

export default {
  components: {
    navbar,
  },

  data() {
    return {
      streamChangeOne: "",
      streamChangeTwo: "",
      msg: "Welcome To Emteeve",
      streamOne: "http://player.twitch.tv/?channel=&muted=true",
      streamTwo: "http://player.twitch.tv/?channel=&muted=true"
    }
  },
  methods: {
    changeStreamOne(streamChangeOne) {
      streamChangeOne= this.streamChangeOne.toLowerCase().trim();
      this.streamOne = `http://player.twitch.tv/?channel=${streamChangeOne}&muted=true`;
      console.log(this.streamChangeOne)
      this.streamChangeOne=""
    },
    changeStreamTwo(streamChangeTwo) {
      streamChangeTwo= this.streamChangeTwo.toLowerCase().trim();
      this.streamTwo = `http://player.twitch.tv/?channel=${streamChangeTwo}&muted=true`;
      console.log(this.streamChangeTwo)
      this.streamChangeTwo=""
    }
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
