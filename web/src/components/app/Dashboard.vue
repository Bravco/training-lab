<template>
    <Header :title="selectedPlan ? selectedPlan.title : 'Dashboard'"/>
    <div class="content">
        <ul v-if="selectedPlan == null" class="plan-list">
            <li v-for="(plan, index) in plans" :key="index" class="plan-item">
                <div class="plan-section">
                    <div v-if="plan.workouts" class="indicators">
                        <span>
                            <font-awesome-icon icon="fa-solid fa-calendar-day"/>
                            <p>{{ plan.workouts.length }}</p>
                        </span>
                        <span>
                            <font-awesome-icon icon="fa-solid fa-bolt"/>
                            <p>{{ totalVolume(plan) }}</p>
                        </span>
                    </div>
                    <a class="button">
                        <font-awesome-icon icon="fa-solid fa-ellipsis" size="lg"/>
                    </a>
                </div>
                <div class="plan-section">
                    <div class="text">
                        <p class="title">{{ plan.title }}</p>
                        <p v-if="plan.description" class="description">{{ plan.description }}</p>
                    </div>
                    <a @click.prevent="selectPlan(plan)" class="button">
                        <font-awesome-icon icon="fa-solid fa-angle-right" size="lg"/>
                    </a>
                </div>
            </li>
            <a class="plan-item">
                <span class="new-plan-button">
                    <font-awesome-icon icon="fa-solid fa-plus" size="xl"/>
                </span>
            </a>
        </ul>
        <ul v-else></ul>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import Header from './Header.vue';

    const plans = [
        {
            title: "My plan",
            description: "Description for my plan",
            workouts: [
                {
                    title: "My workout",
                    exercises: [
                        { title: "My exercise", volume: 5 },
                        { title: "Other exercise", volume: 4 },
                        { title: "Dummy exercise", volume: 3 },
                        { title: "Hard exercise", volume: 6 },
                    ],
                },
                { title: "Rest day" },
                {
                    title: "Serious workout",
                    exercises: [
                        { title: "Serious exercise", volume: 5 },
                        { title: "Other exercise", volume: 4 },
                        { title: "Hard exercise", volume: 6 },
                    ],
                },
                { title: "2nd rest day" },
            ],
        },
    ];

    const selectedPlan = ref(null);

    function selectPlan(plan) {
        selectedPlan.value = plan;
    }

    function totalVolume(plan) {
        let totalVolume = 0;
        plan.workouts.map(workout => {
            if (workout.exercises) {
                workout.exercises.map(exercise => {
                    totalVolume += exercise.volume;
                });
            }
        });
        return totalVolume;
    }
</script>

<style scoped>
    @import url("../../css/appPage.css");

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

    .title {
        font-size: 1.65em;
    }

    .description {
        font-weight: 600;
        color: var(--color-text-alt);
    }

    .button, .new-plan-button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
    }

    .button {
        background-color: var(--color-60);
        width: 2.5em;
        height: 2.5em;
        display: flex;
        margin-left: auto;
        transition: background-color 300ms;
    }

    .button:hover {
        filter: none;
        background-color: var(--color-primary);
    }

    .new-plan-button {
        width: 4em;
        height: 4em;
        border: 2px solid var(--color-text);
        transition-property: color, border-color;
        transition-duration:  300ms;
    }
</style>