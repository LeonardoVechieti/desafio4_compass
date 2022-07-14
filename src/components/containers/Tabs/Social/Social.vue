<template>
  <div>
    <form class="form">
      <Label labelName="LinkedIn" />
      <div>
        <Input
          class="input"
          type="text"
          placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
        />
      </div>

      <Label labelName="Github *" />
      <div>
        <Input
          class="input"
          type="text"
          placeholder="https://github.com/foobar"
        />
      </div>

      <div class="containerButton">
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
