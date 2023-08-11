<template>
  <main class="main">
    <h1>Todo List</h1>

    <TodoList
      :todos="todos"
      @update-todo="updateTodo"
      @delete-todo="deleteTodo"
    ></TodoList>

    <TodoForm
      v-model="title"
      :showError="showError"
      :status="status"
      @add-todo="addTodo"
    />

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
  data() {
    return {
      title: "",
      showError: false,
      todos: [],
    };
  },
  computed: {
    status: function () {
      if (this.todos.length >= 4) {
        return "Hebat!";
      }

      return "";
    },
  },
  methods: {
    addTodo: function () {
      if (!this.title) {
        this.showError = true;
        return false;
      }

      const newTodo = {
        id: Date.now(),
        title: this.title,
      };

      this.todos.push(newTodo);
      this.title = "";
      this.showError = false;
    },
    updateTodo(updatedTodo) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return {
            ...todo,
            title: updatedTodo.newTitle,
          };
        }

        return todo;
      });
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
}
</style>
