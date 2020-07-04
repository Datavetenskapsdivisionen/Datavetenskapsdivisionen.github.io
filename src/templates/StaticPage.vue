<template>
  <Layout>
    <div class="content" v-html="$page.staticPage.content" />
  </Layout>
</template>

<page-query>
query Page ($id: ID!) {
  staticPage: staticPage (id: $id) {
    content
  }
}
</page-query>

<style></style>
