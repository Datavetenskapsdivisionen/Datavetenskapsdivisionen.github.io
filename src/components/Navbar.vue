<template>
  <nav>
    <hamburger-menu
      class="mobile"
      v-on:click="toggleMenu"
      :isActive="showHamburgerMenu"
    />
    <a href="#" class="nav__link mobile" v-if="!showHamburgerMenu">
      {{
        $route.path === '/'
          ? 'Start'
          : $static.allStaticPage.edges.find(
              x => x.node.path === this.$route.path
            ).node.title
      }}</a
    >
    <div v-if="showHamburgerMenu" class="mobile" @click="showHamburgerMenu = false">
      <g-link class="nav__link" to="/">
        {{ $static.allStaticPage.edges[0].node.title }}</g-link
      >
      <g-link
        class="nav__link"
        :to="x.node.path"
        v-for="x in $static.allStaticPage.edges.slice(1)"
        :key="x.node.id"
      >
        {{ x.node.title }}</g-link
      >
    </div>
    <div class="desktop">
      <g-link class="nav__link" to="/">
        {{ $static.allStaticPage.edges[0].node.title }}</g-link
      >
      <g-link
        class="nav__link"
        :to="x.node.path"
        v-for="x in $static.allStaticPage.edges.slice(1)"
        :key="x.node.id"
      >
        {{ x.node.title }}</g-link
      >
    </div>
  </nav>
</template>

<script>
import HamburgerMenu from './HamburgerMenu'
export default {
  data() {
    return {
      showHamburgerMenu: false    }
  },
  components: {
    HamburgerMenu
  },
  methods: {
    toggleMenu() {
      this.showHamburgerMenu = !this.showHamburgerMenu
    }
  }
}
</script>

<static-query>
query {
  allStaticPage(sortBy: "order", order: ASC) {
	edges {
    node {
      id
      title
      path
    }
  }
}
}
</static-query>

<style lang="less">
@import '../assets/variables.less';
nav {
  font-family: 'Press Start 2P', cursive;
  font-size: 9px;
  background: @black;
  padding-bottom: 5px;
  min-height: 60px;
  padding: 5px 10px 0;
  display: flex;
  justify-content: center;
  position: relative;
  div {
    display: flex;
    width: @width;
  }
}

@media (max-width: 767px) {
  nav {
  justify-content: flex-start;

    div {
      flex-direction: column;
    }
  }
}

@media (min-width: 768px) {
  .nav__link {
    margin-left: 10px;
  }
  .nav__link:hover:nth-child(1) {
    border-color: @red;
  }
  .nav__link:hover:nth-child(2) {
    border-color: @yellow;
  }
  .nav__link:hover:nth-child(3) {
    border-color: @blue-2;
  }
  .nav__link:hover:nth-child(4) {
    border-color: @skin;
  }
  .nav__link:hover:nth-child(5) {
    border-color: @cyan;
  }
  .nav__link:hover:nth-child(6) {
    border-color: @white;
  }
}

.nav__link {
  display: flex;
  padding: 20px 20px 15px;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  white-space: nowrap;
  border-bottom: 5px solid transparent;
}

.nav__link.active--exact:nth-child(1) {
  border-color: @red;
}
.nav__link.active--exact:nth-child(2) {
  border-color: @yellow;
}
.nav__link.active--exact:nth-child(3) {
  border-color: @blue-2;
}
.nav__link.active--exact:nth-child(4) {
  border-color: @skin;
}
.nav__link.active--exact:nth-child(5) {
  border-color: @cyan;
}
.nav__link.active--exact:nth-child(6) {
  border-color: @white;
}

.nav__link:hover {
  background: rgba(255, 255, 255, 0.05);
}
</style>
