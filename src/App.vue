<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.flex {
  display: flex;
}

.me-5 {
  margin-right: 5px;
}

.ms-5 {
  margin-left: 5px;
}

.p-10 {
  padding: 10px;
}

.p-5 {
  padding: 5px;
}

.w-80 {
  width: 80%;
}

.w-90 {
  width: 90%;
}

.w-100 {
  width: 100%;
}

.error {
  color: #ff0000;
}
</style>
