import Vue from "vue";

Vue.mixin({
  methods: {
    clickedArrow() {
      document.getElementById("app").scrollIntoView({
        behavior: "smooth"
      });
    },
    clickedIcon(redirect) {
      window.location.href = redirect;
    },
    clickedProject(redirect) {
      alert("clickedProject Alert", redirect);
    }
  }
});