<template>
    <div class="card-grid">
        <Card />
    </div>
</template>

<script>
// @ is an alias to /src
import Recipe from "@/components/Recipe.vue";
import Card from "@/components/Card.vue";

export default {
    name: "Home",
    components: {
        Recipe,
        Card,
    },
};
</script>


<style lang="scss" scoped>
.card-grid {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    gap: 2rem;
    margin: 2rem auto;
    padding: 1rem;
}

@media (min-width: 578px) and (max-width: 768px) {
    .card-grid {
        gap: 1rem;
    }
}

@media (min-width: 769px) and (max-width: 992px) {
    .card-grid {
        gap: 1rem;
    }
}

@media (min-width: 993px) and (max-width: 1200px) {
    .card-grid {
        gap: 2rem;
    }
}
</style>