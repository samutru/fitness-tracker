import { getAllWorkouts, createNewWorkout } from '@/api/workouts';
import { Workout } from '@/model/workouts';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

export function useWorkouts() {
  const workouts = ref<Workout[]>([]);
  const currentDatetime = new Date();
  const datetimeInput = ref(currentDatetime.toISOString());
  const router = useRouter();

  const getWorkouts = async () => {
    try {
      workouts.value = await getAllWorkouts();
    } catch (error) {
      console.log(error); // FIXME: Errorhandling
    }
  };

  onMounted(getWorkouts);

  const saveWorkout = async () => {
    if (datetimeInput.value) {
      const datetime = new Date(datetimeInput.value);
      // const date = datetime.toISOString().split('T')[0] + ' ' + datetime.toTimeString().split(' ')[0];
      let workout: Workout = {
        dateOfWorkout: datetime,
      };
      try {
        let response = await createNewWorkout(workout);
        getWorkouts();
        
        router.push('/tabs/addExercises/' + response.id);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return {
    workouts,
    datetimeInput,
    getWorkouts,
    saveWorkout,
  };
}
