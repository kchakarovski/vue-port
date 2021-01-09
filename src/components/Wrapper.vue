<template>
  <div v-if="homeInputData" class="wrapper">
    <home :inputData="homeInputData.wrapper" @clickedIcon="clickedIcon" />
    <about />
    <contact />
  </div>
</template>

<script>
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { homeData } from "../static/pages";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Wrapper",
  components: {
    Home,
    About,
    Contact,
  },
  mounted() {
    this.getData();
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["homeInputData"]),
  },
  methods: {
    ...mapActions(["updateHomeData"]),
    getData() {
      this.updateHomeData(homeData);
    },
    clickedIcon(redirect) {
      window.location.href = redirect;
    },
  },
};
</script>
