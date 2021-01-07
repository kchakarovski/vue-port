<template>
  <div class="home">
    <slot name="title">
      <h3 class="home--title">Hello I'm</h3>
    </slot>
    <slot name="name">
      <h1 class="home--name">Krste Cakarovski</h1>
    </slot>
    <slot name="informations">
      <i class="fa fa-envelope"></i>
      <p class="home--mail">cakarovskidev@gmail.com</p>
      <i class="fa fa-phone-square"></i>
      <p class="home--number">+38978415644<pre></pre></p>
      <i class="fa fa-location-arrow"></i>
      <p class="home--adress">Macedonia, Nikola Karev 19 Resen</p>
    </slot>
    <slot name="links">
      <div class="home--links">
        <i class="fa fa-facebook-square" />
        <i class="fa fa-instagram" />
        <i class="fa fa-linkedin-square" />
        <i class="fa fa-twitter-square" />
      </div>
    </slot>
    <div class="home--img"></div>
    <img class="home--img--screenshot" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg">
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>
