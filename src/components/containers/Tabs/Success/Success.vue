<template>
  <div class="data">
    <p class="text">Your data has been sent successfully!</p>
    <p class="text">Full Name: {{ fullname }}</p>
    <p class="text">Email: {{ email }}</p>
    <p class="text">Birthday: {{ day }}/{{ month }}/{{ year }}</p>
    <p class="text">Age: {{ age }}</p>
    <p class="text">GitHub: {{ github }}</p>
    <p class="text">Certificates: {{ certificates }}</p>
    <p class="text">Team Name: {{ teamname }}</p>
    <p class="text">Institution: {{ institution }}</p>
    <p class="text">Graduation: {{ graduation }}</p>
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
      "setFullname",
      "setNickname",
      "setEmail",
      "setPhone",
      "setDay",
      "setMonth",
      "setYear",
      "setAge",
      "setGithub",
      "setLinkedin",
      "setCertificates",
      "setTeamname",
      "setInstitution",
      "setGraduation",
      "setLocalStorage",
    ]),
    resetPage() {
      this.setLocalStorage(false);
      this.resetData();
      this.$emit("resetPage", "basic");
    },
    resetData(){
      this.setFullname("");
      this.setNickname('');
      this.setEmail('');
      this.setPhone('');
      this.setDay('');
      this.setMonth('');
      this.setYear('');
      this.setAge('');
      this.setGithub('');
      this.setLinkedin('');
      this.setCertificates('');
      this.setTeamname('');
      this.setInstitution('');
      this.setGraduation('');
    }
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

<style lang="scss" scooped>
@import "./Success.scss";
</style>
