<template>
    <li class="plan-item">
        <div class="plan-section">
            <div v-if="plan.days" class="plan-indicators">
                <span>
                    <font-awesome-icon icon="fa-solid fa-calendar-day"/>
                    <p>{{ plan.days.length }}</p>
                </span>
                <span>
                    <font-awesome-icon icon="fa-solid fa-bolt"/>
                    <p>{{ volume }}</p>
                </span>
            </div>
            <IconButton icon="fa-ellipsis"/>
        </div>
        <div class="plan-section">
            <div class="text">
                <p class="plan-title">{{ plan.title }}</p>
                <p v-if="plan.description" class="plan-description">{{ plan.description }}</p>
            </div>
            <IconButton :onClick="() => selectPlan(plan.id)" icon="fa-angle-right"/>
        </div>
    </li>
</template>

<script setup>
    import IconButton from '../IconButton.vue';

    const props = defineProps({
        plan: {
            type: Object,
            default: {},
        },
        selectPlan: {
            type: Function,
            default: () => {},
        },
        volume: {
            type: Number,
            default: 0,
        },
    });
</script>

<style scoped>
    .plan-section {
        display: flex;
        justify-content: space-between;
    }

    .plan-section:first-child {
        align-items: flex-start;
    }

    .plan-section:last-child {
        align-items: flex-end;
    }

    .plan-indicators span {
        display: flex;
        align-items: center;
        gap: .5em;
    }

    .plan-indicators span :not(p) {
        color: var(--color-primary);
    }

    .plan-indicators, .text {
        display: grid;
        gap: .5em;
    }

    .plan-title {
        font-size: 1.65em;
    }

    .plan-description {
        font-weight: 600;
        color: var(--color-text-alt);
    }
</style>