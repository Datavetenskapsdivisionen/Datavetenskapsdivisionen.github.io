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
    <footer>
      © dvet.se {{ new Date().getFullYear() }} -
      <a href="https://www.oskarlyrstrand.se">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#db4437"
          width="16px"
          height="16px"
          style="margin-left: 8px"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z"
          />
        </svg>
      </a>
    </footer>
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

html,
body {
  height: calc(100vh - calc(100vh - 100%));
}

body {
  font-family: 'Roboto';
  color: @black;
  margin: 0;
  padding: 0;
  background: 'white';
  overflow-y: scroll;
}

#app {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: calc(100vh - calc(100vh - 100%));
}

main {
  width: 100%;
  max-width: 768px;
  margin: 10px auto;
  flex: 1;
  .content {
    border-radius: 10px;
    margin: 10px;
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

footer {
  font-family: 'Press Start 2P', cursive;
  font-size: 7px;
  background: @black;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: rgb(233, 233, 233);
}

@media (max-width: 767px) {
  main {
    .content {
      overflow-wrap: break-word;
      padding: 0;
    }
  }
  .desktop {
    display: none;
  }
}

@media (min-width: 768px) {
  .mobile {
    display: none;
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
