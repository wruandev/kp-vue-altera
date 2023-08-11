<template>
  <div class="flex">
    <div class="todo-content">
      <li v-if="!isEditing">
        {{ todo.title }}
      </li>

      <li v-if="isEditing">
        <form @submit.prevent="toggleEditForm">
          <input
            type="text"
            class="input"
            placeholder="Input tidak boleh kosong!"
            :value="todoTitle"
            @input="updateTodo($event)"
          />
        </form>
      </li>
    </div>
    <div>
      <button class="button" @click="deleteTodo">Hapus</button>
      <button class="button" @click="toggleEditForm">Edit</button>
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
    updateTodo(event) {
      this.todoTitle = event.target.value;

      this.$emit("update-todo", {
        id: this.todo.id,
        newTitle: this.todoTitle,
      });
    },
    deleteTodo() {
      this.$emit("delete-todo", this.todo.id);
    },

    checkInput() {
      if (!this.todoTitle) {
        alert("Input tidak boleh kosong");
        return false;
      }

      return true;
    },
  },
  props: {
    todo: Object,
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 10px;
}

.todo-content {
  width: 80%;
}

.error {
  color: #ff0000;
}
.input {
  padding: 10px;
  margin-right: 5px;
  width: 100%;
}

.button {
  padding: 10px;
  margin-left: 5px;
  margin-right: 5px;
}
</style>
