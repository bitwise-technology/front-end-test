<template>
  <div class="Footer">
    <v-img height="105" alt="footer-divider" src="footer-divider.png"></v-img>
    <v-container>
      <v-row class="d-flex mt-md-4 mt-2 ma-auto" align="center" justify="center">
        <v-col class="logo-container mr-md-10" cols="12" md="2">
          <a href="https://bitwise.ltda/" target="_blank">
            <v-img class="logo" width="100" height="35" alt="logo-footer" src="logo-footer.png"></v-img>
          </a>
        </v-col>
        <v-col class="location-width-about ml-md-4" cols="12" md="3">
          <p>
            Acreditamos no valor da tecnologia e no impacto 
            positivo que a transformação digital exerce sobre
            a sociedade, mudando o nosso dia a dia, facilitando
            atividades comuns e acelerando os negócios.
          </p>
        </v-col>
        <v-col class="ml-md-11" cols="12" md="4">
          <v-row class="ma-auto">
            <v-col class="location-width-brasil py-3 pr-3 pl-0" cols="6" md="6">
              <span>Brasil</span>
              <p>
                R. Raphael Dias da Silva, 75
                3º andar • Sala 306 e 308
                Campolim • Sorocaba/SP
              </p>
            </v-col>
            <v-col class="location-width-canada" cols="6" md="6">
              <span>Canadá</span>
              <p>
                830, Av. Ernest-Gagnon,
                Bureau 315, Sala 609
                Quebec
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="mt-6 ma-auto my-n3" align="center" justify="center">
        <v-col cols="12" md="7">
          <hr class="divider">
        </v-col>
      </v-row>
      <v-row class="d-flex mt-6 ma-auto under-divider" align="center">
        <v-col cols="6" md="4" class="copyright mr-md-n15">
          <label>Todos os direitos reservados - 2020</label>
        </v-col>
        <v-col cols="6" md="4" class="social-media">
          <SocialMediaIcons class="pl-13" />
        </v-col>
        <v-col cols="12" md="4" class="back-to-top" @click="toTop">
          <div>Voltar ao Topo</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SocialMediaIcons from '~/components/SocialMediaIcons.vue';

export default {
  components: {
    SocialMediaIcons,
  },
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
}
</script>

<style scoped>

.Footer {
  background: #382039;
}
.Footer .logo {
  margin: auto;
}
.Footer span {
  font-family: 'Gotham-Book';
  font-style: normal;
  font-weight: 700;
  color: #F0F0F0;
  font-size: 12px;
  text-transform: uppercase;
}
.Footer p {
  font-family: 'Gotham-Book';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 1px;
  color: #FD71EA;
}
.Footer label {
  font-family: 'Gotham-Book';
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #FD71EA;
}
.Footer .back-to-top {
  font-family: 'Gotham-Book';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #FD71EA;
  text-transform: uppercase;
  cursor: pointer;
}
.Footer .divider {
  display: flex;
  justify-content: center;
  background: #A51C92;
  height: 3px;
  border: none;
}
.Footer .under-divider {
  justify-content: space-evenly;
  margin-bottom: 80px;
  text-align: center;
}
.Footer .copyright {
  text-align: left;
}
.Footer .social-media {
  text-align: right;
}
.Footer .back-to-top {
    text-align: center;
  }

@media (min-width: 600px) {
  .Footer .location-width-about {
    max-width: 380px;
  }
  .Footer .location-width-brasil {
    max-width: 215px;
  }
  .Footer .location-width-canada {
    max-width: 200px;
  }
  .Footer .logo-container {
    display: flex;
    justify-content: end;
  }
  .Footer .copyright {
    text-align: right;
  }
  .Footer .social-media {
    text-align: center;
  }
  .Footer .back-to-top {
    text-align: left;
    padding-left: 110px;
  }
}

</style>
