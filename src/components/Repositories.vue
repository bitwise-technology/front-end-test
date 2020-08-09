<template lang="pug">
  .repositories-card
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
      width: 1400
    }
  },
  methods: {
    setWidth() {
      this.width = window.innerWidth
    }
  },
  mounted() {
    this.setWidth()
    window.addEventListener('resize', this.setWidth)
  },
  destroyed() {
    window.removeEventListener('resize', this.setWidth)
  },
}
</script>

<style lang="scss" scoped>
.repositories-card {
  width: 100%;
  background-color: #fff;
  padding: 30px;
  margin: 30px 0 50px 0;
  color: #657FA0;
  max-height: 346px;
  overflow: auto;
  @media (max-width: 767px) {
    max-height: none;
  }
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
  }
}
</style>
