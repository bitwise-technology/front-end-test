<template lang="pug">
  .footer
    .footer-inner
      .container
        .top
          .logo
            router-link(to="/")
              logo
            .back-to-top-mobile
              a(href="#") VOLTAR AO TOPO
          .text
            | Acreditamos no valor da tecnologia e no impacto positivo que a transformação digital exerce sobre a sociedade, mudando o nosso dia a dia, facilitando atividades comuns e acelerando os negócios.
          .location
            h4 Brasil
            p R. Raphael Dias da Silva, 75 3º andar • Sala 306 e 308 Campolim • Sorocaba/SP
          .location
            h4 Canadá
            p Av. Ernest-Gagnon, Bureau 315, Sala 609 Quebec
        .bottom
          p Todos os direitos reservados - 2020
          social-media
          a(href="#") VOLTAR AO TOPO
</template>

<script>
import Logo from '@/components/Logo'
import SocialMedia from '@/components/SocialMedia'

export default {
  name: 'footer-user',
  components: {
    Logo,
    SocialMedia
  }
}
</script>

<style lang="scss">
.footer {
  background: url("../assets/bg-Footer.svg");
  .footer-inner {
    background-color: #382039;
    margin-top: 100px;
    @media (max-width: 767px) {
      margin-top: 30px;
    }
    .container {
      .top {
        display: flex;
        align-items: center;
        font-size: 12px;
        padding: 60px 0;
        color: #A51C92;
        border-bottom: 3px solid #A51C92;
        @media (max-width: 767px) {
          padding: 10px 0;
          border-bottom: none;
          .location, .text {
            display: none;
          }
        }
        .logo {
          margin-right: 60px;
          @media (max-width: 767px) {
            display: flex;
            align-items: center;
            margin: 0;
            width: 100%;
          }
          > a:hover {
            opacity: 0.8;
          }
          svg {
            path {
              fill: #A51C92;
            }
          }
          .back-to-top-mobile {
            display: none;
            @media (max-width: 767px) {
              display: block;
              margin-left: auto;
            }
            a {
              text-decoration: none;
              color: inherit;
              &:hover {
                color:#FD71EA
              }
            }
          }
        }
        .location {
          margin-left: 40px;
          h4 {
            text-transform: uppercase;
            margin: 0;
            color: #fff;
          }
          p {
            margin: 0;
            padding-top: 3px;
          }
        }
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 60px 0;
        color: #A51C92;
        font-size: 12px;
        a {
          text-decoration: none;
          color: inherit;
          &:hover {
            color:#FD71EA
          }
        }
        @media (max-width: 767px) {
          > a {
            display: none;
          }
        }
        @media (max-width: 576px) {
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
          padding: 10px 0 20px 0;
        }
      }
    }
  }
}
</style>
