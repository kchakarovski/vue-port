<template>
  <div v-if="homeInputData" class="homeview">
    <wrapper
      @clickedIcon="clickedIcon"
      @clickedArrow="clickedArrow"
      :inputData="homeInputData.wrapper"
    >
      <template v-slot:common>
        <common
          :inputData="homeInputData.wrapper.common"
          @clickedIcon="clickedIcon"
          @clickedArrow="clickedArrow"
        >
          <template v-slot:name>
            <vue-typed-js class="home--name" :strings="['Крсте Чакаровски']" :loop="true" :backDelay="2000" :typeSpeed="90" :backSpeed="110">
              <h2 class="typing"></h2>
            </vue-typed-js>
          </template>
        </common>
      </template>
    </wrapper>
  </div>
</template>

<script>
import Wrapper from "../components/Wrapper";
import Common from "../components/Common";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Wrapper,
    Common,
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
  },
};
</script>

<style>
</style>