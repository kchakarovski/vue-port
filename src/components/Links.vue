<template>
  <div class="links">
    <slot name="links">
      <div
        class="links--icon"
        v-html="inputData.icon"
        @click="toggleIconLink(inputData.href)"
      />
    </slot>
  </div>
</template>

<script>
export default {
  name: "Links",

  props: {
    inputData: {
      type: Object,
      default: () => {
        return {
          icon: '<i class="fa fa-facebook-square" />',
          href: "/",
        };
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    toggleIconLink(redirect) {
      this.$emit("clickedIcon", redirect);
    },
  },
};
</script>

<style>
</style>