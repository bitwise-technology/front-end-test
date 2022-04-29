<template>
  <v-container class="Home">
    <v-row class="padding-left">
      <v-col md="6">
        <a href="https://bitwise.ltda/" target="_blank">
          <v-img alt="logo" src="/logo.png" class="logo"></v-img>
        </a>
      </v-col>
    </v-row>
    <v-row class="padding-left">
      <v-col md="6">
        <div class="user-search-text">
          Buscar um usuário no <span> Github </span><br>
          ficou muito <span> fácil! </span>
        </div>
        <div class="user-search-input">
          <UserSearchInput :github-button="true"/>
        </div>
      </v-col>
      <v-col md="6">
        <div>
          <div class="triangle-bg-img"></div>
          <v-img alt="app" src="app.png" class="app-img"></v-img>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters class="social-media text-center" align="end">
      <v-col md="12">
        <SocialMediaIcons />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserSearchInput from '~/components/UserSearchInput.vue';
import SocialMediaIcons from '~/components/SocialMediaIcons.vue';

export default {
  components: {
    UserSearchInput,
    SocialMediaIcons,
  },
  data () {
    return {
    }
  }
}
</script>


<style scoped>

.Home {
  height: 100%;
}
.Home .padding-left {
  padding-left: 138px;
}
.Home .logo {
  width: 140px;
  height: 50px;
  margin-top: 60px;
}
.Home .user-search-text {
  color: #5A3D5C;
  line-height: 50px;
  font-family: 'Gotham-Book';
  font-size: 42px;
  letter-spacing: -3px;
  margin-top: 128px;
}
.Home .user-search-text span {
  font-family: 'Gotham-Bold';
}
.Home .user-search-input {
  margin-top: 100px;
}
.Home .triangle-bg-img {
  position: absolute;
  width: 1150px;
  height: 800px;
  right: 0;
  top: 0;
  background: url('~/static/home-triangle-bg.jpg');
  -webkit-clip-path: polygon(0 0, 0 100px, 100px 80px, 100px 0);
  clip-path: polygon(0% 0, 100% 0%, 100% 100%);
}
.Home .app-img {
  position: absolute;
  width: 443px;
  height: 406px;
  left: 1170px;
  top: 210px;
}
.Home .social-media {
  margin-top: 320px;
}
</style>