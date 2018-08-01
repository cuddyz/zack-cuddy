<template>
  <section class="grid">
    <project-details :project="project" v-for="project in projects" :key="project.name"></project-details>
  </section>
</template>

<script>
import { Projects } from '@/constants/Projects.js'
import ProjectDetails from '@/components/ProjectDetails.vue'

export default {
  name: 'Projects',
  data () {
    return {
      projects: Projects
    }
  },
  components: {
    ProjectDetails
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/colors.scss';

  section {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
  }
</style>
