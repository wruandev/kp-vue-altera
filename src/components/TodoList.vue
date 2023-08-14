<template>
  <div>
    <p v-if="!showTodos">Belum ada data!</p>

    <ol v-if="showTodos" class="todo-list">
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </ol>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  computed: {
    todos: function () {
      return this.$store.state.todos;
    },
    showTodos: function () {
      return this.todos.length > 0;
    },
  },
};
</script>

<style scoped>
.todo-list {
  padding-left: 20px;
}
</style>
