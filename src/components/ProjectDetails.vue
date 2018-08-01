<template>
  <div>
    <div class="logo flex">
      <img :src="`../static/${project.image}`" />
    </div>
    <h3>{{ project.name }}</h3>
    <p>{{ project.description }}</p>
    <button><a :href="project.website">View More</a></button>
  </div>
</template>

<script>
import LinkPreview from '@/components/LinkPreview.vue'

export default {
  name: 'ProjectDetails',
  props: ['project'],
  components: {
    LinkPreview
  }
}
</script>

<style lang="scss" scoped>
  .logo {
    grid-area: logo;
    align-items: flex-start;
    justify-content: center;

    img {
      height: 10rem;
    }
  }
</style>
