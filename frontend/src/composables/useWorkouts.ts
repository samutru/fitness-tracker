import { getAllWorkouts, getWorkoutById, createNewWorkout, addExercisesToWorkout } from '@/api/workouts';
import { Workout } from '@/model/workout';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

export function useWorkouts() {
  const workouts = ref<Workout[]>([]);
  const currentWorkout = ref<Workout>({});
  const currentDatetime = new Date();
  const datetimeInput = ref(currentDatetime.toISOString());
  const router = useRouter();
  const selectedExercises = ref<
    {
      name: string;
      id: number;
      time: number;
    }[]
  >([]);
  const workoutId = ref(null);

  // this function gets the workout which was saved
  const getWorkout = async (workoutId: number) => {
    try {
      if (workoutId !== null) {
        currentWorkout.value = await getWorkoutById(workoutId);        
        // currentWorkout.value.dateOfWorkout?.toLocaleString();
      } else {
        console.log('workoutId is null');
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      const datetime = datetimeInput.value.split('T')[0];
      let workout: Workout = {
        dateOfWorkout: new Date(datetime),
      };
      try {
        let res = await createNewWorkout(workout);
        workoutId.value = res.id;
        console.log('WorkoutID in Save Workout: ' + workoutId.value);
        router.push('/tabs/addExercises/' + workoutId.value);
        getWorkouts();
        if (workoutId.value !== null) {
          getWorkout(workoutId.value);
        } else {
          console.log('Error');
        }
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
  const startWorkout = async () => {
    console.log('WorkoutID in startWorkout: ' + workoutId.value);

    if (!selectedExercises.value.length) {
      alert('Please add some Exercises first!');
    } else {
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
        if (workoutId.value !== null) {
          let res = await addExercisesToWorkout(effectiveExercises, workoutId.value);
          console.log(res);
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
    getWorkouts,
    getWorkout,
    saveWorkout,
    startWorkout,
    addExercise,
    removeExercise,
    onIonChange,
  };
}
