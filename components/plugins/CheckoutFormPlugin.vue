<template>
  <article class="container flex flex-center">
    <div class="checkout-form md-elevation-15 text-center column p-3">
      <h3 class="p-1">ORDER TOTAL</h3>
      <h1 class="p-1">$35.00</h1>
      <a class="p-1" href="#">Review Order</a>
      <div class="p-1" id="paypal-button"></div>
      <p>This form is a demo and no charges will be sent to your account.</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'CheckoutFormPlugin',
  mounted() {
    paypal.Button.render({
      env: 'sandbox',
      client: {
        sandbox: 'demo_sandbox_client_id'
      },
      style: {
        label: 'checkout',
        size: 'responsive',
        shape: 'pill',
        color: 'silver',
        tagline: false,
        layout: 'horizontal',
        fundingicons: true
      },
      payment: function (data, actions) {
        return actions.payment.create({
          transactions: [{
            amount: {
              total: '35.00',
              currency: 'USD'
            }
          }]
        })
      },
      onAuthorize: function (data, actions) {
        return actions.payment.execute()
          .then(function () {
            window.alert('Thank you for your purchase!')
          })
      }
    }, '#paypal-button')
  }
}
</script>

<style lang="scss" scoped>
  .container {
    height: 100vh;

    .checkout-form {
      background-color: white;
      width: 80vw;

      h3 {
        font-size: 2em;
      }

      h1 {
        font-size: 3em;
      }

      p {
        font-style: italic;
      }

      a {
        text-decoration: underline;
      }
    }
  }
</style>
