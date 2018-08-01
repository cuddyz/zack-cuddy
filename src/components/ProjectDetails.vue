<template>
  <div>
    <h1>{{ project.name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetails',
  props: ['project']
}
</script>

<style lang="scss" scoped>
  h1 {
    color: white;
  }
</style>
