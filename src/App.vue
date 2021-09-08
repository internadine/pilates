<template>
  <top class="mb-20"></top>
  <vorteile class="mb-20"></vorteile>
  <pricing class="mb-20"></pricing>
  <movie></movie>
  <footerbar></footerbar>

</template>


<script>
import top from "./components/Header.vue";
import vorteile from "./components/Vorteile.vue";
import pricing from "./components/Pricing.vue";
import movie from "./components/Video.vue";
import footerbar from "./components/Footer.vue";

export default {
  setup() {},
  components: {
    top,
    vorteile,
    pricing,
    footerbar,
    movie,
  },
};
</script>