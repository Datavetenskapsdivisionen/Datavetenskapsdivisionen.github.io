<template>
  <div id="app">
    <custom-header :title="$static.metadata.siteName" />
    <navbar />
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import CustomHeader from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    CustomHeader,
    Navbar
  }
}
</script>

<style lang="less">
@import '../assets/variables.less';
body {
  font-family: 'Erica One', cursive;
  color: @blue-2;
  margin: 0;
  padding: 0;
  background: @black;
}

#app {
  margin: 0 auto;
}
</style>
