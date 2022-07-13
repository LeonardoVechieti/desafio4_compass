<template>
  <form class="form">
    <Label labelName="Full Name*"/>
    <div>
      <Input class="input inputFullname" type="text" placeholder="Foo Bar"/>
    </div>

    <Label labelName="Nickname"/>
    <div>
      <Input class="input inputNickname" type="text" placeholder="Juanito"/>
    </div>

    <Label labelName="Email *"/>
     <div>
      <Input class="input inputEmail" type="email" placeholder="foo@bar.com"/>
    </div>

    <Label labelName="Phone"/>
    <div>
      <Input class="input inputPhone" type="number" placeholder="(83) 00000-0000"/>
    </div>


  </form>
</template>

<script>
import Label from "@/components/micro/Label/Label.vue";
import Input from "@/components/micro/Input/Input.vue";

export default {
  // eslint-disable-next-line
  name: "Basic",
  components: {
    Label,
    Input,
  },
};
</script>

<style lang="scss" scooped>
  @import "./Basic.scss";
</style>
