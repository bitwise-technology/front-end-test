<template lang="pug">
  #app
    router-view
    modal(name="userNotFound" class="modal")
      .close(@click="close")
        i.fas.fa-times
      .modal-main
        .modal-title
          h1 Nenhum usuário encontrado!
        .modal-footer
          p Enquanto isso, acompanhe a Bitwise nas redes sociais:
          social-media
  </div>
</template>

<script>
import SocialMedia from '@/components/SocialMedia.vue'

export default {
  components: {
    SocialMedia
  },
  methods: {
    close() {
      this.$modal.hide('userNotFound')
    }
  }
}
</script>

<style lang="scss">
@import "./styles/main.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100%;
  background: linear-gradient(359.39deg, #EFEEEE 0.46%, #FFFFFF 99.42%);
}
</style>
