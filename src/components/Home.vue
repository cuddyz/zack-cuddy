<template>
  <main>
    <profile class="m-3"></profile>
    <skills></skills>
  </main>
</template>

<script>
import Profile from '@/components/Profile.vue'
import Skills from '@/components/Skills.vue'

export default {
  name: 'Home',
  data () {
    return {
      isLoading: false
    }
  },
  components: {
    Profile,
    Skills
  }
}
</script>

<style lang="scss" scoped>
</style>
