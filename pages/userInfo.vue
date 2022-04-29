<template>
  <v-container class="userInfo">
    <v-row class="padding-left header">
      <v-col md="3">
        <v-img alt="logo" src="/logo.png" class="logo"></v-img>
      </v-col>
      <v-col md="6">
        <UserSearchInput />
      </v-col>
      <v-col md="3" class="social-media">
        <SocialMediaIcons />
      </v-col>
    </v-row>
    <v-row v-if="user" class="padding-left">
      <v-col>
        <v-row>
          <v-col md="1">
            <v-img class="user-avatar" width="120" height="120" alt="user-avatar" :src="user.avatarUrl"></v-img>
          </v-col>
          <v-col md="11" class="repositories-quantity">
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
  data() {
    return {
      user: null,
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
      const login = this.$route.query.user;
      const endpoint = "https://api.github.com/graphql";
      const headers = {
        "Authorization": "bearer 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",
        "Accept": "application/vnd.github.v3+json"
      };
      ;
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
        this.user = res.data.user;
        console.log(this.user);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => (this.isLoading = false))
    },
  }
}
</script>

<style scoped>
.userInfo {
  height: 100%;
}
.userInfo .logo {
  width: 140px;
  height: 50px;
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
  justify-content: end;
}
</style>