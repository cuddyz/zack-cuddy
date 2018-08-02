<template>
  <section>
    <h3 class="mb-1">PROJECTS</h3>
    <div class="grid projects">
      <project-details :project="project" v-for="project in projects" :key="project.name"></project-details>
    </div>
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
  @import '../styles/breaks.scss';

  h3 {
    font-size: 1.3em;
    color: color(blueLight);
  }

  .projects {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;

    @media (max-width: breaks(desktop)) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: breaks(tablet)) {
      grid-template-columns: 1fr;
    }
  }
</style>
