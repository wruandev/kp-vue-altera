import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const persistedsDataState = createPersistedState({
  key: "todovuex",
});

export default new Vuex.Store({
  plugins: [persistedsDataState],
  state: {
    todos: [],
  },
  getters: {},
  mutations: {
    setTodos(state, payload) {
      state.todos = payload;
    },
  },
  actions: {
    addTodo({ state, commit }, newTodo) {
      const newTodos = [...state.todos, newTodo];

      commit("setTodos", newTodos);
    },

    removeTodo({ state, commit }, todoId) {
      const newTodos = state.todos.filter((todo) => todo.id !== todoId);

      commit("setTodos", newTodos);
    },

    updateTodo({ state, commit }, updatedTodo) {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return {
            ...todo,
            title: updatedTodo.title,
            description: updatedTodo.description ? updatedTodo.description : "",
          };
        }

        return todo;
      });

      commit("setTodos", newTodos);
    },
  },
  modules: {},
});
