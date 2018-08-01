<template>
  <section class="grid">
    <p>Blah</p>
    <p>Blah2</p>
    <p>Blah3</p>
    <p>Blah 4</p>
  </section>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style lang="scss" scoped>
  @import '../styles/colors.scss';

  section {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
  }
</style>
