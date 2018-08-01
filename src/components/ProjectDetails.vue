<template>
  <div>
    <link-preview :url="project.website"></link-preview>
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

</style>
