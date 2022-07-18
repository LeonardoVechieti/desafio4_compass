<template>
  <div class="cardBasic">
    <form class="form">
      <div class="inputWrapper">
        <Label labelName="Full Name *"/>
        <Span spanMsg="Please enter your Name" v-show="errorName"/>
        <Input class="input inputFullname" type="text" placeholder="Foo Bar" idInput="fullname" :value="valueFullName"/>
      </div>

      <div class="inputWrapper">
        <Label labelName="Nickname"/>
        <Input class="input inputNickname" type="text" placeholder="Juanito" idInput="nickname" :value="valueNickname"/>
      </div>

      <div class="emailPhone">
        <div class="containerEmail">
          <Label labelName="Email *" />
          <Span spanMsg="Please enter your Email" v-show="errorEmail" />
          <Input
            class="input"
            type="email"
            placeholder="foo@bar.com"
            idInput="email"
            :value="valueEmail"
          />
        </div>

        <div class="containerPhone">
          <Label labelName="Phone" />
          <Input
            class="input"
            type="number"
            placeholder="(83) 00000-0000"
            idInput="phone"
            :value="valuePhone"
          />
        </div>
      </div>

      <div class="containerLabel">
        <Label class="labelSize" labelName="Birthday *" />
        <Span spanMsg="Please enter your Age" v-show="errorAge" />
      </div>

      <div class="inputsAge">
        <div class="containerInputs">
          <Label labelName="Day" />
          <Input class="input" type="number" idInput="day" :value="valueDay" />
        </div>

        <div class="containerInputs">
          <Label labelName="Month" />
          <Input
            class="input"
            type="number"
            idInput="month"
            :value="valueMonth"
          />
        </div>

        <div class="containerInputs">
          <Label labelName="Year" />
          <Input
            class="input"
            type="number"
            idInput="year"
            :value="valueYear"
          />
        </div>

        <div class="containerInputs">
          <Label labelName="Age" />
          <Input
            class="input"
            type="number"
            idInput="age"
            :value="valueAge"
            disabled
          />
        </div>
      </div>

      <div class="containerCheckbox">
        <Input
          class="inputCheckbox"
          type="checkbox"
          idInput="checkbox"
          checked
        />
        <Label
          class="labelCheckbox"
          labelName="I accept the terms and privacy"
        />
        <Span spanMsg="Please confirm the terms" v-show="errorTerms" />
      </div>
      <div class="containerButton" @click="next">
        <ButtonComponent text="Next" classButton="Button ButtonNext" />
      </div>
    </form>
  </div>
</template>

<script>
import Label from "@/components/micro/Label/Label.vue";
import Input from "@/components/micro/Input/Input.vue";
import ButtonComponent from "@/components/micro/Button/ButtonComponent.vue";
import Span from "@/components/micro/Span/Span.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  // eslint-disable-next-line
  name: "Basic",
  components: {
    Label,
    Input,
    ButtonComponent,
    Span,
  },
  data() {
    return {
      valueFullName: "",
      valueNickname: "",
      valueEmail: "",
      valuePhone: "",
      valueDay: "",
      valueMonth: "",
      valueYear: "",
      valueAge: "",
      errorName: false,
      errorEmail: false,
      errorAge: false,
      errorTerms: false,
    };
  },
  created() {
    this.getData();
    const Title = document.getElementById("title");     
    Title.innerText = "Team Sign Up | Basic"; 
  },
  methods: {
    ...mapGetters([
      "getFullnameValid",
      "getEmailValid",
      "getCheckboxValid",
      "getAgeValid",
      "getFullname",
      "getNickname",
      "getEmail",
      "getPhone",
      "getDay",
      "getMonth",
      "getYear",
      "getAge",
    ]),
    ...mapActions([
      "setFullname",
      "setNickname",
      "setEmail",
      "setPhone",
      "setDay",
      "setMonth",
      "setYear",
      "setAge",
      "setCheckbox",
    ]),
    error() {
      if (this.getFullnameValid() === false) {
        this.errorName = true;
      } else {
        this.errorName = false;
      }
      if (this.getEmailValid() === false) {
        this.errorEmail = true;
      } else {
        this.errorEmail = false;
      }
      if (this.getCheckboxValid() === false) {
        this.errorTerms = true;
      } else {
        this.errorTerms = false;
      }
      if (this.getAgeValid() === false) {
        this.errorAge = true;
      } else {
        this.errorAge = false;
      }
    },
    next() {
      this.dinamicYear();
      this.error(); 
      this.$emit("next", "social");
    },
    dinamicYear() {
      /* eslint-disable */
      let dia = this.getDay();
      let mes = this.getMonth();
      let ano = this.getYear();
      var idade = this.idade(ano, mes, dia);
      if(idade > 5 && idade < 122){
        this.setAge(idade);
        this.valueAge = idade; 
      }
    },
    idade(ano_aniversario, mes_aniversario, dia_aniversario) {
      var d = new Date(),
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),
        ano_aniversario = +ano_aniversario,
        mes_aniversario = +mes_aniversario,
        dia_aniversario = +dia_aniversario,
        quantos_anos = ano_atual - ano_aniversario;
      if (
        mes_atual < mes_aniversario ||
        (mes_atual == mes_aniversario && dia_atual < dia_aniversario)
      ) {
        quantos_anos--;
      }
      return quantos_anos < 0 ? 0 : quantos_anos;
    },
    getData() {
      this.valueFullName = this.getFullname();
      this.valueNickname = this.getNickname();
      this.valueEmail = this.getEmail();
      this.valuePhone = this.getPhone();
      this.valueDay = this.getDay();
      this.valueMonth = this.getMonth();
      this.valueYear = this.getYear();
      this.valueAge = this.getAge();
    },
  },
};
</script>

<style lang="scss" scooped>
@import "./Basic.scss";
</style>
