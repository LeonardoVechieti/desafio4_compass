<template>
  <div class="erro">
    <h1>Error 401</h1>
    <h2>Unauthorized access</h2>
    <h2>You will be redirected in  {{ time }} seconds...</h2>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Error401",
  data() {
    return {
      time: 10,
    };
  },
  methods: {
    redirect() {
      this.time--;
      if (this.time == 0) {
        this.$router.push("/");
      }
    },
  },
  mounted() {
    setInterval(() => {
      this.redirect();
    }, 1000);
  },
};
</script>

<style lang="scss" scooped>
@import "./Error401.scss";
</style>
