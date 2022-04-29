<template>
  <v-container class="Home">
    <v-row class="padding-left">
      <v-col cols="12" md="6">
        <a href="https://bitwise.ltda/" target="_blank">
          <v-img alt="logo" src="/logo.png" class="logo"></v-img>
        </a>
      </v-col>
    </v-row>
    <v-row class="padding-left">
      <v-col cols="12" md="6">
        <div class="user-search-text">
          Buscar um usuário no <span> Github </span><br>
          ficou muito <span> fácil! </span>
        </div>
        <div class="user-search-input">
          <UserSearchInput :github-button="true"/>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div>
          <div class="triangle-bg-img"></div>
          <v-img alt="app" src="app.png" class="app-img"></v-img>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters class="social-media text-center" align="end">
      <v-col cols="12" md="12">
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
    return {}
  }
}
</script>


<style scoped>

.Home .logo {
  width: 140px;
  height: 50px;
  margin: auto;
  margin-top: 20px;
}
.Home .user-search-text {
  color: #5A3D5C;
  font-family: 'Gotham-Book';
  font-size: 26px;
  letter-spacing: -3px;
  margin-top: 20px;
  text-align: center;
  margin-bottom: 40px;
}
.Home .app-img {
  width: 230px;
  height: 210px;
  margin: auto;
  display: block;
}
.Home .social-media {
  margin-top: 50px;
}

@media (min-width: 600px) {
  .Home {
    height: 100%;
  }
  .Home .padding-left {
    padding-left: 138px;
  }
  .Home .logo {
    margin: 60px 0 0 0;
  }
  .Home .user-search-text {
    font-size: 42px;
    margin-top: 128px;
    line-height: 50px;
    text-align: left;
    margin-bottom: 0;
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
}
</style>