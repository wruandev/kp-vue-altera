<template>
  <div>
    <form class="flex" @submit.prevent="addTodo">
      <input
        type="text"
        class="p-10 w-90 me-5"
        name="title"
        id="title"
        placeholder="Contoh: Menjemur baju..."
        v-model="title"
      />
      <button class="p-10 ms-5 me-5" type="submit">Tambahkan</button>
    </form>
    <p class="error" v-if="showError">Input tidak boleh kosong!</p>
  </div>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      title: "",
      showError: false,
    };
  },
  methods: {
    async addTodo() {
      if (!this.title) {
        this.showError = true;
        return false;
      }

      const newTodo = {
        id: "" + Date.now(),
        title: this.title,
        description: "",
      };

      await this.$store.dispatch("addTodo", newTodo);

      this.title = "";
      this.showError = false;
    },
  },
};
</script>

<style scoped></style>
