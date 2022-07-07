<template>
  <div class="title">
    <h1 class="nameClass" v-if="type === 'h1'">{{ titleMsg }}</h1>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Title",
  props: {
    type: {
      type: String,
      require: true,
    },
    nameClass: {
      type: String,
    },
    titleMsg: {
      type: String,
      default: "null",
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600;700&display=swap');
@import "./Title.scss";
</style>