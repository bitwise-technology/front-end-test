<template lang="pug">
  .header-home
    <img class="logo" src="../assets/Logo.svg" alt="Logo da Bitwise">
</template>

<script>

export default {
  name: 'header-home'
}
</script>

<style lang="scss" scoped>
.header-home {
  margin: 45px auto 55px 0;
  @media (max-width: 992px) {
    margin: 20px auto;
  }
}
</style>
