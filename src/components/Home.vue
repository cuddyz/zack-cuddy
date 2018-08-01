<template>
  <main>
    <profile class="m-3"></profile>
    <skills class="pr-3 pl-3"></skills>
    <projects class="m-3"></projects>
  </main>
</template>

<script>
import Profile from '@/components/Profile.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'

export default {
  name: 'Home',
  data () {
    return {
      isLoading: false
    }
  },
  components: {
    Profile,
    Skills,
    Projects
  }
}
</script>

<style lang="scss" scoped>
</style>
