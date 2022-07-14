<template>
  <div class="cardCertificates">
    <form id="formCertificates">
      <Label labelName="Certificates" />
      <div>
        <Input class="input" id="inputCertificates" type="text" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" />
      </div>

      <div class="buttonCertificate">
        <Button class="button buttonSelect" type="button" text="Certificates" />
        <ButtonMore bttnMsg="More" />
      </div>

      <Label labelName="Team Name *" />
      <div>
        <Input class="input inputTeam" type="text" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" />
      </div>

      <Label labelName="Institution *" />
      <div>
        <Input class="input inputInstitution" type="text" placeholder="Universidade de Passo Fundo" />
      </div>

      <Label labelName="Graduation *" />
      <div>
        <Input class="input inputGraduation" type="text" placeholder="Ciências da Computação" />
      </div>

      <div class="buttonFinishContainer">
        <Button class="Button ButtonFinish" type="button" text="Finish"/>
      </div>
    </form>
  </div>
</template>

<script>
import Input from '@/components/micro/Input/Input.vue';
import Label from '@/components/micro/Label/Label.vue';
import Button from '@/components/micro/Button/ButtonComponent.vue';
import ButtonMore from '@/components/micro/ButtonMore/ButtonMore.vue'
export default {
/* eslint-disable */ 
  name: "Certificates",
  components:{
    Input,
    Label,
    Button,
    ButtonMore
},
};
</script>

<style lang="scss" scooped>
@import "./Certificates.scss";
</style>