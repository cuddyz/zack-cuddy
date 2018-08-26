<template>
  <section class="grid">
    <div class="nav">
      <ul class="flex">
        <li @click="currentTab = tabs.VUE" :class="{ 'active': currentTab === tabs.VUE }"><i class="fab fa-vuejs"></i></li>
        <li @click="currentTab = tabs.NODE" :class="{ 'active': currentTab === tabs.NODE }"><i class="fab fa-node-js"></i></li>
        <li @click="currentTab = tabs.ANGULAR" :class="{ 'active': currentTab === tabs.ANGULAR }"><i class="fab fa-angular"></i></li>
        <li @click="currentTab = tabs.HTML" :class="{ 'active': currentTab === tabs.HTML }"><i class="fab fa-html5"></i></li>
        <li @click="currentTab = tabs.CSS" :class="{ 'active': currentTab === tabs.CSS }"><i class="fab fa-css3-alt"></i></li>
        <li @click="currentTab = tabs.JS" :class="{ 'active': currentTab === tabs.JS }"><i class="fab fa-js"></i></li>
      </ul>
    </div>
    <skill-details :skill="currentTab"></skill-details>
  </section>
</template>

<script>
import SkillDetails from '@/components/main/SkillDetails.vue'
import { Languages } from '@/assets/Languages.js'

export default {
  name: 'Skills',
  data () {
    return {
      currentTab: '',
      tabs: Languages
    }
  },
  components: {
    SkillDetails
  },
  created() {
    this.currentTab = this.tabs.VUE
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/colors.scss';
  @import '../../assets/styles/breaks.scss';

  section {
    background-color: color(blueLight);
    justify-content: center;
    grid-template-areas:
      'nav'
      'details';
  }

  .nav {
    grid-area: nav;

    li {
      border-left: 3px solid color(blueDark);
      border-bottom: 3px solid color(blueDark);
      padding: 1rem;
      &:last-child {
        border-right: 3px solid color(blueDark);
      }
      &.active {
        border-bottom: 0px;
        background-color: color(blueDark);
      }
      &:hover {
        cursor: pointer;
        background-color: color(blueDark);
      }
      i {
        font-size: 4rem;
        color: color(grey);

        @media (max-width: breaks(phablet)) {
          font-size: 2rem;
        }

        @media (max-width: breaks(phone)) {
          font-size: 1.8rem;
        }
      }
    }
  }

  skill-details {
    grid-area: details
  }
</style>
