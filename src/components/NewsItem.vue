<template>
  <div class="article-item">
    <div class="article-img">
      <img v-if="article.urlToImage" :src="article.urlToImage" />
      <img
        v-if="!article.urlToImage"
        src="https://upload.wikimedia.org/wikipedia/commons/e/ea/No_image_preview.png"
      />
    </div>
    <div class="article-body">
      <!-- {{ article.title }} -->
      <router-link :to="detailURL" class="article-title">{{
        article.title
      }}</router-link>
      <p class="article-date">Posted on {{ articleDate }}</p>

      <!-- <p class="read-more"><a href="abouts">Read more</a></p> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: Object,
  },
  computed: {
    articleDate: function () {
      const date = new Date(this.article.publishedAt);
      return date.toLocaleDateString("id-ID");
    },
    detailURL: function () {
      return `/${this.article.slug}`;
    },
  },
};
</script>

<style scoped>
.article-item {
  position: relative;
  width: 90%;
  border: 1px solid #b5b4b4;
}

@media (min-width: 600px) {
  .article-item {
    width: 45%;
  }
}
@media (min-width: 960px) {
  .article-item {
    width: 30%;
  }
}

.article-img {
  max-height: 80%;
}

.article-img img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  display: block;
}

.article-body {
  padding: 10px;
}

.article-title {
  color: black;
  margin: 0px;
  padding: 0px;
  font-weight: bold;
}

.article-title:hover {
  cursor: pointer;
  color: #000000bd;
}

.article-date {
  font-size: 11pt;
  text-align: right;
}

.read-more {
  text-align: right;
}
</style>
