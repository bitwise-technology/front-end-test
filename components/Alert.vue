<template>
  <div class="teste">
    <v-dialog
      v-model="dialog"
      hide-overlay
      fullscreen
      transition="dialog-slide-top-transition"
    >
      <v-container class="Alert">
        <v-row class="text-right">
          <v-col>
            <v-btn icon dark @click="dialog = false">
              <v-icon small>mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mt-n6 ml-5">
          <v-col>
            <span>{{ message }}</span>
          </v-col>
        </v-row>
        <v-row class="social-media">
          <v-col>
            <label> Enquanto isso, acompanhe a Bitwise nas redes sociais: </label>
          </v-col>
          <v-col class="mr-n12">
            <SocialMediaIcons :color-white="true" />
          </v-col>
        </v-row>
      </v-container>
    </v-dialog>
  </div>
</template>

<script>

import SocialMediaIcons from '~/components/SocialMediaIcons.vue';

export default {
  components: {
    SocialMediaIcons,
  },
  props: {
    modal: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      dialog: false,
    }
  },
  watch: {
    modal(val) {
      this.dialog = val;
    }
  }
}
</script>

<style scoped>

.Alert {
  background: linear-gradient(90deg, #A51C92 0%, #F638DC 100%);
  border-radius: 20px !important;
  width: 800px;
  margin-top: 60px;
}
.Alert span {
  font-family: 'Gotham-Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  display: flex;
  align-items: center;
  letter-spacing: -1px;
  color: #F0F0F0;
}

.Alert label {
  font-family: 'Futura Bk BT';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 40px;
  display: flex;
  align-items: center;
  color: #F0F0F0;
}
.Alert .social-media {
  margin: 16px 0 8px 20px;
  align-items: center;
}

</style>
