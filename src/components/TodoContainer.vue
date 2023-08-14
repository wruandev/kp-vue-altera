<template>
  <main class="w-100 p-5" id="main">
    <h1 class="page-title">Todo List</h1>

    <TodoList :todos="todos" />

    <TodoForm />

    <p>{{ status }}</p>
  </main>
</template>

<script>
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";

export default {
  name: "TodoContainer",
  components: {
    TodoList,
    TodoForm,
  },
  computed: {
    todos: function () {
      return this.$store.state.todos;
    },
    status: function () {
      if (this.todos.length >= 4) {
        return "Hebat!";
      }

      return "";
    },
  },
};
</script>

<style scoped>
.page-title {
  text-align: center;
  text-decoration: underline;
}
</style>
