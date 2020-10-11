<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
@import url("./assets/reset.css");
@import url("./assets/utils.css");
html,body{
  min-height: 100%;
  height: 100%;
}
#app{
  height:100%;
}
</style>
