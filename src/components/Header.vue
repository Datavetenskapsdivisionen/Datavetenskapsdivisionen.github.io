<template>
  <header>
    <div class="header-bg-grid" :key="this.$route.path">
      <div
        v-for="x in 140"
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
@media (min-width: 768px) {
  header {
  align-items: center;
  }
}
header {
  padding: 1vw;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  #logo {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    a {
      display: inline-block;
      font-family: 'Press Start 2P', cursive;
      font-size: clamp(10px, calc(3vw + 1vh), 56px);
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
    font-size: clamp(8px, calc(1vw + .3vh), 16px);
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
    display: grid;
    grid-template-columns: repeat(auto-fill, 2vw);
    grid-auto-rows: 2vw;
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
</style>
