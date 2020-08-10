<template lang="pug">
  .main
    template(v-if="data")
      top-user(
        :name="data.name"
        :imageUrl="data.avatarUrl"
        :repositories="data.repositories.totalCount"
      )
      repositories(
        :repos="this.repos"
        @more-repositories="moreRepositories"
      )
</template>

<script>
import UserData from '../graphql/UserData.gql'
import MoreRepos from '../graphql/MoreRepos.gql'
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
  data() {
    return {
      repos1: [],
      repos: [],
      hasNextPage: false,
      endCursor: '',
      firstRequest: true,
      loading: false
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
        this.repos = ApolloQueryResult.data.data.repositories.nodes
        this.hasNextPage = ApolloQueryResult.data.data.repositories.pageInfo.hasNextPage
        this.endCursor = ApolloQueryResult.data.data.repositories.pageInfo.endCursor
        return ApolloQueryResult.data
      },
      error() {
        this.$modal.show('userNotFound')
        return false
      }
    },
    more: {
      query: MoreRepos,
      skip: true,
      variables: {
        name: '',
        last: ''
      },
      result(ApolloQueryResult) {
        return ApolloQueryResult.data
      },
      error() {
        return false
      }
    }
  },
  methods: {
    async moreRepositories() {
      if(this.hasNextPage && !this.loading) {
        this.loading = true
        if(this.firstRequest) {
          this.$apollo.queries.more.setVariables({ name: this.name, last: this.endCursor })
          this.$apollo.queries.more.start()
        }
        const { data } = await this.$apollo.queries.more.setVariables({ name: this.name, last: this.endCursor })
        this.repos.push(...data.more.repositories.nodes)
        this.hasNextPage = data.more.repositories.pageInfo.hasNextPage
        this.endCursor = data.more.repositories.pageInfo.endCursor
        this.loading = false
        this.firstRequest = false
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
