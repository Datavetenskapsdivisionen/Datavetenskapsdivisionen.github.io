<template>
  <div id="app">
    <custom-header
      :title="$static.metadata.siteName"
      :subtitle="$static.metadata.siteName"
    />
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
  font-family: monospace;
  color: @black;
  margin: 0;
  padding: 0;
  background: @black;
}

#app {
  margin: 0 auto;
}

main {
  max-width: 768px;
  margin: 10px auto;
  .content {
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
  }
}

hr {
  margin: 30px 0;
  border-color: rgba(255, 255, 255, 0.3);
}

a {
  color: @blue-2;
}

a:hover {
  filter: brightness(1.2);
}
</style>
