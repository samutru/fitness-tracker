import { getAllWorkouts, getWorkoutById, createNewWorkout, addExercisesToWorkout } from '@/api/workouts';
import { Workout } from '@/model/workout';
import { useRouter, useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

export function useWorkouts() {
  const workouts = ref<Workout[]>([]);
  const currentWorkout = ref<Workout>({});
  const currentDatetime = new Date();
  const datetimeInput = ref(currentDatetime);
  const router = useRouter();
  const selectedExercises = ref<
    {
      name: string;
      id: number;
      time: number;
    }[]
  >([]);
  // get current route
  const route = useRoute();
  const noExercisesSelected = ref<boolean>();

  // This functions reads the current workoutId out of the path
  onMounted(async () => {
    const routeWorkoutId = route.params.id;

    if (routeWorkoutId) {
      try {
        currentWorkout.value = await getWorkoutById(Number(routeWorkoutId));
      } catch (error) {
        console.log(error);
      }
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
      time: 0,
    });
  };

  // this function removes an exercise from the "selectedExercises"
  const removeExercise = (exerciseId: any) => {
    selectedExercises.value = selectedExercises.value.filter((exercise) => exercise.id !== exerciseId);
  };

  // this function gets called when the time is set
  const onIonChange = (id: any, event: any) => {
    updateExerciseTime(id, event.target.value);
  };

  // this function updated the selected time for each exercise
  const updateExerciseTime = (exerciseId: any, newTime: any) => {
    const index = selectedExercises.value.findIndex((exercise) => exercise.id === exerciseId);
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
          reps: 5,
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

  return {
    workouts,
    currentWorkout,
    selectedExercises,
    datetimeInput,
    noExercisesSelected,
    getWorkouts,
    saveWorkout,
    startWorkout,
    addExercise,
    removeExercise,
    onIonChange,
  };
}
