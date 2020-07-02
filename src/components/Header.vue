<template>
  <header>
    <div class="header-bg-grid">
      <div v-for="x in 100" :key="x" :class="`h${randomNumber(4)} v${randomNumber(4)} c${randomNumber(8)}`"></div>
    </div>
    <strong>
      <g-link to="/">{{ title }}</g-link>
    </strong>
    <nav class="nav">
      <g-link class="nav__link" to="/">Start</g-link>
      <g-link class="nav__link" to="/mottagningen-2020/"
        >Mottagningen 2020</g-link
      >
      <g-link class="nav__link" to="/gdpr/">Integritetspolicy</g-link>
      <g-link class="nav__link" to="/kontakt/">Kontakt</g-link>
    </nav>
  </header>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    randomNumber(limit) {
      return Math.floor(Math.random() * limit) + 1;
    }
  }
}
</script>
<style lang="less">
@import '../assets/variables.less';

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: calc(30px * 6);
  position: relative;
  overflow: hidden;
  .header-bg-grid {
    opacity: .8;
    z-index: -1;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, 30px);
    grid-auto-rows: 30px;
    grid-auto-flow: dense;
    div.v2 {
      grid-row: span 2;
    }
    div.h2 {
      grid-column: span 2;
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
      background: @cyan;
    }
    div.c8 {
      background: @red;
    }
  }
}

.nav__link {
  margin-left: 20px;
}
</style>
