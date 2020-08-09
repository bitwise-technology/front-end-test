<template lang="pug">
  .header
    logo
    custom-input(:ShowGitIcon="false")
    social-media
</template>

<script>
import CustomInput from '@/components/CustomInput'
import SocialMedia from '@/components/SocialMedia'
import Logo from '@/components/Logo'

export default {
  name: 'header-user',
  components: {
    SocialMedia,
    CustomInput,
    Logo
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 60px 0;
  @media (max-width: 992px) {
    margin: 20px auto 30px auto;
    flex-direction: column;
    .input {
      margin-top: 30px;
    }
    .media {
      display: none;
    }
  }
  .input {
    max-width: 490px;
  }
}
</style>
