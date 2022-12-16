<template>
    <div class="recipe">
        <div class="image">
            <ContentSlot :use="$slots.image" name="image" unwrap="p" />
        </div>

        <h1>
            <slot name="name" />
        </h1>

        <h4>
            Servings:
            <Contentslot :use="$slots.p" unwrap="p" />
        </h4>

        <div class="info">
            <div class="instructions">
                <div class="ingredients">
                    <h2>Ingredients</h2>
                    <slot name="ingredients" />
                </div>

                <div class="steps">
                    <h2>Steps</h2>
                    <slot name="steps" />
                </div>
            </div>
            <div class="points">
                <h4>Points</h4>
                <slot name="points" />
            </div>
        </div>
    </div>
</template>
