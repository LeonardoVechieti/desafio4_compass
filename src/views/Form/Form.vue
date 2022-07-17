<template>
  <div>
    <Header tab="first" v-if="nav_basic===true" />
    <Header tab="second" v-if="nav_social===true" />
    <Header tab="third" v-if="nav_certificates===true" />
    <Header tab="success" v-if="nav_success===true" />

    <div class="main">
      <div class="card">
        <Title v-if="nav_success!==true" 
          type="h3"
          titleMsg="Team Sign Up"
          nameClass="title-card"
          class="title-card"
        />
        <Menu @nav="getNav" item="basic" v-show="nav_basic"/>
        <Menu @nav="getNav" item="social" v-show="nav_social" />
        <Menu @nav="getNav" item="certificates" v-show="nav_certificates" />
        <Basic v-show="nav_basic" @next="btnNext" />
        <Social v-show="nav_social" @next="btnNext" />
        <Certificates v-show="nav_certificates" @finish="success" />
        <Success v-if="nav_success===true" @resetPage="btnReturn"/>
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
import { mapGetters } from "vuex";

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
      val_fullname: null,
      val_email: null,
      val_checkbox: null,
      val_age: null,

    };
  },
  methods: {
    ...mapGetters(["getFullnameValid", "getEmailValid", "getCheckboxValid", "getAgeValid", "getGithubValid", "getTeamnameValid", "getInstitutionValid", "getGraduationValid"]),
    getNav(item) {
      switch (item) {
        case "basic":
          this.nav_basic = true;
          this.nav_social = false;
          this.nav_certificates = false;
          this.nav_success = false;
          break;
        case "social":
          this.nav_basic = false;
          this.nav_social = true;
          this.nav_certificates = false;
          this.nav_success = false;
          break;
        case "certificates":
          this.nav_basic = false;
          this.nav_social = false;
          this.nav_certificates = true;
          this.nav_success = false;
          break;
      }
    },
    success(item) {
      console.log("sucess in form: " + item);
      switch (item) {
        case "certificates":
          if(this.getTeamnameValid() === true && this.getInstitutionValid() === true && this.getGraduationValid() === true &&
          this.getFullnameValid()===true && this.getEmailValid()===true && this.getCheckboxValid()===true && this.getAgeValid()===true &&
          this.getGithubValid()===true) {
            this.nav_basic = false;
            this.nav_social = false;
            this.nav_certificates = false;
            this.nav_success = true;
          }
          break;
      }
    },
    btnNext(item) {
      console.log("btnNext in form: " + item);
      switch (item) {
        case "social":
          //inicio da validação da basic para o social
          if(this.getFullnameValid()===true && this.getEmailValid()===true && this.getCheckboxValid()===true && this.getAgeValid()===true){
            //se a validação for true, então vai para o social
            this.nav_basic = false;
            this.nav_social = true;
            this.nav_certificates = false;
            this.nav_success = false;
          }
          //console.log("val_fullname: " + this.getFullnameValid()); 
          //console.log("val_email: " + this.getEmailValid());
          //console.log("val_checkbox: " + this.getCheckboxValid());
          //console.log("val_age: " + this.getAgeValid());
          break;
        case "certificates":
          //inicio da validação do social para o certificates
          if(this.getGithubValid()===true){
            //se a validação for true, então vai para o certificates
            this.nav_basic = false;
            this.nav_social = false;
            this.nav_certificates = true;
            this.nav_success = false;
          }
          //console.log("val_github: " + this.getGithubValid());
          break;
      }
    },
    btnReturn(item) {
      console.log("btnReturn in form: " + item);
      switch (item) {
        case "basic":
          this.nav_basic = true;
          this.nav_social = false;
          this.nav_certificates = false;
          this.nav_success = false;
          break;
      }
    },
  },
};
</script>

<style lang="scss" scooped>
@import "./Form.scss";
</style>
