<template>
  <div class="grid details">
    <div class="flex lang-links mt-1 mr-1">
      <button><a :href="skill.github" target="_blank"><i class="fab fa-github"></i></a></button>
      <button><a :href="skill.website" target="_blank"><i class="fas fa-link"></i></a></button>
    </div>
    <div class="logo flex">
      <img :src="`../static/${skill.image}`" />
    </div>
    <div class="text">
      <div class="description mb-2" v-html="skill.description"></div>
      <div class="testimonial">
        <p>Testimonial:</p>
        <p>{{ skill.testimonial }}</p>
      </div>
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
    grid-template-columns: 20rem 2fr 1fr;
    grid-template-rows: 6rem 25rem;
    grid-template-areas:
      '. . lang-links'
      'logo text .';

      .logo {
        grid-area: logo;
        align-items: flex-start;
        justify-content: center;

        img {
          height: 10rem;
        }
      }
      .lang-links {
        grid-area: lang-links;
        justify-content: flex-end;
      }
      .text {
        grid-area: text;
      }
      .description {
        font-size: 1.2em;
      }
      .testimonial {
        font-style: italic;
      }
  }
</style>
