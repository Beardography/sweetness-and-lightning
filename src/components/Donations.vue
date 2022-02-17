<template>
    <div class="donation">
        <h3>Donate</h3>
        <ul>
            <li>
                <strong> {{ currency1 }}: {{ address1 }} </strong>
            </li>
            <li>
                <strong> {{ currency2 }}: {{ address2 }} </strong>
            </li>
            <li>Brave users can donate BAT to this website.</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Donations",
    props: {
        currency1: String,
        address1: String,
        currency2: String,
        address2: String,
    },
};
</script>

<style lang="scss" scoped>
.donation {
    text-align: left;
    margin-bottom: 3rem;
    background-color: brown;
    padding: 1rem;
    border-radius: 1rem;
    background-color: #f6cfcb;

    h3 {
        text-transform: unset;
        font-size: 1.5rem;
        letter-spacing: 1px;
    }

    ul li {
        list-style: disc;
        margin: 1rem 0 1rem 2rem;
    }
}
</style>