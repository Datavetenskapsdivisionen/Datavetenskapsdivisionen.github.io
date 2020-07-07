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
  font-family: 'Roboto';
  color: @black;
  margin: 0;
  padding: 0;
  background: 'white';
}

#app {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
}

main {
  flex: 1;
  max-width: 768px;
  margin: 10px auto;
  .content {
    border-radius: 10px;
    margin: 10px;
    padding: 10px 20px;
    table {
      width: 100%;
      border-collapse: collapse;
      td,
      th {
        border: 1px solid @white;
        text-align: left;
        padding: 8px;
      }
      tr:nth-child(even) {
        background-color: rgba(255, 255, 255, 0.4);
      }
    }
  }
}

@media (max-width: 768px) {
  main .content {
    overflow-x: scroll;
    overflow-wrap: break-word;
    padding: 0;
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
