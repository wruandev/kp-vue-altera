<template>
  <div>
    <form class="form" @submit.prevent="addTodo">
      <input
        type="text"
        class="input"
        name="title"
        id="title"
        placeholder="Contoh: Menjemur baju..."
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      />
      <button class="button" type="submit">Tambahkan</button>
    </form>
    <p class="error" v-if="showError">Input tidak boleh kosong!</p>
  </div>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {};
  },
  props: {
    value: String,
    showError: Boolean,
  },
  methods: {
    addTodo() {
      this.$emit("add-todo");
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
  width: 90%;
}

.button {
  padding: 10px;
  margin-left: 5px;
  margin-right: 5px;
}

.form {
  display: flex;
  justify-content: start;
}
</style>
