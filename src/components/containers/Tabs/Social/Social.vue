<template>
  <div>
    <form class="formSocial">
      <div>
        <Label labelName="LinkedIn" />
        <Input
          class="input"
          type="text"
          placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
          idInput="linkedin"
        />
      </div>
      <div>
        <Label labelName="Github *" />
        <Span spanMsg="Please enter your GitHub Link" v-show="errorGithub"/>
        <Input
          class="input"
          type="text"
          placeholder="https://github.com/foobar"
          idInput="github"
        />
      </div>
      <div class="containerSocialButton" @click="next" >
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
export default {
  // eslint-disable-next-line
  name: "Social",
  components: {
    Label,
    Input,
    ButtonComponent,
    Span,
  },
  data() {
    return {
      errorGithub: false,
    };
  },
  methods: {
    ...mapGetters(["getGithubValid"]),
    error() {
      if (this.getGithubValid() === false) {
        this.errorGithub = true;
      } else {
        this.errorGithub = false;
      }
    },
    next() {
      this.error();
      this.$emit("next", "certificates");
    },
  },
};
</script>

<style lang="scss" scooped>
@import "./Social.scss";
</style>
