<template>
  <div class="cardBasic">
    <form class="form">
      <div>
        <Label labelName="Full Name *"/>
        <Span spanMsg="Please enter your Name" v-show="errorName"/>
        <Input class="input inputFullname" type="text" placeholder="Foo Bar" idInput="fullname"/>
      </div>

      <div>
        <Label labelName="Nickname"/>
        <Input class="input inputNickname" type="text" placeholder="Juanito" idInput="nickname"/>
      </div>

      <div class="emailPhone">
        <div class="containerEmail">
          <Label labelName="Email *"/>
          <Span spanMsg="Please enter your Email" v-show="errorEmail"/>
          <Input class="input" type="email" placeholder="foo@bar.com" idInput="email"/>
        </div>

        <div class="containerPhone">
          <Label labelName="Phone"/>
          <Input class="input" type="number" placeholder="(83) 00000-0000" idInput="phone"/>
        </div>
      </div>
  
      <div class="containerLabel">
        <Label class="labelSize" labelName="Birthday *"/>
        <Span spanMsg="Please enter your Age" v-show="errorAge" />
      </div>
      
      <div class="inputsAge">
        <div class="containerInputs">
          <Label labelName="Day"/>
          <Input class="input" type="number" idInput="day"/>
        </div>

        <div class="containerInputs">
          <Label labelName="Month"/>
          <Input class="input" type="number" idInput="month"/>
        </div>

        <div class="containerInputs">
          <Label labelName="Year"/>
          <Input class="input" type="number" idInput="year"/>
        </div>

        <div class="containerInputs">
          <Label labelName="Age"/>
          <Input class="input" type="number" idInput="age"/>
        </div>
      </div>

      <div class="containerCheckbox">
        <Input class="inputCheckbox" type="checkbox" idInput="checkbox"/>
        <Label class="labelCheckbox" labelName="I accept the terms and privacy"/>
        <Span spanMsg="Please confirm the terms" v-show="errorTerms"/>
      </div>
    <div class="containerButton" @click="next">
      <ButtonComponent text="Next" classButton="Button ButtonNext"/>
    </div>
    </form>
  </div>
</template>

<script>
import Label from "@/components/micro/Label/Label.vue";
import Input from "@/components/micro/Input/Input.vue";
import ButtonComponent from "@/components/micro/Button/ButtonComponent.vue";
import Span from "@/components/micro/Span/Span.vue";
import { mapGetters } from "vuex";
export default {
// eslint-disable-next-line
  name: "Basic",
  components: {
    Label,
    Input,
    ButtonComponent,
    Span,
  },
  data() {
    return {
      errorName: false,
      errorEmail: false,
      errorAge: false,
      errorTerms: false,
    };
  },
  methods: {
    ...mapGetters(["getFullnameValid", "getEmailValid", "getCheckboxValid", "getAgeValid"]),
    error() {
      if (this.getFullnameValid() === false) {
        this.errorName = true;
      } else {
        this.errorName = false;
      }
      if(this.getEmailValid() === false) {
        this.errorEmail = true;
      } else {
        this.errorEmail = false;
      }
      if(this.getCheckboxValid() === false) {
        this.errorTerms = true;
      } else {
        this.errorTerms = false;
      }
      if(this.getAgeValid() === false) {
        this.errorAge = true;
      } else {
        this.errorAge = false;
      }
    },
    next() {
      this.error();
      this.$emit("next","social");
    },

  }
};
</script>

<style lang="scss" scooped>
@import "./Basic.scss";
</style>