<template>
  <section>
    <input v-model="contact.name" type="text" placeholder="Full Name" />
    <input v-model="contact.email" type="email" placeholder="Email" />
    <textarea v-model="contact.details" placeholder="Details" />
    <button>Submit</button>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      contact: {
        name: '',
        email: '',
        details: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/colors.scss';
</style>
