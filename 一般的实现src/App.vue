<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ScopeSlotTest></ScopeSlotTest>
    <!-- <List></List> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ScopeSlotTest from './components/ScopeSlotTest/ScopeSlotTest.vue';
// import List from './components/ScopeSlotTest/List.vue';
export default {
  name: 'App',
  components: {
    // HelloWorld
    // List组件在父组件ScopeSlotTest当中，所以注册一个父组件即可显示出子组件的内容
    ScopeSlotTest, 
    // List
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
