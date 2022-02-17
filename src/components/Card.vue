<template>
    <div class="card" v-for="recipe in allRecipes" :key="recipe">
        <router-link to="/recipes">
            <div class="card-header">
                <img :src="recipe.image" :alt="recipe.name" />
            </div>

            <div class="card-body">
                <h3>{{ recipe.name }}</h3>
                <small>{{ recipe.servings }}</small>
                <p>{{ recipe.description }}</p>
            </div>

            <div class="card-footer">
                <small>
                    <ul>
                        <li v-for="tag in recipe.tags" :key="tag">
                            <router-link to="/donate">{{ tag }}</router-link>
                        </li>
                    </ul>
                </small>
            </div>
        </router-link>
    </div>
</template>



<script>
import { ref } from "vue";
import recipes from "@/data/recipes.js";

export default {
    name: "Card",
    props: {
        name: String,
        volumeNumber: Number,
        recipeNumber: Number,
        servings: String,
        ingredients: Array,
        steps: Array,
        description: String,
        favorite: Boolean,
        tags: Array,
        points: Array,
        emoji: String,
        image: String,
    },
    setup() {
        const allRecipes = ref(recipes);

        return { allRecipes };
    },
};
</script>



<style lang="scss" scoped>
.card {
    width: 350px;
    height: auto;
    border-radius: 0.75rem;
    background-color: #f6cfcb;
    transition-duration: 250ms;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;

    &:hover {
        box-shadow: 0px 0px 20px #eca098;
        transition-duration: 250ms;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .card-header {
        img {
            width: 100%;
            height: auto;
            display: inline-block;
            mix-blend-mode: multiply;
            border-bottom: 1px solid #1f1f1f;
        }
    }

    .card-body {
        margin: 0.5rem 0;
        height: 120px;
        padding: 0 1rem;
        overflow: hidden;
        text-overflow: ellipsis;

        h3 {
            margin-bottom: 0.5rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-family: "Pally", sans-serifs;
        }

        small {
            letter-spacing: 1px;
            text-transform: uppercase;
            font-weight: bold;
            color: gray;
        }

        p {
            margin-top: 0.5rem;
            line-height: 1.2;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }
    }

    .card-footer {
        padding: 0.75rem 1rem;
        border-top: 1px solid #1f1f1f;

        ul {
            list-style: none;

            li {
                display: inline-block;
                margin-right: 0.25rem;
                font-weight: bold;
                color: #dd6871;

                &:hover {
                    color: blue;
                    text-decoration: underline;
                }

                &::after {
                    content: ",";
                }

                &:last-of-type {
                    &::after {
                        content: none;
                        margin-right: 0;
                    }
                }
            }
        }
    }
}

@media (min-width: 578px) and (max-width: 768px) {
    .card {
        width: 300px;
    }
}

@media (min-width: 769px) and (max-width: 992px) {
    .card {
        width: 298px;
    }
}

@media (min-width: 993px) and (max-width: 1200px) {
    .card {
        width: 350px;
    }
}
</style>