<template>
    <div class="card">
        <div class="card-header">
            <!-- <img
                src="https://images.unsplash.com/photo-1614563637806-1d0e645e0940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80"
            /> -->
        </div>

        <div class="card-body">
            <h2>{{ title }}</h2>
            <small>Serves {{ servingSize }}</small>
            <p>{{ description }}</p>
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

<script>
    export default {
        props: {
            title: String,
            servingSize: String,
            description: String,
            src: String,
        },
    };
</script>
