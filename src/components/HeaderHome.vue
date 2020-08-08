<template lang="pug">
  .header-home
    <img class="logo" src="../assets/Logo.svg" alt="Logo da Bitwise">
</template>

<script>
import User from '@/components/User.vue'

export default {
  name: 'header-home',
  components: {
    User
  }
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
