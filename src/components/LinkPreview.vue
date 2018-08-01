<template>
<!-- Local copy of https://github.com/nivaldomartinez/link-prevue -->
<div>
  <div id="loader-container" v-if="!response && validUrl" :style="{width:cardWidth}">
    <slot name="loading">
      <div class="spinner"></div>
    </slot>
  </div>
  <div v-if="response">
    <slot :img="response.images[0]" :title="response.title" :description="response.description" :url="url">
      <div class="wrapper grid" :style="{width:cardWidth}">
        <div class="card-img">
          <img :src="response.images[0]">
        </div>
        <div class="card-info">
          <div class="card-text">
            <h1>{{response.title}}</h1>
            <p>{{response.description}}</p>
          </div>
          <div class="card-btn">
            <a :href="url" v-if="showButton">View More</a>
          </div>
        </div>
      </div>
    </slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'link-prevue',
  props: {
    url: {
      type: String,
      default: ''
    },
    cardWidth: {
      type: String,
      default: '400px'
    },
    onButtonClick: {
      type: Function,
      default: undefined
    },
    showButton: {
      type: Boolean,
      default: true
    },
    apiUrl: {
      type: String,
      default: 'https://linkpreview-api.herokuapp.com/'
    }
  },
  watch: {
    url: function(value) {
      this.response = null
      this.getLinkPreview()
    }
  },
  created() {
    this.getLinkPreview()
  },
  data: function() {
    return {
      response: null,
      validUrl: false
    }
  },
  methods: {
    viewMore: function() {
      if (this.onButtonClick !== undefined) {
        this.onButtonClick(this.response)
      } else {
        const win = window.open(this.url, '_blank')
        win.focus()
      }
    },
    isValidUrl: function(url) {
      const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
      this.validUrl = regex.test(url)
      return this.validUrl
    },
    getLinkPreview: function() {
      if (this.isValidUrl(this.url)) {
        this.httpRequest((response) => {
          this.response = JSON.parse(response)
        }, () => {
          this.response = null
          this.validUrl = false
        })
      }
    },
    httpRequest: function(success, error) {
      const http = new XMLHttpRequest()
      const params = 'url=' + this.url
      http.open('POST', this.apiUrl, true)
      http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      http.onreadystatechange = function() {
        if (http.readyState === 4 && http.status === 200) {
          success(http.responseText)
        }
        if (http.readyState === 4 && http.status === 500) {
          error()
        }
      }

      http.send(params)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/colors.scss';

.wrapper {
  grid-auto-rows: 20rem auto;
  overflow: auto;
  border-radius: 5px;
  background-color: color(blueLight);
  height: 30rem;
}

.card-img {
  width: 100%;

  img {
    width: 100%;
  }
}

.card-text {
  width: 80%;
  margin: 0 auto;
  text-align: justify;

  h1 {
    text-align: center;
    font-size: 24px;
    margin: 5px 0 5px 0;
  }

  p {
    font-size: 15px;
    overflow: hidden;
    margin: 0;
    text-align: center;
  }
}

.card-btn {
  margin: 1em 0 1em 0;
  position: relative;
  text-align: center;

  a {
    border-radius: 20px;
    background-color: color(blueDark);
    padding: .5rem 1rem;
    text-align: center;
    display: inline-block;

    &:hover {
      background-color: darken(color(blueDark), 10%);
      color: color(greyDark);
    }
  }

}

/* Loader */
.spinner {
  margin-top: 40%;
  margin-left: 45%;
  height: 28px;
  width: 28px;
  animation: rotate 0.8s infinite linear;
  border: 5px solid color(blue);
  border-right-color: transparent;
  border-radius: 50%;
}

@keyframes rotate {
  0%    { transform: rotate(0deg); }
  100%  { transform: rotate(360deg); }
}
</style>
