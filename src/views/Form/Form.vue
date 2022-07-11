<template>
  <div>
    <Header />
    <div class="main">
      <div class="card">
        <Title type="h3" titleMsg="Team Sign Up" nameClass="title-card" />
        <Menu @nav="getNav" />
        <Basic v-show="nav_basic" />
        <Social v-show="nav_social" />
        <Certificates v-show="nav_certificates" />
        <Success v-show="nav_success" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/containers/Header/Header.vue";
import Title from "@/components/micro/Title/Title.vue";
import Menu from "@/components/containers/Menu/Menu.vue";
import Basic from "@/components/containers/Tabs/Basic/Basic.vue";
import Social from "@/components/containers/Tabs/Social/Social.vue";
import Certificates from "@/components/containers/Tabs/Certificates/Certificates.vue";
import Success from "@/components/containers/Tabs/Success/Success.vue";

export default {
  // eslint-disable-next-line
  name: "Form",
  components: {
    Header,
    Title,
    Menu,
    Basic,
    Social,
    Certificates,
    Success,
  },
  data() {
    return {
      nav_basic: true,
      nav_social: false,
      nav_certificates: false,
      nav_success: false,
    };
  },
  methods: {
    getNav(item) {
      switch (item) {
        case "basic":
          this.nav_basic = true;
          this.nav_social = false;
          this.nav_certificates = false;
          break;
        case "social":
          this.nav_basic = false;
          this.nav_social = true;
          this.nav_certificates = false;
          break;
        case "certificates":
          this.nav_basic = false;
          this.nav_social = false;
          this.nav_certificates = true;
          break;
      }
    },
  },
};
</script>

<style lang="scss" scooped>
@import "./Form.scss";
</style>
