<template>
  <main>
    <profile class="m-3"></profile>
    <skills class="pr-3 pl-3"></skills>
    <projects class="m-3"></projects>
    <contact class="pr-3 pl-3 pb-3"></contact>
  </main>
</template>

<script>
import Profile from '@/components/Profile.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    Profile,
    Skills,
    Projects,
    Contact
  }
}
</script>

<style lang="scss" scoped>
</style>
