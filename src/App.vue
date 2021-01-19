<template>
  <div id="app">
    <app-header
      @clickedNavigation="clickedNavigation"
      :inputData="navigationInputData"
    />
    <router-view @clickedArrow="clickedArrow" />
    <app-footer />
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import { navigation } from "./static/navigation";
import { homeData } from "./static/pages";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    AppHeader,
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
    ...mapActions(["updateNavigationData", "updateHomeData"]),
    getData() {
      this.updateNavigationData(navigation);
      this.updateHomeData(homeData);
    },
    clickedNavigation(scroll) {
      document.getElementById(scroll).scrollIntoView({ behavior: "smooth" });
    }
    // clickedIcon(redirect) {
    //   window.location.href = "http://www.google.com", redirect;
    // },
  },
};
</script>
<style lang="scss">
@import "assets/scss/application";
</style>
