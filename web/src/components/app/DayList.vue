<template>
    <ul class="day-list">
        <li v-for="(workout, workoutIndex) in plan.workouts" :key="workout" class="day-item">
            <p class="index">#{{ workoutIndex + 1 }}</p>
            <ul v-if="Object.keys(workout).length !== 0" class="workout-list">
                <li class="workout-item">
                    <ul class="exercise-list">
                        <li class="exercise-item">
                            <p 
                                class="contenteditable workout-title" 
                                role="textbox" 
                                spellcheck="false" 
                                @input="onWorkoutTitleInput($event, workoutIndex)" 
                                contenteditable>
                            {{ workout.title }}</p>
                            <div class="right">
                                <span class="total-volume">{{ totalWorkoutVolume(workout) }}</span>
                                <IconButton icon="fa-xmark" background-color-var="color30"/>
                            </div>
                        </li>
                        <hr>
                        <li v-for="(exercise, exerciseIndex) in workout.exercises" :key="exercise" class="exercise-item">
                            <p 
                                class="contenteditable exercise-title" 
                                role="textbox" 
                                spellcheck="false" 
                                @input="onExerciseTitleInput($event, workoutIndex, exerciseIndex)" 
                                contenteditable>
                            {{ exercise.title }}</p>
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
    <a @click.prevent="savePlan" class="floating-btn">
        <font-awesome-icon icon="fa-solid fa-save" size="lg"/>
    </a>
</template>

<script setup>
    import { ref } from 'vue';
    import { onSnapshot, setDoc } from 'firebase/firestore';
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

    function onWorkoutTitleInput(event, workoutIndex) {
        let input = event.target.innerText;
        plan.value.workouts[workoutIndex].title = input;
    }

    function onExerciseTitleInput(event, workoutIndex, exerciseIndex) {
        let input = event.target.innerText;
        plan.value.workouts[workoutIndex].exercises[exerciseIndex].title = input;
    }

    function savePlan() {
        setDoc(planDoc(props.planId), plan.value);
    }

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
        display: grid;
        grid-template-columns: 3fr 1fr;
        align-items: center;
        padding: 1em;
    }

    .exercise-item:last-child {
        grid-template-columns: 1fr;
        place-items: center;
    }

    .exercise-title {
        max-width: 10em;
    }

    .right {
        display: flex;
        align-items: center;
        gap: 1em;
    }

    .workout-title {
        max-width: 8em;
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