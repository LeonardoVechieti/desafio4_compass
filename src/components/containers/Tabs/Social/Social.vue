<template>
  <div class="cardSocial">
    <form class="formSocial">
      <div class="inputSocial">
        <Label labelName="LinkedIn" />
        <Input
          class="input"
          type="text"
          placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
          idInput="linkedin"
        />
      </div>
      <div class="inputSocial">
        <Label labelName="Github *" />
        <Span spanMsg="Please enter your GitHub Link" />
        <Input
          class="input"
          type="text"
          placeholder="https://github.com/foobar"
          idInput="github"
        />
      </div>
      <div class="containerSocialButton" @click="next" >
        <ButtonComponent text="Next" classButton="Button ButtonNext" />
      </div>
    </form>
  </div>
</template>

<script>
import Label from "@/components/micro/Label/Label.vue";
import Input from "@/components/micro/Input/Input.vue";
import ButtonComponent from "@/components/micro/Button/ButtonComponent.vue";
import Span from "@/components/micro/Span/Span.vue";
export default {
  // eslint-disable-next-line
  name: "Social",
  components: {
    Label,
    Input,
    ButtonComponent,
    Span,
  },
  methods: {
    next() {
      console.log("next in Social");
      this.$emit("next", "certificates");
    },
  },
};
</script>

<style lang="scss" scooped>
@import "./Social.scss";
</style>
