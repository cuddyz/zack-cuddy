<template>
  <div class="grid details">
    <div class="logo flex">
      <img :src="`../static/${project.image}`" />
    </div>
    <h3>{{ project.name }}</h3>
    <p>{{ project.description }}</p>
    <a :href="project.website"><button class="dark">View More</button></a>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetails',
  props: ['project']
}
</script>

<style lang="scss" scoped>
  @import '../styles/colors.scss';

  .details {
    border-radius: 5px;
    background-color: color(blueLight);
    grid-template-rows: 20rem 1fr 2fr 1fr;

    .logo {
      align-items: flex-start;
      justify-content: center;

      img {
        height: 10rem;
      }
    }
  }
</style>
