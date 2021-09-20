<template>
  <Header />
  <Vorteile class="mt-20" />
  <Pricing class="mt-20" />
  <Video />
  <Footer />

</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Pricing from "../components/Pricing.vue";
import Testemonial from "../components/Testemonial.vue";
import Video from "../components/Video.vue";
import Vorteile from "../components/Vorteile.vue";
export default {
  components: {
    Footer,
    Header,
    Pricing,
    Testemonial,
    Video,
    Vorteile,
  },
  setup() {},
};
</script>