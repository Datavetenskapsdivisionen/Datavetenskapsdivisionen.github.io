<template>
  <Layout>
    <ul class="blog-list">
      <li v-for="x in $page.allBlogPost.edges" :key="x.id">

    <h2>{{ x.node.title }}</h2>
    <small>{{ x.node.date }}</small>
    <div class="post__content" v-html="x.node.body" />
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query {
  allBlogPost: allBlogPost {
    edges {
      node {
        id
        title
        path
        date (format: "DD/MM-YYYY")
        body
      }
    }
  }
}
</page-query>

<style lang="less">
.home-links a {
  margin-right: 1rem;
}
ul.blog-list {
  list-style-type: none;
  padding: 0 10px;
}
</style>
