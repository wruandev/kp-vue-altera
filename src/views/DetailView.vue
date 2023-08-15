<template>
  <div id="detail-view">
    <div class="nav">
      <button @click="redirectHome">Kembali</button>
      <h1>Detail Berita</h1>
    </div>
    <NewsDetail />
  </div>
</template>

<script>
import NewsDetail from "@/components/NewsDetail.vue";

export default {
  components: { NewsDetail },
  name: "DetailView",
  methods: {
    redirectHome() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
#detail-view {
  padding: 10px;
}
.nav {
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 2px solid #b5b4b4;
  margin-bottom: 20px;
}

.nav button {
  padding: 10px;
}
</style>
