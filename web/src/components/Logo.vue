<template>
    <RouterLink to="/" class="logo">
        <p>Training Lab</p>
    </RouterLink>
</template>

<style scoped>
    .logo {
        display: flex;
        align-items: center;
        gap: .5em;
    }

    .logo:hover {
        filter: opacity(100%);
    }

    .logo p {
        color: var(--color-text);
        font-family: var(--font-family-outfit);
        font-size: 1.5em;
        font-weight: bold;
    }
</style>