<template>
  <div>
    <main class="md-layout flex-center">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Create Account</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="{ 'md-invalid': errors.fields && !form.firstName }">
                <label for="first-name">First Name</label>
                <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" :disabled="sending" />
                <span class="md-error" v-if="errors.fields && !form.firstName">First name is required</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
                            <md-field :class="{ 'md-invalid': errors.fields && !form.lastName }">
                <label for="last-name">Last Name</label>
                <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" :disabled="sending" />
                <span class="md-error" v-if="errors.fields && !form.lastName">Last name is required</span>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
                <md-field :class="{ 'md-invalid': errors.fields && !form.color }">
                <label for="color">Favorite Color</label>
                <md-select name="color" id="color" v-model="form.color" md-dense :disabled="sending">
                  <md-option :key="color" v-for="color of colors" :value="color">{{ color }}</md-option>
                </md-select>
                <span class="md-error" v-if="errors.fields && !form.color">Favorite color is required</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
                <md-field :class="{ 'md-invalid': errors.fields && !form.age }">
                <label for="age">Age</label>
                <md-input type="number" id="age" name="age" autocomplete="age" v-model="form.age" :disabled="sending" />
                <span class="md-error" v-if="errors.fields && !form.age">Age is required</span>
              </md-field>
            </div>
          </div>

          <md-field :class="{ 'md-invalid': errors.fields && !form.username }">
            <label for="username">Username</label>
            <md-input type="username" name="username" id="username" autocomplete="username" v-model="form.username" :disabled="sending" />
            <span class="md-error" v-if="errors.fields && !form.username">Username is required</span>
          </md-field>

          <md-field :class="{ 'md-invalid': (errors.fields && !form.email) || errors.email }">
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
            <span class="md-error" v-if="errors.fields && !form.email">Email is required</span>
            <span class="md-error" v-if="errors.email">Email must be valid</span>
          </md-field>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button @click="saveUser()" type="submit" class="md-primary" :disabled="sending">Create user</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar v-if="userSaved" :style="{ 'background-color': lastUser.color.hex, 'color': lastUser.color.font }" :md-active.sync="userSaved">The user {{ lastUser.firstName }} {{ lastUser.lastName }} ({{ lastUser.username }}) was saved with success!</md-snackbar>
    </main>
  </div>
</template>

<script>
export default {
  name: 'InputFormPlugin',
  data () {
    return {
      form: {
        firstName: null,
        lastName: null,
        color: null,
        username: null,
        age: null,
        email: null
      },
      userSaved: false,
      sending: false,
      lastUser: null,
      colors: ['Blue', 'Green', 'Grey', 'Orange', 'Pink', 'Purple', 'Red', 'Yellow', 'Other'],
      errors: {
        fields: false,
        email: false
      }
    }
  },
  methods: {
    clearForm () {
      this.form.firstName = null
      this.form.lastName = null
      this.form.age = null
      this.form.color = null
      this.form.username = null
      this.form.email = null
    },
    saveUser () {
      if (!this.validateForm()) {
        return
      }

      this.sending = true

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.lastUser = JSON.parse(JSON.stringify(this.form))
        this.lastUser.color = this.getColorObj(this.lastUser.color)
        this.userSaved = true
        this.sending = false
        this.clearForm()
      }, 1500)
    },
    getColorObj(color) {
      switch (color) {
        case 'Blue':
          return { hex: '#64B5F6', font: '#3F2C1C', name: 'Blue' }
        case 'Green':
          return { hex: '#81C784', font: '#450442', name: 'Green' }
        case 'Grey':
          return { hex: '90A4AE', font: '#34190B', name: 'Grey' }
        case 'Orange':
          return { hex: '#FF8A65', font: '#19404C', name: 'Orange' }
        case 'Pink':
          return { hex: '#F06292', font: '#1C372E', name: 'Pink' }
        case 'Purple':
          return { hex: '#9575CD', font: '#2A4201', name: 'Purple' }
        case 'Red':
          return { hex: '#E57373', font: '#243535', name: 'Red' }
        case 'Yellow':
          return { hex: '#FFF176', font: '#1E2459', name: 'Yellow' }
        case 'Other':
          return { hex: '#E0E0E0', font: '#309191', name: 'Other' }
        default:
          return { hex: '#E0E0E0', font: '#309191', name: 'Other' }
      }
    },
    validateForm() {
      if (!this.form.firstName || !this.form.lastName || !this.form.age || !this.form.color || !this.form.username || !this.form.email) {
        this.errors.fields = true
        return false
      }

      this.errors.fields = false

      var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!emailRegex.test(this.form.email)) {
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
  main {
    height: 100vh;
  }
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>
