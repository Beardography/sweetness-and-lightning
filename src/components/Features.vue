<template>
    <div class="feature">
        <small> {{ date }} </small>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: "Feature",
    props: {
        date: String,
        title: String,
        description: String,
    },
};
</script>

<style lang="scss" scoped>
.feature {
    margin-bottom: 3rem;
    background-color: brown;
    padding: 1rem;
    border-radius: 1rem;
    background-color: #f6cfcb;

    small {
        letter-spacing: 1px;
        margin-bottom: 0.5rem;
        display: block;
        font-weight: 600;
    }

    h3 {
        text-transform: unset;
        font-size: 1.5rem;
        letter-spacing: 1px;
    }

    p {
        line-height: 1.4;
    }
}
</style>