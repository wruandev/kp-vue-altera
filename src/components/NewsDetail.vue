<template>
  <div id="article-detail">
    <div class="detail-img">
      <img :src="article.urlToImage" />
    </div>
    <div>
      <h2>{{ article.title }}</h2>
      <p>Dipublikasikan pada {{ articleDate }}</p>
    </div>
    <div>
      <p>{{ article.content }}</p>
      <a :href="article.url">Lanjutkan membaca</a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NewsDetail",
  computed: {
    article: function () {
      const data = this.findArticleBySlug(this.articleSlug);
      return data;
    },
    articleSlug: function () {
      return this.$route.params.slug.toString();
    },
    articleDate() {
      const date = new Date(this.article.publishedAt);
      return date.toLocaleDateString("id-ID");
    },
    ...mapGetters({
      findArticleBySlug: "news/findArticleBySlug",
    }),
  },
};
</script>

<style scoped>
.detail-img {
  width: 100%;
}
.detail-img img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  display: block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
</style>
