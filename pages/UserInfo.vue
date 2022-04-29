<template>
  <v-container class="userInfo">
    <v-row class="padding-left header">
      <v-col cols="6" md="3">
        <a href="https://bitwise.ltda/" target="_blank">
          <v-img alt="logo" src="/logo.png" class="logo"></v-img>
        </a>
      </v-col>
      <v-col cols="12" md="6">
        <UserSearchInput />
      </v-col>
      <v-col cols="6" md="3" class="social-media">
        <SocialMediaIcons />
      </v-col>
    </v-row>
    <v-row v-if="user" class="padding-left">
      <v-col>
        <v-row>
          <v-col cols="5" md="1">
            <v-img 
              class="user-avatar" 
              width="120"
              height="120" 
              alt="user-avatar" 
              :src="user.avatarUrl">
            </v-img>
          </v-col>
          <v-col cols="7" md="11" class="repositories-quantity">
            <div class="user-name">{{ user.name }}</div>
            <div class="user-repositories"> 
              <label>{{ user.repositories.nodes.length }}</label><br>
              <span>Repositórios</span>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-if="user" class="padding-left">
      <v-col>
        <RepositoriesTable :user="user" />
      </v-col>
    </v-row>
    <Alert message="Nenhum repositório encontrado!" :modal="modal" />
  </v-container>
</template>

<script>
import UserSearchInput from '~/components/UserSearchInput.vue';
import SocialMediaIcons from '~/components/SocialMediaIcons.vue';
import Alert from '~/components/Alert.vue';

export default {
  components: {
    UserSearchInput,
    SocialMediaIcons,
    Alert,
  },
  data() {
    return {
      user: null,
      modal: false,
      error: null,
    }
  },
  watch: {
    '$route.query.user'() {
      this.getUser();
    }
  },
  mounted() {
    this.getUser()
  },
  methods: {
    async getUser() {
      this.modal = false;
      
      const login = this.$route?.query.user;
      const endpoint = "https://api.github.com/graphql";
      const headers = {
        "Authorization": `bearer ${process.env.token}`,
        "Accept": "application/vnd.github.v3+json"
      };

      const graphqlQuery = {
        "query": `{
          user(login: "${login}") {
            login
            ... on User {
              name
              avatarUrl
              repositories(first: 100) {
                nodes {
                  name
                  defaultBranchRef {
                    target {
                      ... on Commit {
                        oid
                        message
                        history {
                          totalCount
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        `
      };

      const options = {
        "method": "POST",
        headers,
        "body": JSON.stringify(graphqlQuery)
      };

      const response = await fetch(endpoint, options);
      await response.json().then(res => {
        if (res.data.user?.repositories.nodes?.length === 0) {
          this.modal = true;
        }

        this.user = res.data.user;
      })
      .catch(err => {
        this.error = err;
      })
      .finally(() => (this.isLoading = false))
    },
  }
}
</script>

<style scoped>

.userInfo .logo {
  width: 140px;
  height: 50px;
  margin-top: 20px;
}

.userInfo .social-media {
  justify-content: flex-end;
  margin-top: 30px;
  position: absolute;
  right: 0;
  text-align: right;
}
.userInfo .user-avatar {
  background-blend-mode: normal;
  filter: drop-shadow(0px 2px 4px rgba(84, 84, 89, 0.14));
  border-radius: 4px;
}
.userInfo .user-name {
  font-family: 'Gotham-Bold';
  font-size: 22.2751px;
  line-height: 175%;
  display: flex;
  align-items: center;
  color: #657FA0;
}
.userInfo .user-repositories {
  background: #FFFFFF;
  box-shadow: 0px 2px 38px rgba(84, 84, 89, 0.14);
  border-radius: 4px;
  width: 96px;
  height: 64px;
  text-align: center;
  line-height: 15px;
  padding-top: 10px;
}
.userInfo .user-repositories label {
  font-family: 'Gotham-Bold';
  font-size: 18px;
  line-height: 22px;
  color: #242427;
}
.userInfo .user-repositories span {
  font-family: 'Gotham-Book';
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #878790;
} 
.userInfo .repositories-quantity {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

@media (min-width: 600px) {
  .userInfo {
    height: 100%;
  }
  .userInfo .logo {
    margin-top: 0;
  }
  .userInfo .padding-left {
    padding-left: 138px;
  }
  .userInfo .header {
    display: flex;
    align-items: flex-start;
    margin-top: 60px;
  }
  .userInfo .social-media {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  .userInfo .user-avatar {
    background-blend-mode: normal;
    filter: drop-shadow(0px 2px 4px rgba(84, 84, 89, 0.14));
    border-radius: 4px;
  }
}

</style>