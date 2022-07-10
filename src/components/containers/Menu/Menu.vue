<template>
  <div class="menu-flex">
    <div class="nav-basic" v-show="nav_basic">
      <Texts type="text" textClass="nav" msg="Basic" />
    </div>

    <div class="nav-basic-at" v-show="nav_basic_at">
      <Texts type="text" textClass="nav" msg="Basic" />
    </div>

    <div class="menu-social" v-show="nav_social">
      <Texts type="text" textClass="nav" msg="Social" />
    </div>

    <div class="menu-social-at" v-show="nav_social_at">
      <Texts type="text" textClass="nav" msg="Social" />
    </div>

    <div class="menu-certificates" v-show="nav_certificates">
      <Texts type="text" textClass="nav" msg="Certificates" />
    </div>

    <div class="menu-certificates-at" v-show="nav_certificates_at">
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
  methods: {},
};
</script>

<style scoped>
.menu-flex {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 400px;
  height: 100%;
  font-family: "Nunito";
}
.nav-basic {
  width: 33%;
}
.nav-basic-at {
  width: 33%;
  border-bottom: 4px solid;
  border-bottom-color: blue;
}
.menu-social {
  width: 33%;
  
  
}
.menu-social-at {
  width: 33%;
    border-bottom: 4px solid;
  border-bottom-color: blue;
}

.menu-certificates {
  width: 33%;
  
}
.menu-certificates-at {
  width: 33%;
    border-bottom: 4px solid;
  border-bottom-color: blue;
}
</style>
