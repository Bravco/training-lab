<template>
    <li class="plan-item">
        <div class="plan-section">
            <div class="plan-indicators">
                <span>
                    <font-awesome-icon icon="fa-solid fa-calendar-day"/>
                    <p>{{ plan.days ? plan.days.length : 0 }}</p>
                </span>
                <span>
                    <font-awesome-icon icon="fa-solid fa-bolt"/>
                    <p>{{ plan.days ? totalVolume : 0 }}</p>
                </span>
            </div>
            <IconButton icon="fa-trash-can"/>
        </div>
        <div class="plan-section">
            <div class="text">
                <input 
                    v-model="plan.title"
                    class="plan-title" 
                    type="text" maxlength="16" 
                    spellcheck="false" 
                    @input="event => updateTitle(event.target.value)"
                >
                <input 
                    v-model="plan.description"
                    class="plan-description" 
                    type="text" maxlength="32" 
                    spellcheck="false" 
                    @input="event => updateDescription(event.target.value)"
                >
            </div>
            <IconButton :onClick="() => selectPlan(plan.id)" icon="fa-angle-right"/>
        </div>
    </li>
</template>

<script setup>
    import { updateDoc } from 'firebase/firestore';
    import { planDoc } from '../../firebase';
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
        totalVolume: {
            type: Number,
            default: 0,
        },
    });

    function updateTitle(value) {
        updateDoc(planDoc(props.plan.id), {
            title: value,
        });
    }

    function updateDescription(value) {
        updateDoc(planDoc(props.plan.id), {
            description: value,
        });
    }
</script>

<style scoped>
    .plan-section:first-child {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .plan-section:last-child {
        display: grid;
        grid-template-columns: 17.5em 1fr;
        align-items: center;
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