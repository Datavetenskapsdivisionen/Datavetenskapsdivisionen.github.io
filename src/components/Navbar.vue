<template>
  <nav>
    <div>
      <g-link class="nav__link" to="/">Start</g-link>
      <g-link class="nav__link" to="/mottagningen-2020/"
        >Mottagningen 2020</g-link
      >
      <g-link class="nav__link" to="/gdpr/">Integritetspolicy</g-link>
      <g-link class="nav__link" to="/kontakt/">Kontakt</g-link>
    </div>
  </nav>
</template>

<style lang="less">
@import '../assets/variables.less';
nav {
  display: flex;
  align-items: center;
  background-image: linear-gradient(to top left,  rgba(141, 37, 37, 0.01),rgba(255,255,255,.1));
  overflow-x: scroll;
  div {
    display: flex;
    justify-content: space-between;
    width: @width;
    padding: 0 20px;
  }
}

@media (min-width: 768px) {
  nav {
    justify-content: center;
    overflow-x: hidden;
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

.nav__link:hover {
  background: rgba(255,255,255,.05);
}
</style>
