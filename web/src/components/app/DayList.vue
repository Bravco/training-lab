<template>
    <ul class="day-list">
        <li v-for="(workout, index) in plan.workouts" :key="workout" class="day-item">
            <p class="index">#{{ index+1 }}</p>
            <ul v-if="Object.keys(workout).length !== 0" class="workout-list">
                <li class="workout-item">
                    <ul class="exercise-list">
                        <li class="exercise-item">
                            <p class="workout-title">{{ workout.title }}</p>
                            <div class="right">
                                <span class="total-volume">{{ totalWorkoutVolume(workout) }}</span>
                                <IconButton icon="fa-xmark" background-color-var="color30"/>
                            </div>
                        </li>
                        <hr>
                        <li v-for="exercise in workout.exercises" :key="exercise" class="exercise-item">
                            <p class="exercise-title">{{ exercise.title }}</p>
                            <div class="right">
                                <span class="volume">{{ exercise.volume }}</span>
                                <IconButton icon="fa-minus" background-color-var="color30"/>
                            </div>
                        </li>
                        <li class="exercise-item">
                            <IconButton icon="fa-plus" background-color-var="color30"/>
                        </li>
                    </ul>
                </li>
            </ul>
            <IconButton icon="fa-plus"/>
        </li>
        <IconButton icon="fa-plus" background-color-var="color30"/>
    </ul>
    <a class="floating-btn">
        <font-awesome-icon icon="fa-solid fa-check" size="lg"/>
    </a>
</template>

<script setup>
    import { ref } from 'vue';
    import { onSnapshot } from 'firebase/firestore';
    import { planDoc } from '../../firebase';
    import IconButton from '../IconButton.vue';

    const props = defineProps({
        planId: {
            type: String,
            default: "",
        },
        totalWorkoutVolume: {
            type: Function,
            default: () => {},
        },
    });

    const plan = ref({});

    onSnapshot(planDoc(props.planId), planSnapshot => {
        plan.value = planSnapshot.data();
    });
</script>

<style scoped>
    .day-list {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 2em;
    }

    .day-item {
        height: 100%;
        max-width: 24em;
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
        padding: 1.5em;
        border-radius: 1em;
        background-color: var(--color-30);
    }

    .index {
        font-weight: 600;
        color: var(--color-primary);
    }

    .workout-list {
        width: 100%;
        display: grid;
        gap: 1em;
    }

    .workout-item {
        padding: 1em;
        border-radius: 1em;
        background-color: var(--color-60);
    }

    .exercise-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 3em;
        padding: 1em;
    }

    .exercise-item:last-child {
        justify-content: center;
    }

    .right {
        display: flex;
        align-items: center;
        gap: 1em;
    }

    .workout-title {
        font-size: 1.5em;
        color: var(--color-primary);
    }

    .volume, .total-volume {
        font-weight: 600;
    }

    .total-volume {
        font-size: 1.25em;
        color: var(--color-primary);
    }

    .floating-btn {
        width: 3em;
        height: 3em;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        right: 2em;
        bottom: 2em;
        border-radius: 100%;
        background-color: var(--color-primary);
    }
</style>