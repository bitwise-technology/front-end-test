<template lang="pug">
  .repositories-card(ref="repositories")
    template(v-if="repos.length")
      .card-header
        h2 Repositórios
      .cell.cell-header(v-if="width >= 768")
        .name
          | Nome do reoisitório
        .commit
          | Qtd de commits
        .msg
          | Msg do ultimo commmit
        .hash
          | Hash do ultimo commmit
      template(v-for="repo in repos") 
        .cell(v-if="width >= 768")
          .name
            | {{ repo.name }}
          .commit
            | {{ repo.object.history.totalCount }}
          .msg
            | {{ repo.object.history.nodes[0].messageHeadline }}
          .hash
            | {{ repo.object.history.nodes[0].oid }}
        .cell-mobile(v-else)
          h4 {{ repo.name }}
          .inner-repo
            p 
              b Qtd de commits: 
              | {{ repo.object.history.totalCount }}
            p
              b Msg do ultimo commmit:
            p {{ repo.object.history.nodes[0].messageHeadline }}
            p
              b Hash do ultimo commmit:
            p {{ repo.object.history.nodes[0].oid }}
    h2(v-else) Nenhum repositório encontrado
</template>

<script>

export default {
  name: 'repositories',
  props: {
    repos: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      width: 1400,
      bottom: false
    }
  },
  methods: {
    setWidth() {
      this.width = window.innerWidth
    },
    scroll(scroll) {
      this.bottom = scroll.target.scrollHeight - scroll.target.scrollTop  <= scroll.target.clientHeight
      if(this.bottom) {
        this.$emit('more-repositories')
        this.bottom = false
      }
    },
  },
  mounted() {
    this.setWidth()
    this.$refs.repositories.addEventListener('scroll', this.scroll)
    window.addEventListener('scroll', this.setWidth)
  },
  beforeDestroy() {
    this.$refs.repositories.removeEventListener('scroll', this.scroll, false)
    window.removeEventListener('resize', this.setWidth, false)
  },
}
</script>

<style lang="scss" scoped>
.repositories-card {
  width: 100%;
  background-color: #fff;
  padding: 30px 30px 10px 30px;
  margin: 30px 0 50px 0;
  color: #657FA0;
  max-height: 346px;
  overflow: auto;
  .card-header {
    h2 {
      margin: 0 0 15px 0;
    }
  }
  .cell:not(.cell-header) {
    border-top: 1px solid #D4DAE4;
  }
  .cell {
    display: flex;
    justify-content: space-between;
    padding: 28px;
    .name,
    .commit,
    .msg {
      margin-right: 10px;
    }
    .name,
    .commit,
    .msg,
    .hash {
      width: 25%;
      font-size: 15px;
      text-transform: uppercase;
      text-align: center;
      overflow: auto;
    }
  }
  .cell-mobile {
    .inner-repo {
      margin-left: 15px;
    }
    h4 {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
}
</style>
