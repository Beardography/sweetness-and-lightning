<template>
    <div>
        <Nav />
        <main class="home">
            <h1>Tester</h1>
            <div class="card-group">
                <ContentSlot>
                    <NuxtLink to="recipes/donabe_rice">
                        <Card
                            title="tester"
                            servingSize="4"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget mauris pharetra et ultrices neque."
                        />
                    </NuxtLink>

                    <NuxtLink to="recipes/miso_pork_soup">
                        <Card
                            title="recipe name"
                            servingSize="3"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget mauris pharetra et ultrices neque."
                        />
                    </NuxtLink>

                    <NuxtLink to="recipes/salisbury_steak">
                        <Card
                            title="soup"
                            servingSize="12"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget mauris pharetra et ultrices neque."
                        />
                    </NuxtLink>
                </ContentSlot>
            </div>
        </main>
    </div>
</template>
