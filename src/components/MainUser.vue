<template lang="pug">
  .main
    top-user(
      v-if="data"
      :name="data.name"
      :imageUrl="data.avatarUrl"
      :repositories="data.repositories.totalCount"
    )
</template>

<script>
import UserData from '../graphql/UserData.gql'
import TopUser from '@/components/TopUser.vue'

export default {
  name: 'main-user',
  components: {
    TopUser
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

<style lang="scss">
.main {
  @media (max-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
