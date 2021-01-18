<template>
  <div v-if="homeInputData" class="homeview">
    <wrapper
      @clickedIcon="clickedIcon"
      @clickedArrow="clickedArrow"
      :inputData="homeInputData.wrapper"
    />
  </div>
</template>

<script>
import Wrapper from "../components/Wrapper";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Wrapper,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["homeInputData"]),
  },
  methods: {
    clickedIcon(redirect) {
      window.location.href = redirect;
    },
    clickedArrow() {
      this.$emit("clickedArrow");
    },
  },
};
</script>

<style>
</style>