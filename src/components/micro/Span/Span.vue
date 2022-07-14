<template>
    <span class="span">{{ spanMsg }}</span>
</template>

<script>
export default {
/* eslint-disable */
  name: "Span",
  props: {
     showSpan: {
      type: Boolean,
      default: false,
     },
    spanId: {
      type: String,
       default: "spanId",
    },
  },
};
</script>

<style lang="scss" scooped>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
@import "./Span.scss";
</style>