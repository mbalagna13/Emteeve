<template lang="html">
  <div class="welcome">
    <navbar></navbar>
    <img height="300" width="400" src="../assets/Screen Shot 2017-09-19 at 11.54.31 AM.png">
    <h1>{{ msg }}</h1>
    <router-link :to="{ name: 'viewrooms', params: {} }"><button type="button" name="button">View Rooms</button></router-link>

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
</style>
