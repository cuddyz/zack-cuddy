<template>
  <section class="grid">
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
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style lang="scss" scoped>
  @import '../styles/colors.scss';

  section {
    justify-content: center;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 3rem auto;
    grid-template-areas:
      '. .'
      'profile-picture social'
      'title .';
    grid-gap: 2rem;
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
</style>
