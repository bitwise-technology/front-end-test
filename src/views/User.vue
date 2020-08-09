<template lang="pug">
  .user-page.container
    //- user-data(:name="$route.params.username")
    header-user
</template>

<script>
// import UserData from '@/components/UserData.vue'
import HeaderUser from '@/components/HeaderUser.vue'

export default {
  name: 'User',
  components: {
    // UserData,
    HeaderUser
  }
}
</script>

<style lang="scss" scoped>
.user-page {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
