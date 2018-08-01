<template>
  <div>
    <link-prevue :url="project.website"></link-prevue>
  </div>
</template>

<script>
import LinkPrevue from 'link-prevue'

export default {
  name: 'ProjectDetails',
  props: ['project'],
  components: {
    LinkPrevue
  }
}
</script>

<style lang="scss" scoped>
</style>
