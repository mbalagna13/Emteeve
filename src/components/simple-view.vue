<template lang="html">
  <div class="welcome">
    <h1>{{ msg }}</h1>
    <div class="stuff">
      <form class="" action="index.html" method="post">
      <input type="text" name="" value="" v-model= "streamChangeOne">
      <button type="submit"
              name="button"
              @click.prevent="changeStreamOne()">Click!</button>

      </form>
      <form class="" action="index.html" method="post">
      <input type="text" name="" value="" v-model= "streamChangeTwo">
      <button type="submit"
              name="button"
              @click.prevent="changeStreamTwo()">Click!</button>

      </form>

      <iframe
          :src="streamOne"
          height="300"
          width="400"
          frameborder="0"
          scrolling="no"
          allowfullscreen="true">
      </iframe>
      <iframe
          :src="streamTwo"
          height="300"
          width="400"
          frameborder="0"
          scrolling="no"
          allowfullscreen="true">
      </iframe>
    </div>


  </div>
</template>

<script>
export default {
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
      streamChangeOne= this.streamChangeOne
      this.streamOne = `http://player.twitch.tv/?channel=${streamChangeOne}&muted=true`;
      console.log(this.streamChangeOne)
      this.streamChangeOne=""
    },
    changeStreamTwo(streamChangeTwo) {
      streamChangeTwo= this.streamChangeTwo
      this.streamTwo = `http://player.twitch.tv/?channel=${streamChangeTwo}&muted=true`;
      console.log(this.streamChangeTwo)
      this.streamChangeTwo=""
    }
  }
}
</script>

<style lang="css">
</style>
