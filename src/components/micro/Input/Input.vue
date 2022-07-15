<template>

    <input class="inputs"
      :type="type"
      :id="idInput"
      :placeholder="placeholder"
      :value="value"
      @input="getValue"
    />

</template>

<script>
import { mapActions } from "vuex";
export default {
  // eslint-disable-next-line
  name: "Input",
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    idInput: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    ...mapActions(["setFullname", "setNickname", "setEmail", "setPhone", "setDay","setMonth", "setYear", "setAge", "setCheckbox","setLinkedin", "setGithub", "setCertificates", "setTeamname", "setInstitution", "setGraduation", "setLocalStorage"]),
    getValue(e){
      if(this.idInput === "fullname"){
        this.setFullname(e.target.value);
      } 
      if(this.idInput === "nickname"){
        this.setNickname(e.target.value);
      }
      if(this.idInput === "email"){
        this.setEmail(e.target.value);
      }
      if(this.idInput === "phone"){
        this.setPhone(e.target.value);
      }
      if(this.idInput === "day"){
        this.setDay(e.target.value);
      }
      if(this.idInput === "month"){
        this.setMonth(e.target.value);
      }
      if(this.idInput === "year"){
        this.setYear(e.target.value);
      }
      if(this.idInput === "age"){
        this.setAge(e.target.value);
      }
      if(this.idInput === "checkbox"){
        if (e.target.checked) {
          this.setCheckbox(true);
          //console.log("checked");
          this.setLocalStorage(true);
      } else {
          this.setCheckbox(false);
          //console.log("unchecked");
          this.setLocalStorage(false);
      }
      }
      if(this.idInput === "linkedin"){
        this.setLinkedin(e.target.value);
      }
      if(this.idInput === "github"){
        this.setGithub(e.target.value);
      }
      if(this.idInput === "certificates"){
        this.setCertificates(e.target.value);
      }
      if(this.idInput === "teamname"){
        this.setTeamname(e.target.value);
      }
      if(this.idInput === "institution"){
        this.setInstitution(e.target.value);
      }
      if(this.idInput === "graduation"){
        this.setGraduation(e.target.value);
      }
      
    }
  },
};
</script>

<style lang="scss" scooped>
@import "./Input.scss";
</style>
