<template>
  <div id="detail" class="p-5">
    <button class="p-10 ms-5 me-5" @click="goBack">Kembali</button>
    <h1>{{ todo.title }}</h1>
    <p v-if="hasDescription && !showEditForm">{{ todo.description }}</p>
    <p v-if="!hasDescription && !showEditForm">Belum ada deskripsi</p>
    <button class="p-10 ms-5 me-5" v-if="!showEditForm" @click="toggleEditForm">
      Ubah Deskripsi
    </button>

    <form class="flex" @submit.prevent="saveDescription">
      <input
        type="text"
        name="description"
        id="description"
        class="p-10 w-80 me-5"
        placeholder="Masukan deskripsi"
        v-model="description"
        v-if="showEditForm"
      />

      <button class="button" v-if="showEditForm" type="submit">
        Simpan Deskripsi
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TodoDetail",
  data() {
    return {
      showEditForm: false,
      description: "",
    };
  },
  computed: {
    todo: function () {
      return this.$store.state.todos.find((todo) => todo.id === this.todoId);
    },
    todoId: function () {
      return this.$route.params.id.toString();
    },
    hasDescription() {
      return this.description !== "";
    },
  },
  mounted: function () {
    this.description = this.todo.description;
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    toggleEditForm() {
      this.showEditForm = !this.showEditForm;
    },
    async saveDescription() {
      const updatedTodo = {
        id: this.todo.id,
        title: this.todo.title,
        description: this.description,
      };

      await this.$store.dispatch("updateTodo", updatedTodo);

      this.toggleEditForm();
    },
  },
};
</script>

<style scoped></style>
