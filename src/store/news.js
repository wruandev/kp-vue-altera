import { APIKEY } from "@/config";
import { slugify } from "@/utils";

const state = {
  articles: [],
};

const mutations = {
  setArticles: function (state, payload) {
    state.articles = payload;
  },
};

const actions = {
  fetchArticles: async function ({ commit }) {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&pageSize=9",
        {
          method: "GET",
          mode: "cors",
          headers: {
            Authorization: `Bearer ${APIKEY}`,
          },
        }
      );
      const data = await response.json();

      const articles = data.articles.map((article) => {
        return {
          ...article,
          slug: slugify(article.title),
        };
      });

      console.log("data: ", articles);

      commit("setArticles", articles);
    } catch (err) {
      alert("Terjadi gangguan. Mohon coba kembali");
      console.log(err);
    }
  },
};

const getters = {
  findArticleBySlug: (state) => (slug) => {
    return state.articles.find((article) => article.slug === slug);
  },
};

export { state, mutations, actions, getters };
