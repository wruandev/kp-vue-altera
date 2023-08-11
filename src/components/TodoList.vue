<template>
  <div class="todo-list">
    <p v-if="!showTodos">Belum ada data!</p>

    <ol v-if="showTodos">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @update-todo="updateTodo"
        @delete-todo="deleteTodo"
      />
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
    showTodos: function () {
      return this.todos.length > 0;
    },
  },
  props: {
    todos: Array,
  },
  methods: {
    updateTodo(updatedTodo) {
      this.$emit("update-todo", updatedTodo);
    },
    deleteTodo(id) {
      this.$emit("delete-todo", id);
    },
  },
};
</script>

<style scoped></style>
