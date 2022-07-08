<template>
    <label class="label">{{ labelName }}</label>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Input",
  props: {
    labelName: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style lang="scss" scooped>
  @import "./Label.scss";
</style>
