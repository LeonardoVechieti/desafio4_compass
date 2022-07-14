<template>
    <div>
        <button class="buttonCertificates">
            <p>Certificates</p>
            <img src="@/assets/VectorCertificate.png" class="vectorCer" />
        </button>
    </div>
</template>

<script>
export default {
    name: "ButtonCertificates",
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

<style lang="scss" scooped>
@import "./ButtonCertificates.scss";
</style>