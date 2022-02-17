<template>
    <header>
        <div class="logo">
            <router-link to="/">
                <img src="@/assets/logo.svg" />
                <h1>Sweetness &amp; Lightning</h1>
            </router-link>
        </div>

        <nav>
            <router-link to="/"> Home </router-link>
            <router-link to="/updates"> Updates </router-link>
            <router-link to="/donate"> Donate </router-link>
        </nav>
    </header>
    <router-view />
</template>



<script>
export default {
    name: "Header",
};
</script>



<style lang="scss" scoped>
header {
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1rem 1rem 0 0;
    border-bottom: 2px solid #dd6871;
    margin-bottom: 1rem;

    a {
        text-decoration: none;
        color: #dd6871;
    }

    .logo {
        img {
            height: 3rem;
            width: auto;
            display: inline-block;
            margin-right: 0.5rem;
            vertical-align: middle;
        }

        h1 {
            display: inline-block;
            vertical-align: middle;
            font-weight: 600;
            font-size: 1.5rem;
        }
    }

    nav {
        text-align: right;

        a {
            color: #dd6871;
            display: inline-block;
            margin: 0 0.5rem;
            font-size: 1.2rem;
            font-weight: 600;
            vertical-align: middle;

            &:hover {
                color: #60bfd2;
            }
        }
    }
}

@media (min-width: 319px) and (max-width: 576px) {
    header {
        .logo {
            a {
                img {
                    width: 60px;
                    width: auto;
                }

                h1 {
                    display: none;
                }
            }
        }

        nav {
            a {
                margin: 0 0.125rem;
                font-size: 1.15rem;
            }
        }
    }
}
</style>