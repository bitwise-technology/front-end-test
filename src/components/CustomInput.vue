<template lang="pug">
  .input
    img.search(src="../assets/Search.svg" alt="Icone de lupa")
    input(type="text" placeholder="Buscar usuário")
    .git
      img(src="../assets/Git.svg" alt="Icone do Github")
</template>

<script>

export default {
  name: 'custom-input'
}
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  height: 56px;
  display: flex;
  background-color: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  .search {
    padding: 18px 22px;
  }
  input {
    flex: 1;
    font-size: 16px;
    border: none;
    outline: none;
    padding: 0;
    width: 100%;
  }
  .git {
    background-color: #5A3D5C;
    padding: 16px 22px;
    &:hover {
      opacity: 0.9;
    }
  }
}
</style>
