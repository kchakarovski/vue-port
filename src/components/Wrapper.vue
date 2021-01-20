<template>
  <div v-if="inputData" class="wrapper">
    <slot name="common">
      <common
        :inputData="inputData.common"
        @clickedIcon="clickedIcon"
        @clickedArrow="clickedArrow"
      />
    </slot>
    <about :inputData="inputData.about" />
      <div v-for="(value, key) in inputData.projects" :key="key">
      <projects :inputData="value" @clickedProject="clickedProject" />
      </div>
    <contact :inputData="inputData.contact" />
  </div>
</template>

<script>
import Common from "./Common";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default {
  name: "Wrapper",
  components: {
    Common,
    About,
    Projects,
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
          projects: [
            {
              title: "Title",
              images:
                "https://i.ibb.co/Kz48yyh/E-Developer-design-random-index-html-1.png",
              tooltip: "some tooltip",
              link: "/",
              btnText: "Project",
              currentIndex: 0,
            }
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
    clickedArrow(scroll) {
      this.$emit("clickedArrow", scroll);
    },
    clickedProject(redirect) {
      this.$emit("clickedProject", redirect);
    },
  },
};
</script>
