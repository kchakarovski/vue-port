<template>
  <div v-if="inputData" :id="inputData.id" class="about">
    <div class="about--sectionleft">
      <img
        class="about--sectionleft--img"
        src="https://images.hdqwalls.com/download/small-memory-8k-2a-2932x2932.jpg"
      />
    </div>
    <div class="about--sectionright">
      <h1 class="about--title" v-text="inputData.title" />
      <p class="about--paragraph" v-html="inputData.paragraph" />
      <ul class="about--ul">
        <li>Html</li>
        <li>Css</li>
        <li>Vue</li>
      </ul>
      <p class="about--question" v-text="inputData.question" />
      <a class="about--link" href="uploads/cve.pdf" download
        >Download CV<span class="fa fa-cloud-download"
      /></a>
    </div>
    <div class="clr" />
  </div>
</template>
<script>
export default {
  name: "About",
  props: {
    inputData: {
      type: Object,
      default: () => {
        return {
          id: "#about-section",
          title:"About me",
          paragraph:
            "Paragraph",
          // language:"",
          question:"Do you want to know more about me?",
        };
      },
    },
  },
  data() {
    return {};
  },
};
</script>
