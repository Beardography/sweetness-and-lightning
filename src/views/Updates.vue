<template>
    <main class="updates">
        <Feature
            date="test"
            title="This is a test"
            description="I hope this thing works"
        />
    </main>
</template>

<script>
import Feature from "@/components/Features.vue";

export default {
    name: "Updates",
    components: {
        Feature,
    },
};
</script>

<style lang="scss">
.updates {
    max-width: 800px;
    text-align: left;
    margin: 2rem auto;
}
</style>