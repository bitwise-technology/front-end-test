<template lang="pug">
  .user-top
    img(
      :src="imageUrl"
      alt="Imagem do usuário"
    )
    .container-data
      h1 {{ name }}
      .repositories-count
        .border
        .data
          p {{repositories}}
          span repositórios
</template>

<script>

export default {
  name: 'top-user',
  props: {
    name: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    repositories: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.user-top {
  display: flex;
  align-items: center;
  img {
    width: 120px;
    height: 120px;
    box-shadow: 0px 2px 6px rgba(84, 84, 89, 0.14);
  }
  .container-data {
    margin-left: 32px;
    h1 {
      margin: 0 0 12px 0;
      font-size: 22px;
      color: #657FA0;
    }
    .repositories-count {
      display: flex;
      align-items: center;
      width: fit-content;
      background-color: #FFFFFF;
      box-shadow: 0px 2px 38px rgba(84, 84, 89, 0.14);
      border-radius: 4px;
      .border {
        height: 16px;
        border: 1.5px solid #490248;
        border-radius: 0px 100px 100px 0px;
      }
      .data {
        padding: 10px 14px;
        p {
          margin: 0 0 3px 0;
          color: #242427;
          font-weight: bold;
          font-size: 18px;
          text-align: center;
        }
        span {
          font-size: 11px;
          text-align: center;
        }
      }
    }
  }
}
</style>
