<template>
  <main class="m-3">
    <section class="grid">
      <div class="img-container fade-in-top">
        <img src="../assets/me.png" />
      </div>
      <div class="flex social fade-in-right">
        <button><a href="https://github.com/cuddyz" target="_blank"><i class="fa fa-github"></i></a></button>
        <button><a href="https://www.facebook.com/zack.cuddy" target="_blank"><i class="fa fa-facebook-official"></i></a></button>
        <button><a href="https://www.linkedin.com/in/zack-cuddy-56b83984" target="_blank"><i class="fa fa-linkedin"></i></a></button>
        <button><a href="https://www.upwork.com/o/profiles/users/_~016c63c53cd0427c0e/" target="_blank"><i class="fa fa-briefcase"></i></a></button>
      </div>
      <div class="title fade-in-left">
        <h1>Zack Cuddy</h1>
        <hr class="mt-25 mb-25" />
        <h3>Developer</h3>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../styles/colors.scss';

  main {
    section {
      &.grid {
        justify-content: center;
        grid-template-columns: 30vw 50vw;
        grid-template-rows: 7rem auto;
        grid-template-areas:
          '. .'
          'profile-picture social'
          'title .';
        grid-gap: 2rem;
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
</style>
