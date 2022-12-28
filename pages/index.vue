<template>
    <div>
        <Nav />
        <h1>All Recipes</h1>
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

                .card {
                    width: 350px;
                    height: 430px;
                    border-radius: 1rem;
                    background-color: #f6cfcb;
                    border: 2px solid #dd6871;

                    .card-header {
                        width: 100%;
                        height: 200px;
                        border-radius: 1rem 1rem 0 0;
                        overflow: hidden;

                        img {
                            width: 100%;
                            height: auto;
                            border-bottom: 2px solid #dd6871;
                            mix-blend-mode: multiply;
                        }
                    }

                    .card-body {
                        padding: 1rem;

                        h4 {
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            // width: 100%;
                            font-size: 1.5rem;
                            // color: green;
                            margin-bottom: 0.5rem;
                        }

                        h6 {
                            font-size: 1rem;
                            font-weight: 800;
                            text-transform: uppercase;
                            margin-bottom: 0.5rem;
                        }

                        p {
                            font-size: 1rem;
                            // color: blue;
                        }
                    }

                    .card-footer {
                        width: 100%;
                        height: 40px;
                        border-radius: 0 0 1rem 1rem;
                        border-top: 2px solid #dd6871;
                        // background-color: #dd6871;
                        color: #dd6871;
                        padding: 0rem 1rem;
                        display: flex;
                        justify-content: start;
                        align-items: center;
                        align-items: center;
                        font-size: 14px;
                        font-weight: 800;
                    }
                }
            }
        }
    }
</style>
