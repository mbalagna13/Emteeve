<template lang="html">
  <div class="stuff">
    <navbar></navbar>

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
              <input type="text"c placeholder="Enter Stream name" name="" value="" v-model= "streamChangeTwo">
              <button type="button"
                      name="button"
                      @click.prevent="changeStreamTwo()">Click!</button>
              </form>
            </div>
        </div>
        <div class="row">
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
        </div>
        <div class="row">
          <div class="">
            <div class="chatbox text-left well pre-scrollable col-sm-4 col-md-offset-4">

              <div   v-for="messages in chat">
              {{messages.username}}: {{messages.message}}
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <input type="text" v-model="chatData.username" name="" value="" @keydown.enter="clickButton">
          <input type="text" v-model="chatData.message" name="" value="" @keydown.enter="clickButton">
          <button @click="clickButton()" type="button" value="hello" name="button">Send</button>
        </div>
  </div>

  </div>
</template>

<script>
import navbar from './NavBar.vue'

export default {
  components: {
    navbar,
  },
  name: 'Test',

  data() {
    return {
      windowData: window.location.hash.split('/'),
      // chatbox: this.el$.querySelector("#chatbox"),
      chatData:{
        username: "",
        message: ""
      },
      chat:[],
      streamChangeOne: "",
      streamChangeTwo: "",
      streamOne: "https://player.twitch.tv/?channel=disnof&muted=true",
      streamTwo: "https://player.twitch.tv/?channel=moonmoon_ow&muted=true",

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
        console.log(this.windowData[2]);
        this.$socket.emit('hello', {message: this.chatData});
        this.chatData.message= "";
        this.scrollToEnd()

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
    },
    scrollToEnd() {
      var chatbox = this.$el.querySelector(".chatbox");
      console.log(chatbox);
      chatbox.scrollTop = chatbox.scrollHeight
    }

  }
}
</script>

<style lang="css">
.well {
  font-weight: bold;
  overflow-y: auto;
  max-height: 200px;
}

</style>
