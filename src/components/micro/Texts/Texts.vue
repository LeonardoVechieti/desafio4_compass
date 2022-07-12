<template>
  <div :class="textContainer">
    <p type="text" :class="textClass">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Texts",
  props: {
    type: {
      type: String,
      require: true,
    },
    msg: {
      type: String,
      default: "null",
    },
    textClass: {
      type: String,
      default: "textClass",
    },
    textContainer: String,

  },
};
</script>


<style lang="scss" scooped>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
@import "./Texts.scss";
</style>