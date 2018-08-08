<template>
  <section class="grid">
    <div class="img-container fade-in-top">
      <div class="img-background">
        <img src="images/me.png" />
      </div>
    </div>
    <div class="flex social fade-in-right">
      <button><a href="https://github.com/cuddyz" target="_blank"><i class="fab fa-github"></i></a></button>
      <button><a href="https://www.facebook.com/zack.cuddy" target="_blank"><i class="fab fa-facebook"></i></a></button>
      <button><a href="https://www.linkedin.com/in/zcuddy" target="_blank"><i class="fab fa-linkedin"></i></a></button>
      <button><a href="https://www.upwork.com/o/profiles/users/_~016c63c53cd0427c0e/" target="_blank"><i class="fas fa-briefcase"></i></a></button>
    </div>
    <div class="title fade-in-left">
      <h1>Zack Cuddy</h1>
      <hr class="mt-25 mb-25" />
      <h3>Developer</h3>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/colors.scss';
  @import '../assets/styles/breaks.scss';

  section {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 3rem auto;
    grid-template-areas:
      '. .'
      'profile-picture social'
      'title .';
    grid-gap: 2rem;

    @media (max-width: breaks(tablet)) {
      grid-template-rows: auto;
      grid-template-areas:
        'profile-picture social'
        'title social';
    }

  }
  .img-container {
    grid-area: profile-picture;

    .img-background {
      border-radius: 50%;
      background-color: color(blueLight);
      border: 1px solid color(blueDark);
      max-width: 25rem;
      max-height: 25rem;

      img {
        border-radius: 50%;
        width: 100%;
        max-width: 25rem;
        height: 100%;
        max-height: 25rem;
    }
    }
  }

  .social {
    grid-area: social;
    justify-content: center;
    align-items: flex-end;

    @media (max-width: breaks(tablet)) {
      flex-direction: column;
    }
  }

  .title {
    grid-area: title;
    color: color(blueLight);

    h1 {
      font-size: 2.3em;

      @media (max-width: breaks(phablet)) {
        font-size: 2em;
      }
    }

    h3 {
      font-size: 1.3em;

      @media (max-width: breaks(phablet)) {
        font-size: 1em;
      }
    }

    hr {
      border-color: color(blueLight);
      width: 50vw;
    }
  }

  button {
    i {
      @media (max-width: breaks(phablet)) {
        font-size: 1rem;
      }
    }
  }
</style>
