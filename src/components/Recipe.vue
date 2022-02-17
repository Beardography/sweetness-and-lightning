<template>
    <main class="recipe">
        <h1>{{ name }}</h1>
        <h3>{{ servings }}</h3>

        <article>
            <section class="ingredients">
                <h2>Ingredients</h2>
                <ul>
                    <li v-for="ingredient in ingredients" :key="ingredient">
                        {{ ingredient }}
                    </li>
                </ul>
            </section>

            <section class="steps">
                <h2>Steps</h2>
                <ol>
                    <li v-for="step in steps" :key="step">{{ step }}</li>
                </ol>
            </section>
        </article>
    </main>
</template>



<script>
import Card from "@/components/Card.vue";

export default {
    name: "Recipe",
    props: Card.props,
};
</script>



<style lang="scss" scoped>
main {
    padding-bottom: 2rem;
    min-height: 80vh;
}

.recipe {
    width: 100%;

    h1 {
        font-size: 2.5rem;
        font-weight: 600;
        text-align: center;
        margin: 2rem auto 1rem auto;
    }

    h2 {
        font-size: 2rem;
        text-align: center;
        padding-bottom: 0.75rem;
        margin-bottom: 1rem;
        letter-spacing: 2px;
        word-spacing: 1px;
        border-bottom: 2px solid #dd6871;
        color: #dd6871;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 400;
        text-align: center;
        margin-bottom: 2rem;
        text-transform: unset;
    }

    article {
        width: 90%;
        max-width: 1200px;
        text-align: left;
        display: flex;
        flex-direction: row;
        align-content: flex-start;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 4rem;
        margin: 0 auto;
        margin-top: 2rem;

        ul {
            list-style: none;
            margin-bottom: 2rem;

            &:last-of-type {
                margin-bottom: 0;
            }
        }

        ol {
            margin: 0 0 0 1.25rem;
            margin-bottom: 2rem;

            li {
                line-height: 1.5;
                margin-bottom: 1rem;
            }
        }

        ul li,
        ol li {
            margin-bottom: 0.75rem;
        }

        .ingredients,
        .steps {
            width: inherit;
            padding: 1rem;
            border-radius: 1rem;
            background-color: #f6cfcb;
            transition-duration: 250ms;
        }
    }
}
</style>