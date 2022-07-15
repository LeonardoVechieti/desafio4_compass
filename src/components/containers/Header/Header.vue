<template>
    <div class="headerContainer">
        <Texts type="text" class="headerText" msg="Forms"/>
        <Title type="h1" titleMsg="First Tab" v-show="tab=='first'"/>
        <Title type="h1" titleMsg="Second Tab" v-show="tab=='second'"/>
        <Title type="h1" titleMsg="Third Tab" v-show="tab=='third'"/>
        <Title type="h1" titleMsg="Success Tab" v-show="tab=='success'"/>
    </div>
</template>

<script>
import Texts from '@/components/micro/Texts/Texts.vue';
import Title from '@/components/micro/Title/Title.vue';

export default {
  // eslint-disable-next-line
  name: "Header",
  components:{
    Title,
    Texts,
  },
  props: {
    tab: {
      type: String,
      default: "first",
    },
  },
};
</script>

<style lang="scss" scooped>
@import "./Header.scss";
</style>