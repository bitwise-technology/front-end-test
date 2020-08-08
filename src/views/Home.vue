<template lang="pug">
  .home
    .container
      header-home
      .main
        h1.title
          | Buscar um usuário no 
          b Github
          |  ficou muito 
          b fácil!
        img(src="../assets/CenterHome.svg" alt="Imagem de pessoas trabalhando com tecnologia")
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
  @media (max-width: 991px) {
    background: transparent;
  }
  @media (max-width: 1199px) {
    background-size: 75%;
  }
  .container {
    display: flex;
    flex-direction: column;
    .main {
      display: flex;
      align-items: center;
      .title {
        text-align: center;
        font-weight: normal;
        color: #5A3D5C;
        font-size: 42px;
        flex: 1;
      }
      @media (max-width: 991px) {
        > img {
          display: none;
        }
        .title {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
