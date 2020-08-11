<template lang="pug">
  .user-page
    modal(name="reposNotFound" class="modal")
        .close(@click="close")
          i.fas.fa-times
        .modal-main
          .modal-title
            h1 Nenhum repositório encontrado!
          .modal-footer
            p Enquanto isso, acompanhe a Bitwise nas redes sociais:
            social-media
    .container
      header-user
      main-user(:name="$route.params.username")
    footer-user
</template>

<script>
import HeaderUser from '@/components/HeaderUser.vue'
import MainUser from '@/components/MainUser.vue'
import FooterUser from '@/components/FooterUser.vue'
import SocialMedia from '@/components/SocialMedia.vue'

export default {
  name: 'User',
  components: {
    // UserData,
    HeaderUser,
    MainUser,
    FooterUser,
    SocialMedia
  },
  methods: {
    close() {
      this.$modal.hide('reposNotFound')
    }
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
