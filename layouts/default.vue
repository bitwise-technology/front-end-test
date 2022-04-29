<template>
  <v-app class="LayoutDefault">
    <div class="bg">
      <nuxt />
      <div v-if="$route.query.user">
        <Footer />
      </div>
    </div>
  </v-app>
</template>

<script>

import Footer from '~/components/Footer.vue';

export default {
  components: {
    Footer,
  },
}
</script>

<style scoped>
.LayoutDefault .bg {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: linear-gradient(359.39deg, #EFEEEE 0.46%, #FFFFFF 99.42%);
}

</style>