<template>
  <main>
    <section class="grid top mb-3">
      <div class="img-container fade-in-top">
        <img src="../assets/me.png" />
      </div>
      <div class="flex social fade-in-right">
        <button><a href="https://github.com/cuddyz" target="_blank"><i class="fab fa-github"></i></a></button>
        <button><a href="https://www.facebook.com/zack.cuddy" target="_blank"><i class="fab fa-facebook"></i></a></button>
        <button><a href="https://www.linkedin.com/in/zack-cuddy-56b83984" target="_blank"><i class="fab fa-linkedin"></i></a></button>
        <button><a href="https://www.upwork.com/o/profiles/users/_~016c63c53cd0427c0e/" target="_blank"><i class="fas fa-briefcase"></i></a></button>
      </div>
      <div class="title fade-in-left">
        <h1>Zack Cuddy</h1>
        <hr class="mt-25 mb-25" />
        <h3>Developer</h3>
      </div>
    </section>
    <section class="grid middle">
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
        <div class="logo">
          <img src="../assets/vue.png" />
        </div>
        <p class="description">Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      isLoading: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/colors.scss';

  button {
    border-radius: 5px;
    background-color: color(blueLight);
    border-color: color(blueDark);
    margin: 0.5rem;
    padding: 0.75rem;
    &:hover {
      background-color: color(blueDark);
      border-color: darken(color(blueDark), 20%);
      cursor: pointer;
    }
    i {
      font-size: 2rem;
      color: color(grey);
    }
  }

  main {
    section {
      &.top {
        justify-content: center;
        grid-template-columns: 3rem 2fr 3fr 3rem;
        grid-template-rows: 7rem auto;
        grid-template-areas:
          '. . . .'
          '. profile-picture social .'
          '. title . .';
        grid-gap: 2rem;
      }
      &.middle {
        background-color: color(blueLight);
        justify-content: center;
        grid-template-columns: 3rem 1fr 3rem;
        grid-template-rows: auto 30rem;
        grid-template-areas:
          '. nav .'
          '. content .';
      }
    }
  }

  .img-container {
    grid-area: profile-picture;
    text-align: center;
    justify-content: center;
    border-radius: 50%;
    background-color: color(blueLight);
    border: 1px solid color(blueDark);
    width: 60%;

    img {
      border-radius: 50%;
      height: 100%;
      width: 100%;
    }
  }

  .social {
    grid-area: social;
    justify-content: center;
    align-items: flex-end;
  }

  .title {
    grid-area: title;
    color: color(blueLight);

    h1 {
      font-size: 2.3em;
    }

    h3 {
      font-size: 1.3em;
    }

    hr {
      border-color: color(blueLight);
    }
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
    grid-template-rows: 1fr 2fr 2fr;
    grid-template-areas:
      '. . lang-links'
      'logo description .'
      '. comments .';

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
  }
</style>
