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
    <Menu item="basic"/>
    <Menu item="social"/>
    <Menu item="certificates"/>
  </div>
</template>

<script>
import Input from "../../components/micro/Input/Input.vue";
import Label from "../../components/micro/Label/Label.vue";
import Menu from "../../components/containers/Menu/Menu.vue";

export default {
  name: "PageSuccessTab",
  data() {
    return {};
  },
  components: {
    Input,
    Label,
    Menu,
  },
};
</script>

<style></style>
