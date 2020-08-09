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
</template>

<script>
import User from '../graphql/User.gql'

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
    }
  },
  data() {
    return {
      username: '',
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
}
</style>
