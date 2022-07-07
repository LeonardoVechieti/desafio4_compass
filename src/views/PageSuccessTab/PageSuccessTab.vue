<template>
  <div>
    <Input
      type="text"
      idInputs="user"
      classInputs="inputs"
      placeholder="Usuário"
      class="input"
      labelName="Usuário"
    />
  </div>
</template>

<script>
import Input from "../../components/micro/Input/Input.vue";

export default {
  name: "PageSuccessTab",
  data() {
    return {};
  },
  components: {
    Input,
  },
};
</script>

<style></style>
