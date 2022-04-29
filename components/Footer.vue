<template>
  <div class="Footer">
    <v-img height="105" alt="footer-divider" src="footer-divider.png"></v-img>
    <v-container>
      <v-row class="d-flex mt-13" align="center" justify="center">
        <v-col md="auto" class="mr-15">
          <a href="https://bitwise.ltda/" target="_blank">
            <v-img width="100" height="35" alt="logo-footer" src="logo-footer.png"></v-img>
          </a>
        </v-col>
        <v-col md="auto" class="mr-10">
          <p>
            Acreditamos no valor da tecnologia e no impacto<br> 
            positivo que a transformação digital exerce sobre<br>
            a sociedade, mudando o nosso dia a dia, facilitando<br>
            atividades comuns e acelerando os negócios.
          </p>
        </v-col>
        <v-col md="auto" class="mr-3">
          <span>Brasil</span>
          <p>
            R. Raphael Dias da Silva, 75<br>
            3º andar • Sala 306 e 308<br>
            Campolim • Sorocaba/SP
          </p>
        </v-col>
        <v-col md="auto" class="mr-4">
          <span>Canadá</span>
          <p>
            830, Av. Ernest-Gagnon,<br>
            Bureau 315, Sala 609<br>
            Quebec
          </p>
        </v-col>
      </v-row>
      <v-row class="d-flex mt-6" align="center" justify="center">
        <v-col md="7">
          <hr class="divider">
        </v-col>
      </v-row>
      <v-row class="d-flex mt-6 copyright" align="center">
        <v-col md="auto" class="mr-n10">
          <label>Todos os direitos reservados - 2020</label>
        </v-col>
        <v-col md="auto" class="mx-n15">
          <SocialMediaIcons />
        </v-col>
        <v-col md="auto" class="ml-n10" @click="toTop">
          <div class="back-to-top">Voltar ao Topo</div>
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
.Footer .copyright {
  justify-content: space-evenly;
  margin-bottom: 80px;
}

</style>
