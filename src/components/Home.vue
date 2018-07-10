<template>
  <main class="m-3">
    <section class="grid">
      <div class="img-container">
        <img src="../assets/me.png" />
      </div>
      <div class="title">
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
          'profile-picture .'
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
