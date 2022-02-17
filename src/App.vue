<template>
    <div class="content">
        <Header />
        <Footer />
    </div>
</template>



<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {
        Header,
        Footer,
    },
};
</script>



<style lang="scss">
@font-face {
    font-family: "Pally";
    src: url("~@/assets/fonts/Pally-Variable.woff2") format("woff2"),
        url("~@/assets/fonts/Pally-Variable.woff") format("woff"),
        url("~@/assets/fonts/Pally-Variable.ttf") format("truetype");
    font-weight: 400 800;
}

#app {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    .content {
        border-radius: 1rem;
        background-color: #fff1e4;
        padding: 1rem;
    }

    main {
        width: 100%;
        padding-bottom: 2rem;
        min-height: 75vh;
    }
}
</style>