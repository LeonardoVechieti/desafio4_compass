<template>
  <div class="menu-flex">
    <div class="nav-basic" v-show="nav_basic" @click="nav1()">
      <Texts type="text" textClass="nav" msg="Basic" />
    </div>

    <div class="nav-basic-at" v-show="nav_basic_at" @click="nav1()">
      <Texts type="text" textClass="nav" msg="Basic" />
    </div>

    <div class="menu-social" v-show="nav_social" @click="nav2()">
      <Texts type="text" textClass="nav" msg="Social" />
    </div>

    <div class="menu-social-at" v-show="nav_social_at" @click="nav2()">
      <Texts type="text" textClass="nav" msg="Social" />
    </div>

    <div class="menu-certificates" v-show="nav_certificates" @click="nav3()">
      <Texts type="text" textClass="nav" msg="Certificates" />
    </div>

    <div class="menu-certificates-at" v-show="nav_certificates_at" @click="nav4()">
      <Texts type="text" textClass="nav" msg="Certificates" />
    </div>
  </div>
</template>

<script>
import Texts from "@/components/micro/Texts/Texts.vue";
export default {
  // eslint-disable-next-line
  name: "Menu",
  data() {
    return {
      nav_basic: true,
      nav_basic_at: false,
      nav_social: true,
      nav_social_at: false,
      nav_certificates: true,
      nav_certificates_at: false,
    };
  },
  components: {
    Texts,
  },
  props: {
    item: {
      type: String,
      default: "basic",
    },
  },
  created() {
    switch (this.item) {
      case "basic":
        this.nav_basic = false;
        this.nav_basic_at = true;
        break;
      case "social":
        this.nav_social = false;
        this.nav_social_at = true;
        break;
      case "certificates":
        this.nav_certificates = false;
        this.nav_certificates_at = true;
        break;
    }
  },
  methods: {
    nav1() {
      this.nav_basic = false;
      this.nav_basic_at = true;
      this.nav_social = true;
      this.nav_social_at = false;
      this.nav_certificates = true;
      this.nav_certificates_at = false;
      this.$emit("nav", "basic");
    },
    nav2() {
      this.nav_basic = true;
      this.nav_basic_at = false;
      this.nav_social = false;
      this.nav_social_at = true;
      this.nav_certificates = true;
      this.nav_certificates_at = false;
        this.$emit("nav", "social");
    },
    nav3() {
      this.nav_basic = true;
      this.nav_basic_at = false;
      this.nav_social = true;
      this.nav_social_at = false;
      this.nav_certificates = false;
      this.nav_certificates_at = true;
        this.$emit("nav", "certificates");
    },

    
  
  },
};
</script>

<style lang="scss" scooped>
@import "./Menu.scss";
</style>