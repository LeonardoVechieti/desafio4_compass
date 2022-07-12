<template>
  <div>
    <div class="card-basic">
      <div class="form">
        <Label labelName="Full Name *" />
        <Input
          type="text"
          idInputs="fullName"
          placeholder="Foo Bar"
          class="input"
        />
      </div>
      <div class="form">
        <Label labelName="Nickname" />
        <Input
          type="text"
          idInputs="nickName"
          placeholder="Juanito"
          class="input"
        />
      </div>
    </div>

    <Label labelName="Email *" />
    <Input type="email" idInputs="email" placeholder="foo@bar.com" />

    <Label labelName="Phone" />
    <Input type="tel" idInputs="phone" placeholder="(83 00000-0000)" />

    <Label labelName="Birthday" />
    <Input type="number" idInputs="day" placeholder="Day" />
    <Input type="number" idInputs="month" placeholder="Month" />
    <Input type="number" idInputs="year" placeholder="Year" />
    <Input type="number" idInputs="Age" placeholder="Age" />
  </div>
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

<style>
.card-basic {
    width: 90%;
    display: flex;
    justify-content: center;
    
}
.form {
  width: 50%;
  margin-top: 1em;
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
}
</style>
