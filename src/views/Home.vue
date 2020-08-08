<template>
  <div class="home">
    <user />
  </div>
</template>

<script>
// @ is an alias to /src
import User from '@/components/User.vue'

export default {
  name: 'Home',
  components: {
    User
  }
}
</script>
