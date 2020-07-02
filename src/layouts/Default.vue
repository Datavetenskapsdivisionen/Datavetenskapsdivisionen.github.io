<template>
  <div id="app">
    <custom-header :title="$static.metadata.siteName" :subtitle="$static.metadata.siteName" />
    <navbar />
    <main>
      <slot />
    </main>
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
* {
  box-sizing: border-box;
}

body {
  font-family: 'Exo', sans-serif;
  color: @white;
  margin: 0;
  padding: 0;
  background: @black;
}

#app {
  margin: 0 auto;
}

main {
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
}
</style>
