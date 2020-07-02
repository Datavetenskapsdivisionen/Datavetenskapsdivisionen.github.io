<template>
  <nav>
    <g-link class="nav__link" to="/">Start</g-link>
    <g-link class="nav__link" to="/mottagningen-2020/"
      >Mottagningen 2020</g-link
    >
    <g-link class="nav__link" to="/gdpr/">Integritetspolicy</g-link>
    <g-link class="nav__link" to="/kontakt/">Kontakt</g-link>
  </nav>
</template>

<style lang="less">
@import '../assets/variables.less';
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  background: @black;
  border-top: 1px solid rgba(white, 0.3);
  border-bottom: 1px solid rgba(white, 0.3);
  overflow-x: scroll;
}

@media (min-width: 768px) {
  nav {
    overflow-x: hidden;
  }
}

.nav__link {
  display: flex;
  margin: 0 10px;
  padding: 20px;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-family: 'Exo', sans-serif;
  white-space: nowrap;
}

.nav__link:hover {
  background: rgba(white, 0.1);
}
</style>
