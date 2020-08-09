<template lang="pug">
  .home
    .container
      header-home
      .main
        .left
          h1.title
            | Buscar um usuário no 
            b Github
            |  ficou muito 
            b fácil!
          custom-input
        img(
          src="../assets/CenterHome.svg"
          alt="Imagem de pessoas trabalhando com tecnologia"
        )
      footer-home
</template>

<script>
import CustomInput from '@/components/CustomInput.vue'
import SocialMedia from '@/components/SocialMedia.vue'

export default {
  name: 'Home',
  components: {
    HeaderHome: () => import('@/components/HeaderHome'),
    FooterHome: () => import('@/components/FooterHome'),
    CustomInput,
    SocialMedia
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
  @media (max-width: 1200px) {
    background-size: 75%;
  }
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    .main {
      display: flex;
      align-items: center;
      .left {
        max-width: 100%;
        .title {
          font-weight: normal;
          color: #5A3D5C;
          font-size: 42px;
          flex: 1;
          margin-bottom: 100px;
        }
      }
      > img {
        margin-left: 130px;
      }
      @media (max-width: 992px) {
        > img {
          display: none;
        }
        .left {
          margin: auto;
          .title {
            font-size: 24px;
            text-align: center;
            margin-bottom: 50px;
          }
        }
      }
    }
  }
}
</style>
