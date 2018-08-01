<template>
  <div class="grid details">
    <div class="flex lang-links mt-1 mr-1">
      <button><a :href="skill.github" target="_blank"><i class="fab fa-github"></i></a></button>
      <button><a :href="skill.website" target="_blank"><i class="fas fa-link"></i></a></button>
    </div>
    <div class="logo flex flex-center">
      <img :src="`../static/${skill.image}`" />
    </div>
    <p class="description">{{ skill.description }}</p>
    <div class="testimonial">
      <p>Testimonial:</p>
      <p>{{ skill.testimonial }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillDetails',
  props: ['skill']
}
</script>

<style lang="scss" scoped>
  @import '../styles/colors.scss';

  .details {
    background-color: color(blueDark);
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 6rem 2fr 2fr;
    grid-template-areas:
      '. . lang-links'
      'logo description .'
      '. testimonial .';

      .logo {
        grid-area: logo;
        img {
          height: 15em;
        }
      }

      .lang-links {
        grid-area: lang-links;
        justify-content: flex-end;
      }
      .description {
        grid-area: description;
        font-size: 1.2em;
      }
      .testimonial {
        grid-area: testimonial;
        font-style: italic;
      }
  }
</style>
