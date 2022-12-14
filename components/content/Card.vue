<template>
    <div class="card">
        <div class="card-header">
            <slot />
        </div>

        <div class="card-body">
            <h2><slot name="title" /></h2>
            <small>Serves <slot name="servingSize" /></small>
            <p><slot name="description" /></p>
        </div>

        <div class="card-footer">
            <small>
                <ul>
                    <li>tag 1</li>
                    <li>tag 2</li>
                    <li>tag 3</li>
                    <li>tag 4</li>
                </ul>
            </small>
        </div>
    </div>
</template>
