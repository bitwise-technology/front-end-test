<template>
    <div class="SocialMediaIcons d-inline-flex">
      <div>
        <a href="https://medium.com/@bitwisetechnology" target="_blank">
          <img height="25" width="25" alt="medium" :src="colorWhite ? 'medium-white.svg' : 'medium.svg'" />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/company/bitwisetechnology/" target="_blank">
          <img height="25" width="25" alt="linkedin" :src="colorWhite ? 'linkedin-white.svg' : 'linkedin.svg'" />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/bitwisetechnology/" target="_blank">
          <img height="25" width="25" alt="instagram" :src="colorWhite ? 'instagram-white.svg' : 'instagram.svg'" />
        </a>
      </div>
    </div>
</template>

<script>

export default {
  props: {
    colorWhite: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  }
}

</script>

<style scoped>

.SocialMediaIcons img {
  color: #FD71EA;
  margin-right: 12px;
}

</style>