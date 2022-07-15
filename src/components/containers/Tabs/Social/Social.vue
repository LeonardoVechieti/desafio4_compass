<template>
  <div>
    <form class="formSocial">
      <div>
        <Label labelName="LinkedIn" />
        <Input
          class="input"
          type="text"
          placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
          idInput="linkedin"
        />
      </div>
      <div>
        <Label labelName="Github *" />
         <Span spanMsg="Please enter your GitHub Link" />
        <Input
          class="input"
          type="text"
          placeholder="https://github.com/foobar"
          idInput="github"
        />
      </div>
      <div class="containerSocialButton">
        <ButtonComponent text="Next" classButton="Button ButtonNext" />
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
  name: "Social",
  components: {
    Label,
    Input,
    ButtonComponent,
  },
};
</script>

<style lang="scss" scooped>
@import "./Social.scss";
</style>
