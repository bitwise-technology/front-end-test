<template>
  <v-app dark class="Error">
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <div>
          <div class="triangle-bg-img"></div>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <h1 v-if="error.statusCode === 404">
          {{ pageNotFound }}
        </h1>
        <h1 v-else>
          {{ otherError }}
        </h1>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>

import SocialMediaIcons from '~/components/SocialMediaIcons.vue';

export default {
  name: 'EmptyLayout',
  layout: 'empty',
  componentes: {
    SocialMediaIcons,
  },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'Página não encontrada',
      otherError: 'Ocorreu um erro',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>

.Error h1 {
  font-size: 40px;
  font-family: 'Gotham-Bold';
  text-align: center;
  color: #5A3D5C;
}

@media (min-width: 600px) {
  .Error .triangle-bg-img {
    position: absolute;
    width: 1150px;
    height: 800px;
    right: 0;
    top: 0;
    background: url('~/static/home-triangle-bg.jpg');
    -webkit-clip-path: polygon(0 0, 0 100px, 100px 80px, 100px 0);
    clip-path: polygon(0% 0, 100% 0%, 100% 100%);
  }
  .Error h1 {
    font-size: 64px;
    font-family: 'Gotham-Bold';
    text-align: left;
    color: #5A3D5C;
    margin-left: 100px;
  }
}
</style>
