<template>
  <div class="cardCertificates">
    <form id="formCertificates">
      <div>
        <Label labelName="Certificates" />
        <Input
          class="input"
          id="inputCertificates"
          type="text"
          placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
          idInput="certificates"
        />
      </div>

      <div class="buttonCertificate">
        <ButtonCertificates />
        <ButtonMore />
      </div>

      <div>
        <Label labelName="Team Name *" />
        <Span spanMsg="Please enter your team name" />
        <Input
          class="input inputTeam"
          type="text"
          placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
          idInput="teamname"
        />
      </div>

      <div>
        <Label labelName="Institution *" />
        <Span spanMsg="Please enter your Institution" />
        <Input
          class="input inputInstitution"
          type="text"
          placeholder="Universidade de Passo Fundo"
          idInput="institution"
        />
      </div>
      
      <div>
         <Label labelName="Graduation *" />
        <Span spanMsg="Please enter your Graduation" />
        <Input
          class="input inputGraduation"
          type="text"
          placeholder="Ciências da Computação"
          idInput="graduation"
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
  methods: {
    finish() {
      console.log("finish in Certificates");
      this.$emit("finish", "certificates");
    },
  },
};
</script>

<style lang="scss" scooped>
@import "./Certificates.scss";
</style>
