<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

html, body {
  height: 100%;
}

body {
  margin: 0;
}

.container {
  max-width: auto;
  margin: 0 auto;
  padding: 15px;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background: linear-gradient(359.39deg, #EFEEEE 0.46%, #FFFFFF 99.42%);
}
</style>
