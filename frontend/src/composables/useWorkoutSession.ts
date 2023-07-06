import { getExercisesForWorkout } from '@/api/workouts';
import { Exercise } from '@/model/exercise';
import { onMounted, ref, nextTick } from 'vue';
import { useRoute } from 'vue-router';

export function useWorkoutSession() {
  const currentExercises = ref<Exercise[]>([]);
  const currentExerciseIndex = ref<number>(-1);
  const route = useRoute();
  const workoutStarted = ref<boolean>(false);

  // list all the exercises for the current workout
  const listAllExercisesForWorkout = async () => {
    const routeWorkoutId = route.params.id;

    if (routeWorkoutId) {
      try {
        currentExercises.value = await getExercisesForWorkout(Number(routeWorkoutId));
      } catch (error) {
        console.log(error);
      }
    }
  };

  onMounted(listAllExercisesForWorkout);

  // start the workout
  const beginWorkout = (isStarted: boolean) => {
    workoutStarted.value = isStarted;
    startNextExercise();
  };

  const startNextExercise = async () => {
    currentExerciseIndex.value++;

    if (currentExerciseIndex.value >= currentExercises.value.length) {
      workoutStarted.value = false;
      currentExerciseIndex.value = -1;
      return;
    }

    // open the modal for the next exercise
    workoutStarted.value = true;

    // wait for the modal to open
    await nextTick();

    const currentExercise = currentExercises.value[currentExerciseIndex.value];
    if (currentExercise) {
      const exerciseTime = currentExercise.exerciseTime ?? 0; 
      setTimeout(() => {
        startNextExercise();
      }, exerciseTime * 1000);
    }
  };

  return {
    currentExercises,
    workoutStarted,
    currentExerciseIndex,
    beginWorkout,
    listAllExercisesForWorkout,
  };
}
