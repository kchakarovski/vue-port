<template>
  <div v-if="inputData" class="wrapper">
    <common
      :inputData="inputData.common"
      @clickedIcon="clickedIcon"
      @clickedArrow="clickedArrow"
    />
    <about :inputData="inputData.about" />
    <contact :inputData="inputData.contact" />
  </div>
</template>

<script>
import Common from "./Common";
import About from "./About";
import Contact from "./Contact";

export default {
  name: "Wrapper",
  components: {
    Common,
    About,
    Contact,
  },
  props: {
    inputData: {
      type: Object,
      default: () => {
        return {
          common: [
            {
              icon: '<i class="fa fa-facebook-square" />',
              href: "/",
            },
            {
              icon: '<i class="fa fa-facebook-square" />',
              href: "/",
            },
          ],
          about: {
            id: "#about-section",
            title: "About me",
            paragraph: "Paragraph",
            // language:"",
            question: "Do you want to know more about me?",
          },
          contact: {
            id: "#contact-section",
            title: "Title",
            email: "Mail",
            phone: "Phone",
            adress: "Adress",
          },
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
    clickedArrow(scroll) {
      this.$emit("clickedArrow", scroll);
    },
  },
};
</script>
