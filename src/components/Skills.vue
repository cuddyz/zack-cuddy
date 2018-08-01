<template>
  <section class="grid pl-3 pr-3">
    <div class="nav">
      <ul class="flex">
        <li class="active"><i class="fab fa-vuejs"></i></li>
        <li><i class="fab fa-node-js"></i></li>
        <li><i class="fab fa-angular"></i></li>
        <li><i class="fab fa-html5"></i></li>
        <li><i class="fab fa-css3-alt"></i></li>
        <li><i class="fab fa-js"></i></li>
      </ul>
    </div>
    <div class="grid content">
      <div class="flex lang-links mt-1 mr-1">
        <button><a href="https://github.com/vuejs/vue" target="_blank"><i class="fab fa-github"></i></a></button>
        <button><a href="https://vuejs.org/" target="_blank"><i class="fas fa-link"></i></a></button>
      </div>
      <div class="logo flex flex-center">
        <img src="../assets/vue.png" />
      </div>
      <p class="description">Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.</p>
      <div class="testimonial">
        <p>Testimonial:</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus quis dolor non tempor. Nulla eros ex, egestas eget rhoncus non, tempor non diam. Fusce nibh ante, varius id massa eu, maximus porttitor massa. Phasellus fermentum ornare felis sed dapibus. Curabitur et luctus ante, nec hendrerit urna</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills'
}
</script>

<style lang="scss" scoped>
  @import '../styles/colors.scss';

  section {
    background-color: color(blueLight);
    justify-content: center;
    grid-template-areas:
      'nav'
      'content';
  }

  .nav {
    grid-area: nav;

    li {
      border-left: 3px solid color(blueDark);
      border-bottom: 3px solid color(blueDark);
      padding: 1rem;
      &:last-child {
        border-right: 3px solid color(blueDark);
      }
      &.active {
        border-bottom: 0px;
        background-color: color(blueDark);
      }
      &:hover {
        cursor: pointer;
        background-color: color(blueDark);
      }
      i {
        font-size: 4rem;
        color: color(grey);
      }
    }
  }

  .content {
    grid-area: content;
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
