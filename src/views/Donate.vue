<template>
    <main class="updates">
        <Donations
            currency1="ETH"
            address1="0xEA62640B85E12CF4dBCA5cCF3C4055144246f7c3"
            currency2="BTC"
            address2="1NtYRfzgkUeMbGzQ3nfHDJNBohBthasJYy"
        />
    </main>
</template>

<script>
import Donations from "@/components/Donations.vue";

export default {
    name: "Donate",
    components: {
        Donations,
    },
};
</script>

<style lang="scss" scoped>
</style>