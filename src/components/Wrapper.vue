<template>
  <div class="wrapper">
    <home />
    <about />
    <contact />
  </div>
</template>

<script>
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default {
  name: "Wrapper",
  components: {
    Home,
    About,
    Contact
  },
  data() {
    return {};
  }
};
</script>
