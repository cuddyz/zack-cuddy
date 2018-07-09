<template>
  <main class="m-3">
    <section class="flex ml-5">
      <div class="img-container mt-3">
        <img class="pt-3" src="../assets/me.png" />
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

  .img-container {
    border-radius: 50%;
    background-color: color(blueLight);
    border: 1px solid color(blueDark);

    img {
      border-radius: 50%;
    }
  }

  .title {
    position: fixed;
    bottom: 35vh;
    color: color(blueLight);

    h1 {
      font-size: 2.3em;
    }

    h3 {
      font-size: 1.3em;
    }

    hr {
      width: 30rem;
      border-color: color(blueLight);
    }
  }
</style>
