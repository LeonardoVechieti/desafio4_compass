<template>
  <div class="cardBasic">
    <form class="form">
      <div>
        <Label labelName="Full Name *"/>
        <Span spanMsg="Please enter your Name" />
        <Input class="input inputFullname" type="text" placeholder="Foo Bar" idInput="fullname"/>
      </div>

      <div>
        <Label labelName="Nickname"/>
        <Input class="input inputNickname" type="text" placeholder="Juanito" idInput="nickname"/>
      </div>

      <div class="emailPhone">
        <div class="containerEmail">
          <Label labelName="Email *"/>
          <Span spanMsg="Please enter your Email" />
          <Input class="input" type="email" placeholder="foo@bar.com" idInput="email"/>
        </div>

        <div class="containerPhone">
          <Label labelName="Phone"/>
          <Input class="input" type="number" placeholder="(83) 00000-0000" idInput="phone"/>
        </div>
      </div>
  
      <div class="containerLabel">
        <Label class="labelSize" labelName="Birthday *"/>
        <Span spanMsg="Please enter your Age" />
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
        <Span spanMsg="Please confirm the terms" />
      </div>
    <div class="containerButton">
      <ButtonComponent text="Next" classButton="Button ButtonNext"/>
    </div>
    </form>
  </div>
</template>

<script>
import Label from "@/components/micro/Label/Label.vue";
import Input from "@/components/micro/Input/Input.vue";
import ButtonComponent from "@/components/micro/Button/ButtonComponent.vue";
export default {
// eslint-disable-next-line
  name: "Basic",
  components: {
    Label,
    Input,
    ButtonComponent,
  },
};
</script>

<style lang="scss" scooped>
@import "./Basic.scss";
</style>