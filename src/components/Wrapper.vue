<template>
  <div class="wrapper">
    <home />
    <about />
    <skills />
    <contact />
  </div>
</template>

<script>
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

export default {
  name: "Wrapper",
  components: {
    Home,
    About,
    Skills,
    Contact,
  },
  data() {
    return {};
  },
};
</script>
