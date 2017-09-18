<template lang="html">
  <div>
    <navbar></navbar>
    <br>
    <br>
    <div class="container">
      <div class="row">
        <form class="">
          <input type="text" name="Username" value="" placeholder="Username">
          <div class="row">
            <input type="password" name="Password" placeholder="Password" value="">
          </div>
          <button class="btn btn-group" type="" name="button">Login</button>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
import navbar from './NavBar.vue'

export default {
  components: {
    navbar
  }
}
</script>

<style lang="css">
</style>
