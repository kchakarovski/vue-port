<template>
  <div class="wrapper">
    <home @clickedIcon="clickedIcon" />
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
    Contact,
  },
  props: {
    inputData: {
      type: Object,
      default: () => {
        return {
          home: {
            id: "#home-section",
          },
          about: {
            id: "#about-section",
          },
          contact: {
            id: "#contact-section",
          },
          links: [
            {
              icon: '<i class="fa fa-instagram" />',
              href: "www.google.com",
            },
            {
              icon: '<i class="fa fa-instagram" />',
              href: "wwww.googl.com",
            },
            {
              icon: '<i class="fa fa-instagram" />',
              href: "www.google.com",
            },
          ],
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
