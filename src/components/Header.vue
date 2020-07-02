<template>
  <header>
    <div class="header-bg-grid" :style="`grid-template-columns: repeat(auto-fill, ${width*.5}px); grid-auto-rows: ${width*.5}px;`">
      <div
        v-for="x in 140"
        :key="x"
        :class="`h${randomNumber(4)} v${randomNumber(4)} c${randomNumber(7)}`"
      ></div>
    </div>
    <div id="logo">
      <g-link to="/" :style="`font-size: ${Math.min(72, Math.max(32, width*1.2))}px;`">DVET.se</g-link>
    </div>
  </header>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    randomNumber(limit) {
      return Math.floor(Math.random() * limit) + 1
    }
  },
  mounted() {
    console.log(window.innerWidth)
  },
  computed: {
    width() {
      return window.innerWidth * .05
    },
    headerHeight() {
      return window.innerHeight * .3
    }
  }
}
</script>
<style lang="less">
@import '../assets/variables.less';

header {
  padding: 1.5em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  #logo a {
    display: inline-block;
    font-family: 'Press Start 2P', cursive;
    color: white;
    font-weight: 950;
    padding: .2em;
    padding-bottom: .08em;
    text-transform: uppercase;
    text-decoration: none;
    background: @black;
  }
  .header-bg-grid {
    z-index: -1;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: grid;
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
