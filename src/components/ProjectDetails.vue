<template>
  <div class="grid details p-1">
    <div class="logo flex flex-center p-1">
      <img :src="`../static/${project.image}`" />
    </div>
    <h2>{{ project.name }}</h2>
    <p>{{ project.description }}</p>
    <div>
      <a :href="project.website" target="_blank"><button class="dark">View More</button></a>
    </div>
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
  @import '../styles/breaks.scss';

  .details {
    border-radius: 5px;
    background-color: color(blueLight);
    grid-template-rows: 15rem repeat(3, 1fr);
    grid-gap: 1rem;
    text-align: center;

    @media (max-width: breaks(phablet)) {
      grid-template-rows: 8rem repeat(3, 1fr);
    }

    .logo {
      img {
        border: 1px solid transparent;
        border-radius: 10px;
        max-height: 10rem;
        max-width: 80%;
      }
    }

    button {
      font-size: 1em;
    }
  }
</style>
