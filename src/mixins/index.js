import Vue from "vue";

Vue.mixin({
    methods: {
        clickedArrow() {
            document.getElementById("app").scrollIntoView({
                behavior: "smooth"
            });
        }
    },
})