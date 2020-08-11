<template lang="pug">
  .input
    img.search(
      src="../assets/Search.svg"
      alt="Icone de lupa"
    )
    input(
      v-model="username"
      type="text"
      placeholder="Buscar usuário"
      @keyup="searchUsers"
      @keyup.enter="submit"
    )
    .git(
      v-if="ShowGitIcon"
      @click="submit"
    )
      img(
        src="../assets/Git.svg"
        alt="Icone do Github"
      )
    .select(:class="{ 'show-git': !ShowGitIcon }" v-if="users.length > 0")
      template(v-for="user in users")
        .value(@click="otherUser(user.login)")
          p {{ user.login }}
</template>

<script>
import User from '../graphql/User.gql'
import MoreUsers from '../graphql/MoreUsers.gql'

export default {
  name: 'custom-input',
  props: {
    ShowGitIcon: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  apollo: {
    user: {
      query: User,
      skip: true,
      variables: {
        name: ''
      },
      error() {
        return false
      }
    },
    moreUsers: {
      query: MoreUsers,
      skip: true,
      variables: {
        name: '',
      },
      error() {
        return false
      }
    }
  },
  data() {
    return {
      username: '',
      users: []
    }
  },
  methods: {
    async submit() {
      if(this.username.length > 0) {
        try {
          this.$apollo.queries.user.setVariables({ name: this.username })
          this.$apollo.queries.user.start()
          const { data } = await this.$apollo.queries.user.refetch()
          if(this.$route.name !== 'User') {
            this.$router.push({ name: 'User', params: { username: data.user.login } })
          }
          else {
            if(data.user.login !== this.$route.params.username) {
              this.$router.push({ name: 'User', params: { username: data.user.login } })
            }
            this.$router.go()
          }
        }
        catch (error) {
          this.$modal.show('userNotFound')
        }
      }
    },
    async searchUsers() {
      if(this.username.length > 0) {
        this.$apollo.queries.moreUsers.setVariables({ name: this.username })
        this.$apollo.queries.moreUsers.start()
        const { data } = await this.$apollo.queries.moreUsers.refetch()
        if(data) this.users = data.moreUsers.nodes
      }
      else {
        this.users = []
      }
    },
    otherUser(user) {
      this.username = user
      this.submit()
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  height: 56px;
  display: flex;
  background-color: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  .search {
    padding: 18px 22px;
  }
  input {
    flex: 1;
    font-size: 16px;
    border: none;
    outline: none;
    padding: 0;
    width: 100%;
  }
  .git {
    background-color: #5A3D5C;
    padding: 16px 22px;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
  .select {
    background-color: #fff;
    position: absolute;
    width: 100%;
    top: 56px;
    .value {
      overflow: hidden;
      padding: 18px 66px 18px 66px;
      transition: all 0.3s;
      &:hover {
        background-color: darken(#fff, 8);
      }
      p {
        margin: 0;
        overflow: hidden;
      }
    }
  }
  .select.show-git {
    .value {
      padding-right: 0;
    }
  }
}
</style>
