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
          .input
            img.search(src="../assets/Search.svg" alt="Icone de lupa")
            input(type="text" placeholder="Buscar usuário")
            .git
              img(src="../assets/Git.svg" alt="Icone do Github")
        img(src="../assets/CenterHome.svg" alt="Imagem de pessoas trabalhando com tecnologia")
      //- footer-home
</template>

<script>

export default {
  name: 'Home',
  components: {
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
      .left {
        .title {
          font-weight: normal;
          color: #5A3D5C;
          font-size: 42px;
          flex: 1;
        }
        .input {
          width: 100%;
          height: 56px;
          display: flex;
          background-color: #fff;
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
          .search {
            padding: 18px 22px;
          }
          input {
            flex: 1;
            font-size: 16px;
            border: none;
            outline: none;
          }
          .git {
            background-color: #5A3D5C;
            padding: 16px 22px;
            &:hover {
              opacity: 0.9;
            }
          }
        }
      }
      > img {
        margin-left: 130px;
      }
      @media (max-width: 991px) {
        > img {
          display: none;
        }
        .title {
          font-size: 24px;
          text-align: center;
        }
      }
    }
  }
}
</style>
