<template lang="pug">
  .user-page.container
    user-data(:name="$route.params.username")
</template>

<script>
import UserData from '@/components/UserData.vue'

export default {
  name: 'User',
  components: {
    UserData,
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
