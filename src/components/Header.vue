<template>
  <header>
    <div class="header-bg-grid" :key="this.$route.path">
      <div
        v-for="x in 200"
        :key="x"
        :class="`h${randomNumber(4)} v${randomNumber(4)} c${randomNumber(7)}`"
      ></div>
    </div>
    <div id="logo">
      <g-link to="/">Datavetenskap</g-link>
      <span id="subheader">vid Göteborgs Universitet</span>
    </div>
  </header>
</template>

<script>
export default {
  props: ['title', 'subtitle'],
  methods: {
    randomNumber(limit) {
      return Math.floor(Math.random() * limit) + 1
    }
  }
}
</script>
<style lang="less">
@import '../assets/variables.less';
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  min-height: 80px;
  #logo {
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    a {
      display: inline-block;
      font-family: 'Press Start 2P', cursive;
      font-size: 1.4rem;
      color: white;
      font-weight: 950;
      padding: 0.25em 0.2em 0.12em 0.25em;
      text-transform: uppercase;
      text-decoration: none;
      background: @black;
    }
  }
  #subheader {
    background: @black;
    color: @white;
    padding: 3px 5px;
    font-size: 0.8rem;
    font-family: 'Press Start 2P', cursive;
    text-transform: uppercase;
  }
  .header-bg-grid {
    z-index: -1;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    max-height: 12rem;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(auto-fill, 20px);
    grid-auto-rows: 20px;
    grid-auto-flow: dense;
    div.v2 {
      grid-row: span 2;
    }
    div.v3 {
      grid-row: span 3;
    }
    div.h2 {
      grid-column: span 2;
    }
    div.h3 {
      grid-column: span 3;
    }
    div.c1 {
      background: @blue-1;
    }
    div.c2 {
      background: @blue-2;
    }
    div.c3 {
      background: @blue-3;
    }
    div.c4 {
      background: @blue-4;
    }
    div.c5 {
      background: @yellow;
    }
    div.c6 {
      background: @skin;
    }
    div.c7 {
      background: @red;
    }
    div.c8 {
      background: @black;
    }
  }
}

@media (min-width: 768px) {
  header {
    align-items: center;
    #logo {
      width: @width;
      a {
        font-size: 2rem;
      }
    }
  }
}
</style>
