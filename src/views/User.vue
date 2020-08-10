<template lang="pug">
  .user-page
    .container
      //- user-data(:name="$route.params.username")
      header-user
      main-user(:name="$route.params.username")
    footer-user
</template>

<script>
// import UserData from '@/components/UserData.vue'
import HeaderUser from '@/components/HeaderUser.vue'
import MainUser from '@/components/MainUser.vue'
import FooterUser from '@/components/FooterUser.vue'

export default {
  name: 'User',
  components: {
    // UserData,
    HeaderUser,
    MainUser,
    FooterUser
  }
}
</script>

<style lang="scss" scoped>
.user-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(359.39deg, #EFEEEE 0.46%, #FFFFFF 99.42%);
}
</style>
