<template>
  <NavBar/>
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default {

  components: {
    NavBar
  },
}
  

</script>


<style>
body {
  background-position: center;
  background-image: url('https://pic2.zhimg.com/v2-1f850275f54c472115ee20a188b4e4da_r.jpg?source=1940ef5c');
  background-size: cover;
  background-attachment: fixed;
}
</style>
