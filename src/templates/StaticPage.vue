<template>
  <Layout>
    <div class="content" v-html="$page.staticPage.content" />
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.staticPage.title
    }
  }
}
</script>

<page-query>
query Page ($id: ID!) {
  staticPage: staticPage (id: $id) {
    content,
    title
  }
}
</page-query>

<style></style>
