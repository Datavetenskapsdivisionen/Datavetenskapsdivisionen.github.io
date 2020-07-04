<template>
  <Layout>
    <div class="content" v-html="$page.allStaticPage.edges[0].node.content" />
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.allStaticPage.edges[0].node.title
    }
  }
}
</script>

<page-query>
query {
  allStaticPage(filter: {order: {eq: 0}}) {
    edges {
      node {
        content
        title
      }
    }
  }
}
</page-query>
