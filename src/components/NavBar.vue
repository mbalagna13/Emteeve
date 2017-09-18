<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Emteeve</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><router-link :to="{ name: 'simple-view', params: {} }"><a>Home</a></router-link></li>
            <li><router-link :to="{ name: 'viewrooms', params: {} }"><a>Viewrooms</a></router-link></li>
            <li><router-link :to="{ name: 'createviewroom', params: {} }"><a>Create Viewroom</a></router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link :to="{ name: 'login', params: {} }"><a>Login</a></router-link></li>
            <li><router-link :to="{ name: 'signup', params: {} }">SignUp</router-link></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </div>

</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="css">
</style>
