<template>
  <!-- <router-link to="/foo">Go to Foo</router-link>
  <router-link to="/comic">Go to Bar</router-link>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <el-container class="th-container">
    <el-header>
      <th-navbar />
      <!-- <hello-world /> -->
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ThNavbar from '/@/components/ThNavbar.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
export default {
  name: 'App',
  components: {
    HelloWorld,
    ThNavbar
  }
}

</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  color: $th-color;
  /* margin-top: 60px; */
  background: $th-bgcolor;
}
</style>
