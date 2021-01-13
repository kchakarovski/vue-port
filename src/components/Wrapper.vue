<template>
  <div v-if="homeInputData" class="wrapper">
    <common :inputData="homeInputData.wrapper" @clickedIcon="clickedIcon" />
    <about />
    <contact />
  </div>
</template>

<script>
import Common from "./Common";
import About from "./About";
import Contact from "./Contact";
import { homeData } from "../static/pages";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Wrapper",
  components: {
    Common,
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
