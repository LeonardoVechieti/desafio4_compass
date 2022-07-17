<template>
  <div>
    <p>ola pagina success</p>
    <p>Nome: {{ fullname }}</p>
    <p>Email: {{ email }}</p>
    <p>Phone: {{ phone }}</p>
    <p>Day: {{ day }}</p>
    <p>Month: {{ month }}</p>
    <p>Year:{{ year }}</p>
    <p>Age: {{ age }}</p>
    <p>Git: {{ github }}</p>
    <p>Link: {{ linkedin }}</p>
    <div class="containerButton" @click="resetPage">
      <ButtonComponent text="Return" classButton="Button ButtonReturn" />
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/micro/Button/ButtonComponent.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  // eslint-disable-next-line
  name: "Success",
  data() {
    return {
      fullname: null,
      nickname: null,
      email: null,
      phone: null,
      day: null,
      month: null,
      year: null,
      age: null,
      github: null,
      linkedin: null,
      certificates: null,
      teamname: null,
      institution: null,
      graduation: null,
    };
  },
  components: {
    ButtonComponent,
  },
  methods: {
    ...mapGetters([
      "getFullname",
      "getNickname",
      "getEmail",
      "getPhone",
      "getDay",
      "getMonth",
      "getYear",
      "getAge",
      "getGithub",
      "getLinkedin",
      "getCertificates",
      "getTeamname",
      "getInstitution",
      "getGraduation",
    ]),
    ...mapActions([
      "setLocalStorage",
    ]),
    resetPage() {
      //console.log("reset");
      this.setLocalStorage(false);
      //this.emit("resetBasic");
      this.$emit("resetPage", "basic");
    },
  },
  created() {
    this.setLocalStorage(true);
    this.fullname = this.getFullname();
    this.fullname = this.getFullname();
    this.nickname = this.getNickname();
    this.email = this.getEmail();
    this.phone = this.getPhone();
    this.day = this.getDay();
    this.month = this.getMonth();
    this.year = this.getYear();
    this.age = this.getAge();
    this.github = this.getGithub();
    this.linkedin = this.getLinkedin();
    this.certificates = this.getCertificates();
    this.teamname = this.getTeamname();
    this.institution = this.getInstitution();
    this.graduation = this.getGraduation();
  },
};
</script>

<style></style>
