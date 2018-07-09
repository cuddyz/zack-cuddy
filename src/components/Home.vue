<template>
  <main>
    <section>
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

  .title {
    position: fixed;
    bottom: 30vh;
    margin-left: 5rem;
    color: color(blueLight);

    h1 {
      font-size: 2.3em;
    }

    h3 {
      font-size: 1.3em;
    }

    hr {
      width: 30rem;
    }
  }
</style>
