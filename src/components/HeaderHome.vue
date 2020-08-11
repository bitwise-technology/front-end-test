<template lang="pug">
  .header-home
    router-link(to="/")
      logo
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'header-home',
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
.header-home {
  margin: 45px auto 55px 0;
  @media (max-width: 992px) {
    margin: 20px auto;
  }
  a:hover {
    opacity: 0.8;
  }
}
</style>
