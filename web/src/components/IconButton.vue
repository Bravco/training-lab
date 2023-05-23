<template>
    <a @click.prevent="onClick" :class="['icon-button', backgroundColorVar]">
        <font-awesome-icon :icon="['fa-solid', icon]" :size="iconSize"/>
    </a>
</template>

<script setup>
    const props = defineProps({
        icon: {
            type: String,
            default: "fa-xmark",
        },
        iconSize: {
            type: String,
            default: "fa-lg",
        },
        backgroundColorVar: {
            type: String,
            default: "color60",
        },
        onClick: {
            type: Function,
            default: () => {},
        },
    });
</script>

<style scoped>
    .color30 {
        background-color: var(--color-30);
    }

    .color60 {
        background-color: var(--color-60);
    }

    .icon-button {
        width: 2.5em;
        height: 2.5em;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        transition: background-color 300ms;
    }

    .icon-button:hover {
        filter: none;
        background-color: var(--color-primary);
    }
</style>