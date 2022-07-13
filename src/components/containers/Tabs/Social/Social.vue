<template>
  <div class="card-social">
    <div class="forms">
      <Label labelName="LinkedIn" />
      <Input
        type="text"
        idInputs="linkedln"
        placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
        class="input"
      />
    </div>
    <div class="forms">
      <Label labelName="Github *" />
      <Input
        type="text"
        idInputs="github"
        placeholder="https://github.com/foobar"
        class="input"
      />
    </div>
  </div>
</template>

<script>
import Label from "@/components/micro/Label/Label.vue";
import Input from "@/components/micro/Input/Input.vue";

export default {
  // eslint-disable-next-line
  name: "Social",
  components: {
    Label,
    Input,
  },
};
</script>

<style lang="scss" scooped>
@import "./Social.scss";
</style>
