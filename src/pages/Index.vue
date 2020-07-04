<template>
  <Layout>
    <div class="content" v-html="$page.allStaticPage.edges[0].node.content" />
  </Layout>
</template>

<page-query>
query {
  allStaticPage(filter: {order: {eq: 0}}) {
    edges {
      node {
        content
      }
    }
  }
}
</page-query>
