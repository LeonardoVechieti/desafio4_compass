<template>
  <div>
    <Label labelName="usuario"/>
    <Input
      type="text"
      idInputs="user"
      placeholder="Usuário"
      class="input"
      labelName="Usuário"
    />
  </div>
</template>

<script>
import Input from "../../components/micro/Input/Input.vue";
import Label from "../../components/micro/Label/Label.vue";

export default {
  name: "PageSuccessTab",
  data() {
    return {};
  },
  components: {
    Input,
    Label,
  },
};
</script>

<style></style>
