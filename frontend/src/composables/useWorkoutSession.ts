import { getExercisesForWorkout, updateExercise } from '@/api/workouts';
import { Exercise } from '@/model/exercise';
import router from '@/router';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

export function useWorkoutSession() {
  const currentExercises = ref<Exercise[]>([]);
  const currentExerciseIndex = ref<number>(-1);
  const route = useRoute();
  const workoutStarted = ref<boolean>(false);
  const workoutEnded = ref<boolean>(false);
  const countdown = ref<number>(0);
  const totalExerciseTime = ref<number>(0);
  const nextExercise = ref<boolean>(false);
  const showNextExerciseBtn = ref<boolean>(false);
  const workoutPaused = ref<boolean>(false);
  const intervalId = ref<any>();
  const showRepInputField = ref<boolean>(false);
  const reps = ref<number>(0);
  const finishModalOpen = ref<boolean>(true);
  const exerciseClicks = ref<number>(0);

  // list all the exercises for the current workout
  const listAllExercisesForWorkout = async () => {
    const { id } = route.params;

    if (id) {
      try {
        currentExercises.value = await getExercisesForWorkout(Number(id));
      } catch (error) {
        console.log(error);
      }
    }
  };

  onMounted(listAllExercisesForWorkout);

  // end the workout and redirect to workout tab (overview)
  const endWorkout = () => {
    finishModalOpen.value = false;
    router.push('/tabs/workouts');
  };

  const pauseWorkout = (paused: boolean) => {
    workoutPaused.value = paused;
  };
  const showNextExercise = () => {
    exerciseClicks.value++;
    if (exerciseClicks.value > 1) {
      updateExerciseWithReps(currentExercises.value[currentExerciseIndex.value].workout?.id, currentExercises.value[currentExerciseIndex.value].id);
    }
    workoutStarted.value = true;
    currentExerciseIndex.value++;
    showNextExerciseBtn.value = false;
    nextExercise.value = false;
    if (currentExerciseIndex.value <= currentExercises.value.length - 1) {
      showRepInputField.value = false;
      clearInterval(intervalId.value);
      displayExercises();
    } else {
      workoutStarted.value = false;
      workoutEnded.value = true;
      showNextExerciseBtn.value = false;
      listAllExercisesForWorkout();
    }
  };

  const displayExercises = async () => {
    const currentExercise = currentExercises.value[currentExerciseIndex.value];

    if (currentExercise) {
      // make sure that exerciseTime is not undefined
      const exerciseTime = currentExercise.exerciseTime || 0;
      countdown.value = exerciseTime;
      totalExerciseTime.value = exerciseTime;
      intervalId.value = setInterval(() => {
        if (countdown.value > 0) {
          if (!workoutPaused.value) {
            countdown.value--;
          }
        } else {
          showNextExerciseBtn.value = true;
          showRepInputField.value = true;
        }
      }, 1000);
    }
  };

  const updateExerciseWithReps = async (workoutId: any, exerciseId: any) => {
    let exerciseUpdate: Exercise = {
      id: exerciseId,
      reps: reps.value,
    };
    await updateExercise(exerciseUpdate, workoutId);
  };

  return {
    currentExercises,
    workoutStarted,
    workoutEnded,
    currentExerciseIndex,
    countdown,
    totalExerciseTime,
    showNextExerciseBtn,
    workoutPaused,
    showRepInputField,
    reps,
    finishModalOpen,
    endWorkout,
    pauseWorkout,
    showNextExercise,
    listAllExercisesForWorkout,
    updateExerciseWithReps,
  };
}
