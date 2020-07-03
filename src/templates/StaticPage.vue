<template>
  <Layout>
    <h2>{{ $page.staticPage.title }}</h2>
    <div class="post__content" v-html="$page.staticPage.body" />
  </Layout>
</template>

<page-query>
query Page ($id: ID!) {
  staticPage: staticPage (id: $id) {
    title
    path
    date (format: "DD/MM-YYYY")
    body
  }
}
</page-query>

<style></style>
