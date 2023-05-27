<template>
    <ul class="day-list">
        <li v-for="(day, dayIndex) in plan.days" :key="day" class="day-item">
            <p class="index">#{{ dayIndex + 1 }}</p>
            <ul v-if="day.workouts" class="workout-list">
                <li v-for="(workout, workoutIndex) in day.workouts" :key="workout" class="workout-item">
                    <ul class="exercise-list">
                        <li class="exercise-item">
                            <p 
                                class="contenteditable workout-title" 
                                role="textbox" 
                                spellcheck="false" 
                                @input="(e) => { workout.title = e.target.innerText; }" 
                                contenteditable>
                            {{ workout.title }}</p>
                            <div class="right">
                                <span class="total-volume">{{ totalWorkoutVolume(workout) }}</span>
                                <IconButton :on-click="() => deleteWorkout(dayIndex, workout)" icon="fa-xmark" background-color-var="color30"/>
                            </div>
                        </li>
                        <hr>
                        <li v-for="exercise in workout.exercises" :key="exercise" class="exercise-item">
                            <p 
                                class="contenteditable exercise-title" 
                                role="textbox" 
                                spellcheck="false" 
                                @input="(e) => { exercise.title = e.target.innerText; }" 
                                contenteditable>
                            {{ exercise.title }}</p>
                            <div class="right">
                                <input v-model="exercise.volume" class="volume" type="number" min="1" max="99">
                                <IconButton :on-click="() => deleteExercise(dayIndex, workoutIndex, exercise)" icon="fa-minus" background-color-var="color30"/>
                            </div>
                        </li>
                        <li class="exercise-item">
                            <IconButton :on-click="() => addExercise(dayIndex, workoutIndex)" icon="fa-plus" background-color-var="color30"/>
                        </li>
                    </ul>
                </li>
            </ul>
            <IconButton :on-click="() => addWorkout(dayIndex)" icon="fa-plus"/>
            <IconButton :on-click="() => deleteDay(day)" class="delete-day-btn" icon="fa-trash-can"/>
        </li>
        <IconButton :on-click="addDay" icon="fa-plus" background-color-var="color30"/>
    </ul>
    <a @click.prevent="savePlan" class="floating-btn">
        <font-awesome-icon icon="fa-solid fa-save" size="lg"/>
    </a>
</template>

<script setup>
    import { ref } from 'vue';
    import { onSnapshot, setDoc } from 'firebase/firestore';
    import { planDoc } from '../../../firebase';
    import IconButton from '../../IconButton.vue';

    const props = defineProps({
        planId: {
            type: String,
            default: "",
        },
        totalWorkoutVolume: {
            type: Function,
            default: () => {},
        },
        clearSelectedPlan: {
            type: Function,
            default: () => {},
        },
    });

    const plan = ref({});

    function addDay() {
        let days = plan.value.days;

        if (days) {
            days.push({});
        } else {
            days = [{}];
        }

        plan.value.days = days;
    }

    function deleteDay(day) {
        plan.value.days = plan.value.days.filter(item => {
            return item !== day;
        });

        if (plan.value.days.length === 0) {
            delete plan.value.days;
        }
    }

    function addWorkout(dayIndex) {
        let day = plan.value.days[dayIndex];
        const newWorkout = {
            title: "New Workout",
        };

        if (day.workouts) {
            day.workouts.push(newWorkout);
        } else {
            day.workouts = [newWorkout];
        }
        
        plan.value.days[dayIndex] = day;
    }

    function deleteWorkout(dayIndex, workout) {
        let day = plan.value.days[dayIndex];
        day.workouts = day.workouts.filter(item => {
            return item !== workout;
        });

        if (day.workouts.length === 0) {
            delete day.workouts;
        }

        plan.value.days[dayIndex] = day;
    }

    function addExercise(dayIndex, workoutIndex) {
        let exercises = plan.value.days[dayIndex].workouts[workoutIndex].exercises;
        const newExercise = {
            title: "New Exercise",
            volume: 1,
        };

        if (exercises) {
            exercises.push(newExercise);
        } else {
            exercises = [newExercise];
        }

        plan.value.days[dayIndex].workouts[workoutIndex].exercises = exercises;
    }

    function deleteExercise(dayIndex, workoutIndex, exercise) {
        plan.value.days[dayIndex].workouts[workoutIndex].exercises =
            plan.value.days[dayIndex].workouts[workoutIndex].exercises.filter(item => {
                return item !== exercise;
            });
    }

    function savePlan() {
        setDoc(planDoc(props.planId), plan.value);
        props.clearSelectedPlan();
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
        align-self: flex-start;
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
        grid-template-columns: 10em 1fr;
        gap: 2em;
        align-items: center;
        padding: .75em 1em;
    }

    .exercise-item:last-child {
        grid-template-columns: 1fr;
        place-items: center;
    }

    .right {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
    }

    .workout-title {
        font-size: 1.5em;
        color: var(--color-primary);
    }

    .total-volume {
        font-size: 1.25em;
        color: var(--color-primary);
    }

    .volume, .total-volume {
        font-weight: 600;
    }

    .volume {
        width: 2.25em;
    }

    .delete-day-btn {
        margin-top: auto;
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