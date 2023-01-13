<script setup>
    // export default {
    //     async asyncData({ $content }) {
    //         const recipes = await $content('recipes')
    //             .sortBy('recipeNumber')
    //             .limit(5)
    //             .fetch();

    //         return {
    //             recipes,
    //         };
    //     },
    // };
</script>

<template>
    <div>
        <Nav />
        <!-- <h1>All Recipes</h1> -->
        <main class="home">
            <ul>
                <ContentList path="/recipes/" v-slot="{ list }">
                    <li v-for="recipe in list" :key="recipe._path">
                        <NuxtLink :to="recipe._path">
                            <div class="card">
                                <div class="card-header">
                                    <img :src="recipe.image" />
                                </div>

                                <div class="card-body">
                                    <h4>
                                        {{ recipe.title }}
                                    </h4>
                                    <h6>{{ recipe.servings }}</h6>
                                    <p>{{ recipe.description }}</p>
                                </div>

                                <div class="card-footer">
                                    <ul>
                                        <li>
                                            {{ recipe.tags }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </NuxtLink>
                    </li>
                </ContentList>
            </ul>
        </main>
    </div>
</template>

<style lang="scss" scoped>
    ul {
        display: flex;
        gap: 2rem;
        list-style-type: none;
        flex-wrap: wrap;
        justify-content: center;

        li {
            a {
                text-decoration: none;
                color: inherit;
            }
        }
    }
</style>
