<template>
  <main>
    <md-tabs md-active-tab="null" md-alignment="right">
      <md-tab id="tab-cart" md-icon="shopping_cart"></md-tab>
    </md-tabs>
    <div class="cart-count">
      <p>{{ cart.length }}</p>
    </div>
    <div class="grid p-2">
      <md-card :key="index" v-for="(item, index) in items">
        <md-card-area>
          <md-card-media>
            <img :src="item.image">
          </md-card-media>

          <md-card-header>
            <h2 class="md-title">{{ item.title }}</h2>
          </md-card-header>

          <md-card-content>
            {{ item.description }}
          </md-card-content>
        </md-card-area>

        <md-card-content>
          <h3 class="md-subheading">Price</h3>
          <div>
            <p>$ {{ item.price }}</p>
          </div>
        </md-card-content>

        <md-card-actions class="pb-1">
          <md-button @click="addToCart(item)" class="md-primary">Add to cart</md-button>
        </md-card-actions>
      </md-card>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ShopPlugin',
  props: ['items'],
  data() {
    return {
      cart: []
    }
  },
  methods: {
    addToCart(item) {
      this.cart.push({...item})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/breaks.scss';
  @import './assets/styles/colors.scss';

  .grid {
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;

    @media (max-width: breaks(desktop-wide)) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: breaks(laptop)) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: breaks(phablet)) {
      grid-template-columns: 1fr;
    }

    .md-card {
      display: grid;
      grid-auto-rows: 5fr 1fr 2rem;
    }
  }
  .cart-count {
    background-color: rgba(color(greyLight), .3);
    padding: .15rem .45rem;
    border-radius: 100%;
    position: absolute;
    top: .75rem;
    right: .25rem;
  }
</style>
