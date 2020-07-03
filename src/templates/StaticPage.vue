<template>
  <Layout>
    <h2>{{ $page.staticPage.title }}</h2>
    <div class="post__content" v-html="$page.staticPage.content" />
  </Layout>
</template>

<page-query>
query Page ($id: ID!) {
  staticPage: staticPage (id: $id) {
    title
    path
    date (format: "DD/MM-YYYY")
    content
  }
}
</page-query>

<style></style>
