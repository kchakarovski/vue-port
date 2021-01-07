<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <app-header />
    <wrapper />
    <app-footer />
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader";
import Wrapper from "./components/Wrapper"
import AppFooter from "./components/AppFooter";
export default {
  components: {
    AppHeader,
    Wrapper,
    AppFooter,
  },

  name: "App",
  data() {
    return {};
  },
};
</script>
<style lang="scss">
@import "assets/scss/application";
</style>
