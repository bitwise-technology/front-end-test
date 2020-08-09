<template lang="pug">
  .media
    .medium
      a(
        href="https://medium.com/"
        target="_blank"
        )
        logo-m
    .linkedin
      a(
        href="https://www.linkedin.com/company/bitwisetechnology/"
        target="_blank"
      )
        i.fab.fa-linkedin
    .instagram
      a(
        href="https://www.linkedin.com/company/bitwisetechnology/"
        target="_blank"
      )
        i.fab.fa-instagram
</template>

<script>
import LogoM from '@/components/LogoM'

export default {
  name: 'social-media',
  components: {
    LogoM
  }
}
</script>

<style lang="scss" scoped>
.media {
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 12px;
  i {
    color: #FD71EA;
    font-size: 28px;
  }
  a:hover {
    opacity: 0.6;
  }
}
</style>
