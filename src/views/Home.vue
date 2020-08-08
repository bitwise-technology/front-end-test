<template lang="pug">
  .home
    .container
      header-home
      //- <!-- flex -->
        //- <!-- h1 -->
        //- <!-- img -->
      //- <!-- input -->
      //- <!-- footer -->
      user
</template>

<script>
import User from '@/components/User.vue'

export default {
  name: 'Home',
  components: {
    User,
    HeaderHome: () => import('@/components/HeaderHome'),
  }
}
</script>
<style lang="scss" scoped>
.home {
  background: url('../assets/bg-home.png') no-repeat right top;
  height: 100%;
  @media (max-width: 992px) {
    background: transparent;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
}
</style>
