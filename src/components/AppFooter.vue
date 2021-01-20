<template>
  <div class="footer">
    <h3 class="footer--title">
      Krste Cakarovski {{ currentYear }} &copy; All right reserved
    </h3>
    <a class="footer--link" href="#"><i class="fa fa-twitter-square"/></a>
    <a
      class="footer--link"
      href="https://www.linkedin.com/in/%D0%BA%D1%80%D1%81%D1%82%D0%B5-%D1%87%D0%B0%D0%BA%D0%B0%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8-7985701a0/"
      ><i class="fa fa-linkedin-square" />
    </a>
    <a class="footer--link" href="https://www.instagram.com/k.chakarovski/"
      ><i class="fa fa-instagram"
    /></a>
    <a class="footer--link" href="https://www.facebook.com/4aKarcHe"
      ><i class="fa fa-facebook-square"
    /></a>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>
