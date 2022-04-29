<template>
  <div>
    <v-autocomplete
      v-model="user"
      v-debounce:800ms="getUsers"
      prepend-inner-icon="mdi-magnify"
      :items="users"
      placeholder="Buscar usuário"
      class="UserSearchInput"
      height="50"
      :loading="isLoading"
      hide-selected
      item-text="name"
      item-value="login"
      solo>
      <template #item="{ item }">
        <v-list-item-title @click="userInfo(item.login)" v-text="item.name"></v-list-item-title>
      </template>
      <template #append>
        <div class="github-icon" @click="getUsers()">
          <img
            width="24"
            height="24"
            src="~/static/github.svg"
            alt=""
          >
        </div>
      </template>
      <template #no-data>
        <div class="pa-4"> Nenhum usuário foi encontrado </div>
      </template>
    </v-autocomplete>
  </div>
</template>

<script>

import Vue from 'vue'
import vueDebounce from 'vue-debounce'

Vue.use(vueDebounce);

export default {
  data() {
    return { 
      user: null,
      users: [],
      isLoading: false,
    }
  },

  methods: {
    async getUsers(user) {
      this.users = [];

      if (!user) {
        this.users = [] 
        return;
      }
      if (this.isLoading) return;

      this.isLoading = true

      const endpoint = "https://api.github.com/graphql";
      const headers = {
        "Authorization": "bearer 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",
        "Accept": "application/vnd.github.v3+json"
      };
      ;
      const graphqlQuery = {
        "query": `{
          search(query: "${user}", type: USER, first: 10) {
            nodes {
              ... on User { 
                login
                name
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
        this.users = res.data.search.nodes;
        this.$forceUpdate();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => (this.isLoading = false))
    },
    userInfo(login) {
      this.$router.push(`/userInfo?user=${login}`);
    }
  }
};

</script>

<style>
.UserSearchInput.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded) > .v-input__control > .v-input__slot {
  padding: 0 0 0 12px;
}
.UserSearchInput .github-icon {
  padding: 12px;
  background: #5A3D5C;
  margin: 0;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
}
.UserSearchInput .mdi-magnify::before {
  color: #5A3D5C !important;
}

</style>
