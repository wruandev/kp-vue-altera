<template>
  <div id="todo-content">
    <div class="w-80">
      <li v-if="!isEditing" @click="redirectDetail" class="todo-item">
        {{ todo.title }}
      </li>

      <li v-if="isEditing">
        <form @submit.prevent="toggleEditForm">
          <input
            type="text"
            class="p-10 me-5 w-100"
            placeholder="Input tidak boleh kosong!"
            :value="todoTitle"
            @input="updateTodo($event)"
          />
        </form>
      </li>
    </div>
    <div>
      <button class="p-10 ms-5 me-5" @click="deleteTodo">Hapus</button>
      <button class="p-10 ms-5 me-5" @click="toggleEditForm">Edit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  data() {
    return {
      isEditing: false,
      todoTitle: this.todo.title,
    };
  },
  methods: {
    toggleEditForm() {
      if (!this.checkInput()) {
        return false;
      }

      this.isEditing = !this.isEditing;
    },
    async updateTodo(event) {
      this.todoTitle = event.target.value;

      await this.$store.dispatch("updateTodo", {
        title: this.todoTitle,
        id: this.todo.id,
        description: this.todo.description,
      });
    },
    async deleteTodo() {
      const deletedId = this.todo.id;

      await this.$store.dispatch("removeTodo", deletedId);
    },
    checkInput() {
      if (!this.todoTitle) {
        alert("Input tidak boleh kosong");
        return false;
      }

      return true;
    },
    redirectDetail() {
      this.$router.push({ name: "detail", params: { id: this.todo.id } });
    },
  },
  props: {
    todo: Object,
  },
};
</script>

<style scoped>
#todo-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 10px;
}

.todo-item:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
