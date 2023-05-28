<template>
    <RouterLink to="/" class="logo">
        <font-awesome-icon icon="fa-solid fa-dumbbell"/>
        <span>Training Lab</span>
    </RouterLink>
</template>

<style scoped>
    .logo {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.5rem;
        white-space: nowrap;
    }

    .logo span {
        color: var(--color-text);
        font-family: var(--font-family-outfit);
        font-weight: 600;
    }
</style>