<template lang="pug">
  .main
    template(v-if="data")
      top-user(
        :name="data.name"
        :imageUrl="data.avatarUrl"
        :repositories="data.repositories.totalCount"
      )
      repositories(:repos="data.repositories.nodes")
</template>

<script>
import UserData from '../graphql/UserData.gql'
import TopUser from '@/components/TopUser.vue'
import Repositories from '@/components/Repositories.vue'

export default {
  name: 'main-user',
  components: {
    TopUser,
    Repositories
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  apollo: {
    data: {
      query: UserData,
      skip: true,
      variables: {
        name: ''
      },
      result(ApolloQueryResult) {
        return ApolloQueryResult.data
      },
      error() {
        this.$modal.show('userNotFound')
        return false
      }
    }
  },
  created() {
    this.$apollo.queries.data.setVariables({ name: this.name })
    this.$apollo.queries.data.start()
  }
}
</script>

<style lang="scss" scoped>
.main {
  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
