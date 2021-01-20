<template>
  <div v-if="inputData" :id="navData.id" class="home">
    <div class="home--left">
      <slot name="title">
        <h3 class="home--title">Hello I'm</h3>
      </slot>
      <slot name="name">
        <h1 class="home--name">Krste Cakarovski</h1>
      </slot>
      <slot name="informations">
        <i class="fa fa-envelope" />
        <p class="home--mail">cakarovskidev@gmail.com</p>
        <i class="fa fa-phone-square" />
        <p class="home--number">+38978415644</p>
        <p>
          <i class="fa fa-location-arrow" />
        </p>
        <p class="home--adress">Macedonia, Nikola Karev 19 Resen</p>
      </slot>
      <div class="home--links">
        <div v-for="(value, key) in inputData" :key="key">
          <links :inputData="value" @clickedIcon="clickedIcon" />
        </div>
      </div>
    </div>
    <div class="home--right">
      <img
        class="home--img--screenshot"
        src="https://icodebreakers.org/blog/wp-content/uploads/2017/12/logo-maker-1.gif"
      />
    </div>
    <slot name="arrow">
      <div class="home--arrow" @click="toggleArrow()">
        <i class="fa fa-arrow-up" />
      </div>
    </slot>
  </div>
</template>

<script>
import Links from "./Links";

export default {
  name: "Common",
  components: {
    Links
  },
  props: {
    navData: {
      type: Object,
      default: () => {
        return {
          id: "#home-section"
        };
      }
    },
    inputData: {
      type: Array,
      default: () => {
        return {
          links: {
            icon: '<i class="fa fa-facebook-square" />',
            href: "/"
          }
        };
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    clickedIcon(redirect) {
      this.$emit("clickedIcon", redirect);
    },
    toggleArrow(scroll) {
      this.$emit("clickedArrow", scroll);
    }
  }
};
</script>
