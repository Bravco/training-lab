<template>
    <Header :title="selectedPlan ? selectedPlan.title : 'Dashboard'"/>
    <div class="content">
        <PlanList v-if="selectedPlan == null" :plans="plans" :select-plan="selectPlan" :total-plan-volume="totalPlanVolume"/>
        <DayList v-else :selected-plan="selectedPlan" :total-workout-volume="totalWorkoutVolume"/>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import Header from './Header.vue';
    import PlanList from './PlanList.vue';
    import DayList from "./DayList.vue";

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
                {},
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

    function totalPlanVolume(plan) {
        let totalVolume = 0;
        plan.workouts.map(workout => {
            totalVolume += totalWorkoutVolume(workout);
        });
        return totalVolume;
    }

    function totalWorkoutVolume(workout) {
        let totalVolume = 0;
        if (workout.exercises) {
            workout.exercises.map(exercise => {
                totalVolume += exercise.volume;
            });
        }
        return totalVolume;
    }
</script>

<style scoped>
    @import url("../../css/appPage.css");

    .content {
        flex: 1;
    }
</style>