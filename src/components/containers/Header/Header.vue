<template>
    <div class="headerContainer">
        <Texts type="text" class="headerText" msg="Forms"/>
        <Title type="h1" titleMsg="First Tab"/>
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
};
</script>

<style lang="scss" scooped>
@import "./Header.scss";
</style>