import { getAllExerciseInfos } from '@/api/exerciseInfos';
import { ExerciseInfo } from '@/model/exerciseInfos';
import { onMounted, ref } from 'vue';

export function UseExerciseInfos() {
  const exerciseInfos = ref<ExerciseInfo[]>([]);

  const getExerciseInfos = async () => {
    try {
        exerciseInfos.value = await getAllExerciseInfos();
    } catch (error) {
      console.log(error); // FIXME: Errorhandling
    }
  };

  onMounted(getExerciseInfos);

  return {
    exerciseInfos,
    getExerciseInfos,
  };
}
