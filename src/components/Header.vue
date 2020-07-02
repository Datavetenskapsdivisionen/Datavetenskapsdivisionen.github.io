<template>
  <header>
    <strong>
      <g-link to="/">{{ title }}</g-link>
    </strong>
    <nav class="nav">
      <g-link class="nav__link" to="/">Start</g-link>
      <g-link class="nav__link" to="/mottagningen-2020/">Mottagningen 2020</g-link>
      <g-link class="nav__link" to="/gdpr/">Integritetspolicy</g-link>
      <g-link class="nav__link" to="/kontakt/">Kontakt</g-link>
    </nav>
  </header>
</template>

<script>
export default {
  props: ['title']
}
</script>
<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
