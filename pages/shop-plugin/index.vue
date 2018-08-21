<template>
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

      <md-card-actions>
        <md-button class="md-primary">Add to cart</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'ShopPlugin',
  data() {
    return {
      items: [
        {
          title: 'Wireless Headphones',
          description: 'These Wireless Headphones have satisfied hundreds of thousands of consumers with the competitive price, great sound quality, deep powerful bass, comfortable protein ear pads, long playtime, and advanced active noise cancelling technology.',
          price: 89.99,
          image: 'images/shop/headphones.jpg'
        },
        {
          title: 'Men\'s Windbreaker Jacket',
          description: 'Stylish poplin gets a performance upgrade in this sleek jacket, water-resistant and packable for convenience on the go. A full-zip closure lets you adjust the coverage.',
          price: 69.99,
          image: 'images/shop/jacket.jpg'
        },
        {
          title: 'High-End Laptop',
          description: 'The High-End Laptop elevates the notebook to a whole new level of performance and portability. Wherever your ideas take you, you’ll get there faster than ever with high‑performance processors and memory, advanced graphics, blazing‑fast storage, and more.',
          price: 1499.99,
          image: 'images/shop/laptop.jpg'
        },
        {
          title: 'Designer Shoes',
          description: 'Amp up your run with the designer running shoe. Designed with unique energy-returning boost™ technology, this technical running shoe features 20% more boost cushioning material than ever before. New technology allows for flexibility and unleashes the boost™ responsiveness upon impact. Reinvent yourself and your run with the ultra-new, ultra-light.',
          price: 129.99,
          image: 'images/shop/shoes.jpg'
        },
        {
          title: 'Women\'s Dress',
          description: 'From the Caribbean to Croatia, the Women\'s Dress will keep you looking chic! Lightweight woven rayon in an allover white and pokadot shapes a darted bodice, with a tying front cutout, framed with no sleeves. Fitted waist tops a maxi skirt with twin side slits. Hidden side zipper/clasp.',
          price: 189.99,
          image: 'images/shop/dress.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/breaks.scss';

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
</style>
