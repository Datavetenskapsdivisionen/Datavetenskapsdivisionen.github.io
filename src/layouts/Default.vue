<template>
  <div id="app">
<custom-header :title="$static.metadata.siteName" />
    <slot/>
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
export default {
  components: {
    CustomHeader
  }
}
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

#app {
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
