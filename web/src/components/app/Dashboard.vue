<template>
    <Header title="Dashboard"/>
    <div class="content">
        <PlanList v-if="selectedPlanId == null" :plans="plans" :select-plan="selectPlan" :total-plan-volume="totalPlanVolume"/>
        <DayList v-else :selected-plan-id="selectedPlanId" :total-workout-volume="totalWorkoutVolume"/>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { onSnapshot } from 'firebase/firestore';
    import { plansCollection } from '../../firebase';
    import Header from './Header.vue';
    import PlanList from './PlanList.vue';
    import DayList from "./DayList.vue";

    const plans = ref([]);

    const selectedPlanId = ref(null);

    function selectPlan(id) {
        selectedPlanId.value = id;
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

    onSnapshot(plansCollection, plansSnapshot => {
        let tmpPlans = [];
        plansSnapshot.forEach(planDoc => {
            tmpPlans.push(planDoc.data());
        });
        plans.value = tmpPlans;
    });
</script>

<style scoped>
    @import url("../../css/appPage.css");

    .content {
        flex: 1;
    }
</style>