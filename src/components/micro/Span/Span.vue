<template>
<div class="containerSpan">
  <span class="span" :id="spanId">{{spanMsg}}</span>
</div>
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
    spanMsg: {
      type: String,
      default: "null",
    },
  },
};



</script>

<style lang="scss" scooped>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
@import "./Span.scss";
</style>