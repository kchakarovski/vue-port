<template>
  <div class="projects">
    <h1 class="projects--title" v-text="inputData.title" />
    <transition-group name="fade" tag="div">
      <div
        class="projects--item"
        v-for="(value, key) in inputData.images"
        :key="key"
      >
        <img class="projects--img" :src="currentImg" :alt="inputData.tooltip" />
      </div>
    </transition-group>
    <div class="projects--arrows">
      <a class="fa fa-arrow-left projects--next" @click="nextProject()" />
      <a class="fa fa-arrow-right projects--prev" @click="prevProject()" />
    </div>
    <button
      class="projects--button"
      @click="projectRedirect(inputData.link)"
      v-text="inputData.btnText"
    />
  </div>
</template>

<script>
export default {
  name: "Projects",
  components: {},
  data() {
    return {};
  },
  props: {
    inputData: {
      type: Object,
      default: () => {
        return {
          title: "Title",
          images:
            "https://i.ibb.co/Kz48yyh/E-Developer-design-random-index-html-1.png",
          tooltip: "some tooltip",
          link: "/",
          btnText: "Project",
          currentIndex: 0,
        };
      },
    },
  },
  methods: {
    projectRedirect(url) {
      this.$emit("clickedProject", url);
    },
    nextProject() {
      this.inputData.currentIndex += 1;
    },
    prevProject() {
      this.inputData.currentIndex -= 1;
    },
  },
  computed: {
    currentImg() {
      return this.inputData.images[
        Math.abs(this.inputData.currentIndex) % this.inputData.images.length
      ];
    },
  },
};
</script>

<style>
</style>