<template>
  <main>
    <h1>Todo List</h1>

    <TodoList :todos="todos"></TodoList>

    <form class="form" @submit="addTodo($event)">
      <input
        type="text"
        class="input"
        name="title"
        id="title"
        placeholder="Contoh: Menjemur baju..."
        v-model="title"
      />
      <button class="button" type="submit">Tambahkan</button>
      <p class="error" v-if="showError">Input tidak boleh kosong!</p>
      <p>{{ status }}</p>
    </form>
  </main>
</template>

<script>
import TodoList from "./TodoList.vue";

export default {
  name: "TodoContainer",
  components: {
    TodoList,
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
    addTodo: function (event) {
      event.preventDefault();

      if (!this.title) {
        this.showError = true;
        return false;
      }

      this.todos.push(this.title);
      this.title = "";
      this.showError = false;
    },
  },
};
</script>

<style scoped>
.error {
  color: #ff0000;
}
.input {
  padding: 10px;
  margin-right: 5px;
}

.button {
  padding: 10px;
}
</style>
