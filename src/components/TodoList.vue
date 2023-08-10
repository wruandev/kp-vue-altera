<template>
  <div>
    <p v-if="!showTodos">Belum ada data!</p>

    <ol v-if="showTodos">
      <li v-for="(todo, index) in todos" v-bind:key="index">
        {{ todo }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  computed: {
    showTodos: function () {
      return this.todos.length > 0;
    },
  },
  props: {
    todos: Array,
  },
};
</script>

<style scoped></style>
