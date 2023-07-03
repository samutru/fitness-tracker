import { getAllWorkouts } from '@/api/workouts';
import { Workout } from '@/model/workouts';
import { onMounted, ref } from 'vue';

export function useWorkouts() {
  const workouts = ref<Workout[]>([]);

  const getWorkouts = async () => {
    try {
      workouts.value = await getAllWorkouts();
    } catch (error) {
      console.log(error); // FIXME: Errorhandling
    }
  };

  onMounted(getWorkouts);

  return {
    workouts,
    getWorkouts,
  };
}
