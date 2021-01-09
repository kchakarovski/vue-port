<template>
  <div v-if="inputData" :id="inputData.id" class="about">
    <div class="about--sectionleft">
      <img
        class="about--sectionleft--img"
        src="https://images.hdqwalls.com/download/small-memory-8k-2a-2932x2932.jpg"
      />
    </div>
    <div class="about--sectionright">
      <h1 class="about--title">About me</h1>
      <p class="about--paragraph" v-html="paragraph" />
      <ul class="about--ul">
        <li>Html</li>
        <li>Css</li>
        <li>Vue</li>
      </ul>
      <p class="about--question">Do you want to know more about me?</p>
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
        };
      },
    },
  },
  data() {
    return {
      paragraph:
        "Hello, I'm Krste Cakarovski, I am a junior Frontend Developer. I am 20 years old, and I'm living in Resen. I'm always ready for new challenges, and new experiences, to go to progress, to train, to invest in myself, to achieve high performance in diﬀerent areas in which I can express all of my abilities and skills. I count that I could respond positively to every task and exercise because I am a persistent person, loyal, organized, and capable for teamwork from me you can expect serious commitment in its fulfillment. There is no doubt that I will face some difficulties in completing my new assignments, but that tasks will allow me to be persistent and responsible while solving them. I'm trying my best to do that. I'm always looking for new knowledge. So this is me! ",
    };
  },
};
</script>
