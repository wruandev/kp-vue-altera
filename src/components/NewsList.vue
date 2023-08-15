<template>
  <div id="news-list">
    <NewsItem
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import NewsItem from "./NewsItem.vue";

export default {
  components: { NewsItem },
  name: "NewsList",
  computed: {
    ...mapState({
      articles: (state) => state.news.articles,
    }),
  },
  methods: {
    ...mapActions({
      fetchArticles: "news/fetchArticles",
    }),
  },
  mounted: function () {
    this.fetchArticles();
  },
};
</script>

<style scoped>
#news-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: auto;
  margin-right: auto;
}
</style>
