import { getAllWorkouts, getWorkoutById, createNewWorkout, addExercisesToWorkout, getExercisesForWorkout } from '@/api/workouts';
import { Workout } from '@/model/workout';
import { useRouter, useRoute } from 'vue-router';
import { computed, onMounted, ref } from 'vue';
import { Exercise } from '@/model/exercise';

export function useWorkouts() {
  const workouts = ref<Workout[]>([]);
  const currentWorkout = ref<Workout>({});
  const datetimeInput = ref(new Date());
  const router = useRouter();
  const selectedExercises = ref<
    {
      name: string;
      id: number;
      exerciseId: number;
      time: number;
    }[]
  >([]);
  // get current route
  const route = useRoute();
  const noExercisesSelected = ref<boolean>();

  // This functions reads the current workoutId out of the path
  onMounted(async () => {
    const { id } = route.params;

    if (id) {
      try {
        currentWorkout.value = await getWorkoutById(Number(id));
      } catch (error) {
        console.log(error);
      }
    }
  });

  const dateTime = computed(() => {
    if (datetimeInput.value) {
      return datetimeInput.value.toISOString().substring(0, 16).replace('T', ' ');
    } else {
      return '';
    }
  });

  // this function gets all the workouts displayed in the workoutTab
  const getWorkouts = async () => {
    try {
      workouts.value = await getAllWorkouts();
    } catch (error) {
      console.log(error);
    }
  };

  // used to display all stored workouts in the workout tab
  onMounted(getWorkouts);

  // this function saves a new workout
  const saveWorkout = async () => {
    if (datetimeInput.value) {
      let workout: Workout = {
        dateOfWorkout: new Date(datetimeInput.value),
      };
      try {
        let res = await createNewWorkout(workout);
        getWorkouts();
        router.push('/tabs/addExercises/' + res.id);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // this function add an exercises to the "selectedExercises"
  const addExercise = (exerciseName: any, exerciseInfoId: any) => {
    selectedExercises.value.push({
      name: exerciseName,
      id: exerciseInfoId,
      exerciseId: Math.random(),
      time: 0,
    });
  };

  // this function removes an exercise from the "selectedExercises"
  const removeExercise = (exerciseId: any) => {
    selectedExercises.value = selectedExercises.value.filter((exercise) => exercise.exerciseId !== exerciseId);
  };

  // this function gets called when the time is set
  const onIonChange = (id: any, event: any) => {
    updateExerciseTime(id, event.target.value);
  };

  // this function updated the selected time for each exercise
  const updateExerciseTime = (exerciseId: any, newTime: any) => {
    const index = selectedExercises.value.findIndex((exercise) => exercise.exerciseId === exerciseId);
    if (index !== -1) {
      selectedExercises.value[index].time = newTime;
    }
  };

  // this function saves all selected exercises to a workout
  const startWorkout = async (id: any) => {
    if (!selectedExercises.value.length) {
      noExercisesSelected.value = true;
    } else {
      noExercisesSelected.value = false;
      const effectiveExercises = selectedExercises.value.map((value) => {
        return {
          reps: 0,
          exerciseTime: value.time,
          exerciseInfo: {
            id: value.id,
          },
        };
      });

      try {
        if (id !== null) {
          let res = await addExercisesToWorkout(effectiveExercises, id);
          router.push('/tabs/workout/' + id);
        } else {
          console.log('workoutId.value is null');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const showExercises = ref<boolean>(false);
  const selectedWorkout = ref<Workout>();
  const exercisesForWorkout = ref<Exercise[]>([]);

  const openCloseModal = async (isOpen: boolean, workout: any) => {
    showExercises.value = isOpen;
    selectedWorkout.value = workout;
    if (isOpen && selectedWorkout.value?.id && selectedWorkout != null) {
      exercisesForWorkout.value = await getExercisesForWorkout(selectedWorkout.value?.id);
    } else {
      exercisesForWorkout.value = [];
    }
  };

  return {
    showExercises,
    selectedWorkout,
    exercisesForWorkout,
    workouts,
    currentWorkout,
    selectedExercises,
    dateTime,
    noExercisesSelected,
    openCloseModal,
    getWorkouts,
    saveWorkout,
    startWorkout,
    addExercise,
    removeExercise,
    onIonChange,
  };
}
