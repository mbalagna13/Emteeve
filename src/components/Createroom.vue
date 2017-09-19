<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <div class="row">
        <div class="panel panel-default col-md-4 col-md-offset-4">
          <div class="panel-body">
            <h1>Create A Viewroom</h1>
            <form class="form-group">
              <div class="row">
                <h4>Viewroom Name</h4>
                <input v-model="stream.name" type="text" name="" value="">
              </div>
              <br>
              <div class="row">
                <h4>Stream One</h4>
                <input v-model="stream.stream_one" type="text" name="" value="" placeholder="Stream name">
              </div>
              <br>
              <div class="row">
                <h4>Stream Two</h4>
                <input v-model="stream.stream_two" type="text" name="" value="" placeholder="Example: LethalFrag">
              </div>
            </form>
            <button type="button" @click="submitViewroom" class="btn btn-group" name="button">Create Viewroom!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from './NavBar.vue'

export default {
  components: {
    navbar
  },
  data() {
    return {
        stream: {
          name: "",
          stream_one: "",
          stream_two: ""
        }
    }
  },
  methods : {
    submitViewroom() {
      this.$http.post('https://emteevedb.herokuapp.com/messages/viewrooms', this.stream)
        .then(response => {
          console.log(response);
        });
        this.stream.name="";
        this.stream.stream_one="";
        this.stream.stream_two="";

    }
  }
}
</script>

<style lang="css">
</style>
