<template>
  <div id="home">
    <h1>Berita terbaru dari United State</h1>
    <NewsList />
  </div>
</template>

<script>
// @ is an alias to /src
import NewsList from "@/components/NewsList.vue";

export default {
  name: "HomeView",
  components: {
    NewsList,
  },
};
</script>
<style scoped>
#home {
  margin-bottom: 20px;
}

#home h1 {
  text-align: center;
}
</style>
