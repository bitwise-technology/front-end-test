<template lang="pug">
  .footer-home
    social-media
</template>

<script>
import SocialMedia from '@/components/SocialMedia.vue'

export default {
  name: 'footer-home',
  components: {
    SocialMedia
  }
}
</script>

<style scoped>
.footer-home {
  margin: auto auto 0 auto;
}
</style>

