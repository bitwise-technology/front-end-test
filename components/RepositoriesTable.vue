<template>
  <div class="RepositoriesTable">
    <vue-custom-scrollbar class="scroll-area">
      <table class="table">
        <tr class="table-title">
          <th class="pa-7 text-left" colspan="4">
            Repositórios de {{ user.name }}
          </th>
        </tr>
        <tr class="table-headers">
          <th>Nome do Repositório</th>
          <th>QTD de Commit</th>
          <th>Msg Ultimo Commit</th>
          <th>Hash do Ultimo Commit</th>
        </tr>
        <tr
          v-for="(repository, key) in user.repositories.nodes"
          :key="key"
          class="table-body"
        >
          <td>{{ repository.name }}</td>
          <td>{{ repository.defaultBranchRef.target.history.totalCount }}</td>
          <v-tooltip left>
            <template #activator="{ on, attrs }">
              <td v-bind="attrs" class="commit-message text-truncate" v-on="on">
                {{ repository.defaultBranchRef.target.message }}
              </td>
            </template>
            <span>{{ repository.defaultBranchRef.target.message }}</span>
          </v-tooltip>
          <td>{{ repository.defaultBranchRef.target.oid }}</td>
        </tr>
      </table>
    </vue-custom-scrollbar>
  </div>
</template>

<script>

import vueCustomScrollbar from 'vue-custom-scrollbar';
import "vue-custom-scrollbar/dist/vueScrollbar.css";

export default {
  components: {
    vueCustomScrollbar
  },
  props: {
    user: {
      type: Object,
      default: null,
    },
  }
}

</script>

<style scoped>

.RepositoriesTable .scroll-area {
  position: relative;
  margin: auto;
  height: 560px;
}
.RepositoriesTable .table {
  background: #FFFFFF;
  border-radius: 6px;
  width: 100%;
  margin-top: auto;
  border-collapse: collapse;
}
.RepositoriesTable .table-title {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #3D5879;
}
.RepositoriesTable .table-headers {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
  color: #657FA0;
}
.RepositoriesTable .table-headers th {
  border-bottom: 2px solid #C4C8D1;
  box-sizing: border-box; 
}
.RepositoriesTable .table-body td {
  mix-blend-mode: normal;
  opacity: 0.8;
  border-bottom: 1px solid #D4DAE4;
  box-sizing: border-box;
}
.RepositoriesTable .table-headers th,
.RepositoriesTable .table-body td {
  padding: 25px;
  text-align: left;
}
.RepositoriesTable .table-body {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #3D5879;
}
.RepositoriesTable .commit-message {
  max-width: 250px;
}

</style>