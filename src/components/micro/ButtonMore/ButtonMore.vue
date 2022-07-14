<template>
    <div>
        <button class="buttonMore">
            <img src="@/assets/VectorMore.png" class="moreImg" />
            <p>More</p>
            <img src="@/assets/Vector.png" class="vectorImg" />
        </button>
    </div>
</template>

<script>
export default {
    name: "ButtonMore",
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
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
@import './ButtonMore.scss';
</style>