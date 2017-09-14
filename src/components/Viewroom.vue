<template lang="html">
  <div class="stuff">


  <div class="container">
        <div class="row">
          <div class="col-md-4 col-md-offset-2">
            <form>
            <input type="text" placeholder="Enter Stream name" name="" value="" v-model= "streamChangeOne">
            <button type="button"
                    name="button"
                    @click.prevent="changeStreamOne()">Click!</button>
            </form>
          </div>
            <div class="col-md-4">
              <form>
              <input type="text" placeholder="Enter Stream name" name="" value="" v-model= "streamChangeTwo">
              <button type="button"
                      name="button"
                      @click.prevent="changeStreamTwo()">Click!</button>
              </form>
            </div>
        </div>
        <iframe
            :src="streamOne"
            height="400"
            width="500"
            frameborder="0"
            scrolling="no"
            allowfullscreen="true">
        </iframe>
        <iframe
            :src="streamTwo"
            height="400"
            width="500"
            frameborder="0"
            scrolling="no"
            allowfullscreen="true">
        </iframe>
        <div class="panel panel-default">
          <div class="panel-body">
            <div v-for="messages in chat">
            {{messages}}
            </div>
          </div>
        </div>
      <input type="text" v-model="message" name="" value="" @keydown.enter="clickButton">
      <button @click="clickButton()" type="button" value="hello" name="button">Send</button>
  </div>

  </div>
</template>

<script>
export default {
  name: 'Test',

  data() {
    return {
      message:"",
      chat:[],
      streamChangeOne: "",
      streamChangeTwo: "",
      streamOne: "http://player.twitch.tv/?channel=&muted=true",
      streamTwo: "http://player.twitch.tv/?channel=&muted=true"

    }
  },
  sockets:{
    connect: function(){
      console.log('socket connected')
    },
    hello: function(data){
      this.chat.push(data.message)
      console.log(data)
      console.log(this.chat);
    }
  },
  methods: {
    clickButton: function(val){
        // $socket is socket.io-client instance
        console.log("fired button");
        this.$socket.emit('hello', {message: this.message});
        this.message= ""
    },
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
