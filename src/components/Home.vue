<template>
  <main>
    <section>
      <h1>Zack Cuddy</h1>
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
  h1 {
    color: color(blueLight);
  }
</style>
