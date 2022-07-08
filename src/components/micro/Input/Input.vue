<template>

    <input class="inputs"
      :type="type"
      :id="idInputs"
      :placeholder="placeholder"
      :value="value"
    />

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
  },
};
</script>

<style lang="scss" scooped>
@import "./Input.scss";
</style>
