<template>
    <Header :title="selectedPlanTitle != null ? selectedPlanTitle : 'Dashboard'"/>
    <div class="content">
        <ul v-if="selectedPlanId == null" class="plan-list">
            <PlanTile 
                v-for="plan in plans" 
                :key="plan.id" :plan="plan" 
                :select-plan="selectPlan" 
                :total-volume="totalPlanVolume(plan)"
                class="plan-item"
            />
            <a @click.prevent="addPlan" class="plan-item">
                <span class="new-plan-button">
                    <font-awesome-icon icon="fa-solid fa-plus" size="xl"/>
                </span>
            </a>
        </ul>
        <DayList v-else :plan-id="selectedPlanId" :total-workout-volume="totalWorkoutVolume" :clear-selected-plan="clearSelectedPlan"/>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { onSnapshot, getDoc, addDoc, updateDoc } from 'firebase/firestore';
    import { plansCollection, planDoc } from '../../../firebase';
    import Header from '../Header.vue';
    import PlanTile from "./PlanTile.vue"
    import DayList from "./DayList.vue";

    const plans = ref([]);

    const selectedPlanId = ref(null);
    const selectedPlanTitle = ref(null);

    function addPlan() {
        addDoc(plansCollection, {
            title: "My plan",
            description: "My description",
        }).then(doc => {
            updateDoc(planDoc(doc.id), {
                id: doc.id,
            });
        });
    }

    function selectPlan(id) {
        selectedPlanId.value = id;

        getDoc(planDoc(id)).then(planSnapshot => {
            selectedPlanTitle.value = planSnapshot.data().title;
        });
    }

    function clearSelectedPlan() {
        selectedPlanId.value = null;
    }

    function totalPlanVolume(plan) {
        let totalVolume = 0;
        if (plan.days) {
            plan.days.map(day => {
                if (day.workouts) {
                    day.workouts.map(workout => {
                        totalVolume += totalWorkoutVolume(workout);
                    });
                }
            });
        }
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
    @import url("../../../css/appPage.css");

    .content {
        flex: 1;
    }

    .plan-list {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, 24rem);
        gap: 2rem;
    }

    .plan-item {
        width: 100%;
        height: 18rem;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding: 1.5rem 2rem 2.5rem 2rem;
        border-radius: 1rem;
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

    .new-plan-button {
        width: 4rem;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid var(--color-text);
        border-radius: 100%;
        transition-property: color, border-color;
        transition-duration:  300ms;
    }
</style>