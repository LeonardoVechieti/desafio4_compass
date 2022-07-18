<template>
  <div class="cardCertificates">
    <form id="formCertificates">
      <div class="inputWrapper">
        <Label labelName="Certificates" />
        <Input
          class="input"
          id="inputCertificates"
          type="text"
          placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
          idInput="certificates"
          :value="valueCertificates"
        />
      </div>

      <div class="buttonCertificate">
        <ButtonCertificates />
        <ButtonMore />
      </div>

      <div class="inputWrapper">
        <Label labelName="Team Name *" />
        <Span spanMsg="Please enter your team name" v-show="errorTeamName"/>
        <Input
          class="input inputTeam"
          type="text"
          placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
          idInput="teamname"
          :value="valueTeamName"
        />
      </div>

      <div class="inputWrapper">
        <Label labelName="Institution *" />
        <Span spanMsg="Please enter your Institution" v-show="errorInstitution"/>
        <Input
          class="input inputInstitution"
          type="text"
          placeholder="Universidade de Passo Fundo"
          idInput="institution"
          :value="valueInstitution"
        />
      </div>
      
      <div class="inputWrapper">
        <Label labelName="Graduation *" />
        <Span spanMsg="Please enter your Graduation" />
        <Input
          class="input inputGraduation"
          type="text"
          placeholder="Ciências da Computação"
          idInput="graduation"
          :value="valueGraduation"
        />
      </div>

      <div class="buttonFinishContainer" @click="finish" >
        <Button classButton="Button ButtonFinish" type="button" text="Finish"  />
      </div>
    </form>
  </div>
</template>

<script>
import Input from "@/components/micro/Input/Input.vue";
import Label from "@/components/micro/Label/Label.vue";
import Button from "@/components/micro/Button/ButtonComponent.vue";
import ButtonMore from "@/components/micro/ButtonMore/ButtonMore.vue";
import ButtonCertificates from "@/components/micro/ButtonCertificates/ButtonCertificates.vue";
import Span from "@/components/micro/Span/Span.vue";
import { mapGetters } from "vuex";
export default {
  /* eslint-disable */
  name: "Certificates",
  components: {
    Input,
    Label,
    Button,
    ButtonMore,
    ButtonCertificates,
    Span,
  },
  data() {
    return {
      errorTeamName: false,
      errorInstitution: false,
      errorGraduation: false,
      valueCertificates: "",
      valueTeamName: "",
      valueInstitution: "",
      valueGraduation: "",
    };
  },
  created() {
    this.getData()
    const Title = document.getElementById("title");     
    Title.innerText = "Team Sign Up | Certificates"; 
  },
  methods: {
    ...mapGetters(["getTeamnameValid", "getInstitutionValid", "getGraduationValid", "getCertificates", "getTeamname", "getInstitution", "getGraduation"]),
    error() {
      if (this.getTeamnameValid() === false) {
        this.errorTeamName = true;
      } else {
        this.errorTeamName = false;
      }
      if (this.getInstitutionValid() === false) {
        this.errorInstitution = true;
      } else {
        this.errorInstitution = false;
      }
      if (this.getGraduationValid() === false) {
        this.errorGraduation = true;
      } else {
        this.errorGraduation = false;
      }
    },
    finish() {
      this.error();
      this.$emit("finish", "certificates");
    },
    getData() {
      this.valueCertificates = this.getCertificates();
      this.valueTeamName = this.getTeamname();
      this.valueInstitution = this.getInstitution();
      this.valueGraduation = this.getGraduation();
    },
  },
};
</script>

<style lang="scss" scooped>
@import "./Certificates.scss";
</style>
