<template>
  <div class="contact">
    <h1 class="contact--title">Contact Me</h1>
    <ul>
      <li>
        <i class="fa fa-envelope"></i>
        <h3 class="contact--subtitle">Email</h3>
        <p class="contact--subtitle--paragraph">cakarovskidev@gmail.com</p>
      </li>
      <li>
        <i class="fa fa-phone-square"></i>
        <h3 class="contact--subtitle">Phone</h3>
        <p class="contact--subtitle--paragraph">+38978415644</p>
      </li>
      <li>
        <i class="fa fa-location-arrow"></i>
        <h3 class="contact--subtitle">Adress</h3>
        <p class="contact--subtitle--paragraph">
          Macedonia, Nikola Karev 19 Resen
        </p>
      </li>
    </ul>
    <a href="uploads/cve.pdf" download class="contact--link"
      >Download CV <span class="fa fa-cloud-download"></span
    ></a>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {};
  },
};
</script>
