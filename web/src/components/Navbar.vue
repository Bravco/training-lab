<template>
    <nav id="navbar" class="navbar">
        <Logo/>
        <TextButton label="Sign In" :onClick="navigateToAuth"/>
    </nav>
</template>

<script setup>
    import router from "../router";
    import Logo from "../components/Logo.vue";
    import TextButton from "../components/TextButton.vue";

    function navigateToAuth() {
        router.push("/auth");
    };
</script>

<style scoped>
    .navbar {
        height: 4rem;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 2.85rem 5%;
        transition: background-color 300ms;
        z-index: 100;
    }
</style>