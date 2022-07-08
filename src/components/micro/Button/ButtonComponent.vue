<template>
  <button :class="classButton">{{ text }}</button>
</template>

<script>

export default {
    name: "ButtonComponent",
    props: {
        text: {
            type: String,
            default: ""
        },
        classButton: {
            type: String
        },
    }
}
</script>

<style lang="scss" scoped>
@import './ButtonComponent.scss';
</style>