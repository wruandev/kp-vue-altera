<template>
  <div class="home">
    <TodoContainer></TodoContainer>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoContainer from "@/components/TodoContainer.vue";

export default {
  name: "HomeView",
  components: {
    TodoContainer,
  },
};
</script>
