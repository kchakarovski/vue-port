<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <app-header
      @clickedNavigation="clickedNavigation"
      :inputData="navigationInputData"
    />
    <wrapper />
    <app-footer />
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader";
import Wrapper from "./components/Wrapper";
import AppFooter from "./components/AppFooter";
import { navigation } from "./static/navigation";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    AppHeader,
    Wrapper,
    AppFooter,
  },
  mounted() {
    this.getData();
  },

  name: "App",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["navigationInputData"]),
  },
  methods: {
    ...mapActions(["updateNavigationData"]),
    getData() {
      this.updateNavigationData(navigation);
    },
    clickedNavigation(scroll) {
      document.getElementById(scroll).scrollIntoView({ behavior: "smooth" });
    },
    // clickedIcon(redirect) {
    //   window.location.href = "http://www.google.com", redirect;
    // },
  },
};
</script>
<style lang="scss">
@import "assets/scss/application";
</style>
