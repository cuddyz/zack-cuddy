<template>
  <div>
    <shop-plugin :items="items"></shop-plugin>
  </div>
</template>

<script>
import ShopPlugin from '@/components/plugins/ShopPlugin'

export default {
  name: 'Shop',
  data() {
    return {
      items: [
        {
          title: 'Wireless Headphones',
          description: 'These Wireless Headphones have satisfied hundreds of thousands of consumers with the competitive price, great sound quality, deep powerful bass, comfortable protein ear pads, long playtime, and advanced active noise cancelling technology.',
          price: 89.99,
          image: '/images/shop/headphones.jpg'
        },
        {
          title: 'Men\'s Windbreaker Jacket',
          description: 'Stylish poplin gets a performance upgrade in this sleek jacket, water-resistant and packable for convenience on the go. A full-zip closure lets you adjust the coverage.',
          price: 69.99,
          image: '/images/shop/jacket.jpg'
        },
        {
          title: 'High-End Laptop',
          description: 'The High-End Laptop elevates the notebook to a whole new level of performance and portability. Wherever your ideas take you, you’ll get there faster than ever with high‑performance processors and memory, advanced graphics, blazing‑fast storage, and more.',
          price: 1499.99,
          image: '/images/shop/laptop.jpg'
        },
        {
          title: 'Designer Shoes',
          description: 'Amp up your run with the designer running shoe. Designed with unique energy-returning boost™ technology, this technical running shoe features 20% more boost cushioning material than ever before. New technology allows for flexibility and unleashes the boost™ responsiveness upon impact. Reinvent yourself and your run with the ultra-new, ultra-light.',
          price: 129.99,
          image: '/images/shop/shoes.jpg'
        },
        {
          title: 'Women\'s Dress',
          description: 'From the Caribbean to Croatia, the Women\'s Dress will keep you looking chic! Lightweight woven rayon in an allover white and pokadot shapes a darted bodice, with a tying front cutout, framed with no sleeves. Fitted waist tops a maxi skirt with twin side slits. Hidden side zipper/clasp.',
          price: 189.99,
          image: '/images/shop/dress.jpg'
        }
      ]
    }
  },
  components: {
    ShopPlugin
  }
}
</script>
