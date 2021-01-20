<template>
  <div v-if="inputData" :id="inputData.id" class="contact">
    <slot name="title">
      <h1 class="contact--title" v-text="inputData.title" />
    </slot>
    <slot name="list">
      <ul>
        <slot name="list-email">
          <li>
            <i class="fa fa-envelope" />
            <h3 class="contact--subtitle">Email</h3>
            <p class="contact--subtitle--paragraph" v-text="inputData.email" />
          </li>
        </slot>
        <slot name="list-phone">
          <li>
            <i class="fa fa-phone-square" />
            <h3 class="contact--subtitle">Phone</h3>
            <p class="contact--subtitle--paragraph" v-text="inputData.phone" />
          </li>
        </slot>
        <slot name="list-adress">
          <li>
            <i class="fa fa-location-arrow" />
            <h3 class="contact--subtitle">Adress</h3>
            <p class="contact--subtitle--paragraph" v-text="inputData.adress" />
          </li>
        </slot>
      </ul>
    </slot>
    <slot name="link">
      <a href="uploads/cve.pdf" download class="contact--link"
        >Download CV <span class="fa fa-cloud-download"
      /></a>
    </slot>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    inputData: {
      type: Object,
      default: () => {
        return {
          id: "#contact-section",
          title: "Title",
          email: "Mail",
          phone: "Phone",
          adress: "Adress"
        };
      }
    }
  },
  data() {
    return {};
  }
};
</script>
