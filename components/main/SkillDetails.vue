<template>
  <div class="grid details pb-3">
    <div class="lang-links mt-1 mr-1">
      <button><a :href="skill.github" target="_blank"><i class="fab fa-github"></i></a></button>
      <button><a :href="skill.website" target="_blank"><i class="fas fa-link"></i></a></button>
    </div>
    <div class="logo flex">
      <img :src="`images/${skill.image}`" />
    </div>
    <div class="description mb-2" v-html="skill.description"></div>
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
  @import './assets/styles/colors.scss';
  @import './assets/styles/breaks.scss';

  .details {
    height: 30rem;
    background-color: color(blueDark);
    grid-template-columns: 20rem 5fr 1fr;
    grid-template-rows: 6rem 2fr 1fr;
    grid-template-areas:
      '. . lang-links'
      'logo description .'
      'logo testimonial .';

    @media (max-width: breaks(desktop)) {
      height: 35rem;
    }

    @media (max-width: breaks(laptop)) {
      grid-template-rows: 6rem 6rem 2fr 2fr;
      grid-template-areas:
        'logo . lang-links'
        'logo . .'
        'description description description'
        'testimonial testimonial testimonial';
    }

    @media (max-width: breaks(tablet)) {
      height: 45rem;
      grid-template-columns: 1fr 6rem;
      grid-template-rows: 6rem 5rem 2fr 2fr;
      grid-template-areas:
        'logo lang-links'
        'logo .'
        'description description'
        'testimonial testimonial';
    }

    @media (max-width: breaks(phone)) {
      height: 50rem;
    }

    .logo {
      grid-area: logo;
      align-items: flex-start;
      justify-content: center;

      @media (max-width: breaks(laptop)) {
          align-items: center;
      }

      img {
        height: 10rem;

        @media (max-width: breaks(laptop)) {
          height: 8rem;
        }
      }
    }
    .lang-links {
      grid-area: lang-links;
      justify-content: flex-end;
      display: flex;

      @media (max-width: breaks(phablet)) {
        display: block;
      }

      i {
        @media (max-width: breaks(phablet)) {
          font-size: 1rem;
        }
      }
    }
    .description {
      grid-area: description;
      font-size: 1.2em;

      @media (max-width: breaks(desktop)) {
        font-size: 1.1em;
      }

      @media (max-width: breaks(laptop)) {
        padding: 1rem 3rem;
      }

      @media (max-width: breaks(phablet)) {
        font-size: 1em;
      }
    }
    .testimonial {
      grid-area: testimonial;
      font-style: italic;
      font-size: 1em;

      @media (max-width: breaks(desktop)) {
        font-size: 0.9em;
      }

      @media (max-width: breaks(laptop)) {
        padding: 1rem 3rem;
      }

      @media (max-width: breaks(phablet)) {
        font-size: 0.8em;
      }
    }
  }
</style>
