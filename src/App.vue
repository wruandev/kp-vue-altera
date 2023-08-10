<template>
  <div id="app">
    <TodoContainer></TodoContainer>
  </div>
</template>

<script>
import TodoContainer from "./components/TodoContainer.vue";

export default {
  name: "App",
  components: {
    TodoContainer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
