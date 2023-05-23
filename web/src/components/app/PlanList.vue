<template>
    <ul class="plan-list">
        <li v-for="(plan, index) in plans" :key="plan" class="plan-item">
            <div class="plan-section">
                <div v-if="plan.workouts" class="indicators">
                    <span>
                        <font-awesome-icon icon="fa-solid fa-calendar-day"/>
                        <p>{{ plan.workouts.length }}</p>
                    </span>
                    <span>
                        <font-awesome-icon icon="fa-solid fa-bolt"/>
                        <p>{{ totalPlanVolume(plan) }}</p>
                    </span>
                </div>
                <IconButton icon="fa-ellipsis"/>
            </div>
            <div class="plan-section">
                <div class="text">
                    <p class="plan-title">{{ plan.title }}</p>
                    <p v-if="plan.description" class="plan-description">{{ plan.description }}</p>
                </div>
                <IconButton :onClick="() => selectPlan(plan)" icon="fa-angle-right"/>
            </div>
        </li>
        <a class="plan-item">
            <span class="new-plan-button">
                <font-awesome-icon icon="fa-solid fa-plus" size="xl"/>
            </span>
        </a>
    </ul>
</template>

<script setup>
    import IconButton from '../IconButton.vue';

    const props = defineProps({
        plans: {
            type: Array,
            default: [],
        },
        selectPlan: {
            type: Function,
            defualt: () => {},
        },
        totalPlanVolume: {
            type: Function,
            default: () => {},
        },
    });
</script>

<style scoped>
    .plan-list {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, 24em);
        gap: 2em;
    }

    .plan-item {
        width: 100%;
        height: 18em;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding: 1.5em 2em 2.5em 2em;
        border-radius: 1em;
        background-color: var(--color-30);
    }

    .plan-item:last-child {
        align-items: center;
        justify-content: center;
    }

    .plan-item:last-child:hover .new-plan-button {
        color: var(--color-primary);
        border-color: var(--color-primary);
    }

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

    .indicators span {
        display: flex;
        align-items: center;
        gap: .5em;
    }

    .indicators span :not(p) {
        color: var(--color-primary);
    }

    .indicators, .text {
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

    .new-plan-button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
    }

    .new-plan-button {
        width: 4em;
        height: 4em;
        border: 2px solid var(--color-text);
        transition-property: color, border-color;
        transition-duration:  300ms;
    }
</style>