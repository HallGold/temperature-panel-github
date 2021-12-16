<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
:root {
  --bar1-width: 100%;
  --bar2-width: 100%;
  --bar1-bg: linear-gradient(90deg, rgba(127, 232, 255, 0.1), rgba(26, 165, 253, 1));
  --bar2-bg: linear-gradient(90deg, rgba(255, 168, 0, 0.1), rgba(255, 247, 160, 1));
}
html,
body,
#app {
  padding: 0;
  margin: 0;
  height: 100%;
}
</style>
