<template>
  <Layout>
    <h2>{{ $page.blogPost.title }}</h2>
  <div class="post__content" v-html="$page.blogPost.content" />
  </Layout>
</template>

<page-query>
query BlogPost ($id: ID!) {
  blogPost: blogPost (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    content
  }
}
</page-query>


<style>
.home-links a {
  margin-right: 1rem;
}
</style>
