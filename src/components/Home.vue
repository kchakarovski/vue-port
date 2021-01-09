<template>
  <div v-if="inputData" :id="inputData.id" class="home">
    <div class="testleft">
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
      <links @clickedIcon="clickedIcon" />
    </div>
    <div class="testright">
      <div class="home--img"></div>
      <img
        class="home--img--screenshot"
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
      />
    </div>
  </div>
</template>

<script>
import Links from "./Links";

export default {
  name: "Home",
  components: {
    Links,
  },
  props: {
    inputData: {
      type: Object,
      default: () => {
        return {
          id: "#home-section",
        };
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    clickedIcon(redirect) {
      this.$emit("clickedIcon", redirect);
    },
  },
};
</script>
