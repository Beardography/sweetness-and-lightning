<template>
    <footer>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/updates">Updates</router-link>
            <router-link to="/donate">Donate</router-link>
        </nav>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style lang="scss" scoped>
footer {
    width: 100%;
    border-top: 2px solid #dd6871;
    border-radius: 0 0 1rem 1rem;
    padding: 1rem 0;

    nav {
        text-align: center;

        a {
            display: inline-block;
            margin: 0 0.5rem;
            color: #dd6871;
            text-decoration: none;

            &:hover {
                color: #60bfd2;
            }
        }
    }
}
</style>