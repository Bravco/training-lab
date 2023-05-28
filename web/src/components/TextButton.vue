<template>
    <button
        type="submit"
        :class="{outlined: isOutlined}" 
        :style="{fontSize: fSize}" 
        @click.prevent="onClick"
    >{{ label }}</button>
</template>

<script setup>
    const props = defineProps({
        label: {
            type: String,
            default: "Default",
        },
        isOutlined: {
            type: Boolean,
            default: false,
        },
        fSize: {
            type: String,
            default: "1rem",
        },
        onClick: {
            type: Function,
            default: () => {},
        },
    });
</script>

<style scoped>
    button {
        padding: .8rem 1.6rem;
        border-radius: 16rem;
        background-color: var(--color-primary);
        color: white;
        border: none;
        font-family: var(--font-family-outfit);
        font-size: 1.2rem;
        font-weight: 600;
        text-transform: uppercase;
        cursor: pointer;
    }

    .outlined {
        background: none;
        color: var(--color-text);
        border: 2px solid;
    }
</style>