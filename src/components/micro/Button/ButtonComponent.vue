<template>
<div class="containerButton">
    <img class="vector" src="@/assets/Vector.png">
    <button :class="classButton">{{ text }}</button>
</div>
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