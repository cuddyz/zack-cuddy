<template>
  <main>
    <profile class="pt-3 ml-3 mr-3 mb-3"></profile>
    <skills class="pr-3 pl-3 pb-3"></skills>
    <projects class="m-3"></projects>
    <contact class="pr-3 pl-3 pb-3"></contact>
  </main>
</template>

<script>
import Profile from '@/components/main/Profile.vue'
import Skills from '@/components/main/Skills.vue'
import Projects from '@/components/main/Projects.vue'
import Contact from '@/components/main/Contact.vue'

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
