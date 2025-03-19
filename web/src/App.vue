<template>
  <NavBar/>
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import $ from 'jquery'

export default {

  components: {
    NavBar
  },
  setup() {
    // $.ajax({
    //   url: "http://127.0.0.1:3000/user/account/token/",
    //   type: 'POST',
    //   data: {
    //     username: 'c',
    //     password: 'pc',
    //   },

    //   success(resp) {
    //     console.log(resp);
    //   },

    //   error(resp) {
    //     console.log(resp);
    //   }

    // });

    // $.ajax({
    //   url: "http://127.0.0.1:3000/user/account/info/",
    //   type: 'get',
    //   headers: {
    //     Authorization: `Bearer ` + "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyMjI4ZDY5NmMxZGE0ZTkzYjRlY2ZjNGEzY2Y3NzcyYyIsInN1YiI6IjMiLCJpc3MiOiJzZyIsImlhdCI6MTc0MjMxMDc3MiwiZXhwIjoxNzQzNTIwMzcyfQ.1fGMt8gtYgBzIipUmMGcbcjTRXhJwhYHGA7ukZ8mmcw"
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   },

    //   error(resp) {
    //     console.log(resp);
    //   }
    // });

    $.ajax({
      url: "http://127.0.0.1:3000/user/account/register/",
      type: 'post',
      data: {
        username: 'yxc2',
        password: 'yxc2',
        confirmedPassword: 'yxc2',
      },
      success(resp) {
        console.log(resp);
      },

      error(resp) {
        console.log(resp);
      }
    });
  }
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
