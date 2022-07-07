<template>
  <div class="container-input">
    <label class="label">{{ labelName }}</label>
    <input
      :type="type"
      :class="classInputs"
      :id="idInputs"
      :placeholder="placeholder"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Input",
  props: {
    type: {
      type: String,
      default: "text",
    },
    classInputs: {
      type: String,
      default: "inputs",
    },
    placeholder: {
      type: String,
      default: "",
    },
    idInputs: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    labelName: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scooped>
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
@import "./Input.scss";
</style>
