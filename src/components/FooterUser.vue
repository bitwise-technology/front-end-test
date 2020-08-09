<template lang="pug">
  .footer
    .footer-inner
      .container
        .top
          .logo
            logo
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
    .container {
      .top {
        display: flex;
        align-items: center;
        font-size: 12px;
        padding: 60px 0;
        color: #A51C92;
        border-bottom: 3px solid #A51C92;
        .logo {
          margin-right: 60px;
          svg {
            path {
              fill: #A51C92;
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
      }
    }
  }
}
</style>
