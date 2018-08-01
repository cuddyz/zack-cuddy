<template>
  <section class="grid">
    <h3 class="pt-1 pb-1">Need help with a project?</h3>
    <input :class="{'error': errors.fields && !contact.name }" v-model="contact.name" type="text" placeholder="Full Name" />
    <input :class="{'error': (errors.fields && !contact.email) || errors.email }" v-model="contact.email" type="email" placeholder="Email" />
    <textarea :class="{'error': errors.fields && !contact.details }" v-model="contact.details" placeholder="Details" />
    <button @click="submit" class="dark">Submit</button>
    <h4 class="error" v-if="errors.fields">Make sure all the fields are filled out.</h4>
    <h4 class="error" v-if="errors.email">That email doesn't look valid to me.</h4>
    <h4 v-if="submitted">Thank you! I will reach out to you soon!</h4>
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
      },
      errors: {
        fields: false,
        email: false
      },
      submitted: false
    }
  },
  methods: {
    submit: function() {
      if (!this.validForm()) {
        return
      }

      this.submitted = true
    },
    validForm: function() {
      if (!this.contact.name || !this.contact.email || !this.contact.details) {
        this.errors.fields = true
        return false
      }

      this.errors.fields = false

      var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!emailRegex.test(this.contact.email)) {
        this.errors.email = true
        return false
      }

      this.errors.email = false
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/colors.scss';

  section {
    background-color: color(blueLight);
    grid-gap: 1rem;
    justify-items: center;

    h3 {
      font-size: 1.3em;
    }

    input,
    textarea {
      width: 50%;
      font-size: 1.2rem;

      &.error {
        border-color: color(error);
      }
    }

    h4 {
      font-size: 1.1rem;
      &.error {
        color: color(error);
      }
    }
  }
</style>
