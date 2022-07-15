<template>
  <div class="cardCertificates">
    <form id="formCertificates">
      <Label labelName="Certificates" />
      <div>
        <Input class="input" id="inputCertificates" type="text" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" idInput="certificates" />
      </div>

      <div class="buttonCertificate">
        <ButtonCertificates />
        <ButtonMore />
      </div>

      <Label labelName="Team Name *" />
      <div>
        <Input class="input inputTeam" type="text" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" idInput="teamname" />
      </div>

      <Label labelName="Institution *" />
      <div>
        <Input class="input inputInstitution" type="text" placeholder="Universidade de Passo Fundo" idInput="institution"/>
      </div>

      <Label labelName="Graduation *" />
      <div>
        <Input class="input inputGraduation" type="text" placeholder="Ciências da Computação" idInput="graduation" />
      </div>

      <div class="buttonFinishContainer">
        <Button classButton="Button ButtonFinish" type="button" text="Finish"/>
      </div>
    </form>
  </div>
</template>

<script>
import Input from '@/components/micro/Input/Input.vue';
import Label from '@/components/micro/Label/Label.vue';
import Button from '@/components/micro/Button/ButtonComponent.vue';
import ButtonMore from '@/components/micro/ButtonMore/ButtonMore.vue'
import ButtonCertificates from '@/components/micro/ButtonCertificates/ButtonCertificates.vue'
export default {
/* eslint-disable */ 
  name: "Certificates",
  components:{
    Input,
    Label,
    Button,
    ButtonMore,
    ButtonCertificates
},
};
</script>

<style lang="scss" scooped>
@import "./Certificates.scss";
</style>