import { getAllExerciseInfos } from '@/api/exerciseInfos';
import { ExerciseInfo } from '@/model/exerciseInfos';
import { computed, onMounted, ref } from 'vue';


export function UseExerciseInfos() {
  const exerciseInfos = ref<ExerciseInfo[]>([]);

  const getExerciseInfos = async () => {
    try {
        exerciseInfos.value = await getAllExerciseInfos();
    } catch (error) {
      console.log(error);
    }
  };

  onMounted(getExerciseInfos);


const isOpen = ref(false);
const selectedExercise = ref<any>();
let selectedBodypart = ref('');
let searchInput = ref('');

const setOpen = (status: boolean, exerciseInfo: any) => {
  isOpen.value = status;
  selectedExercise.value = exerciseInfo;
};

const groupedExerciseInfos = computed(() => {
  let filteredExercises = exerciseInfos.value
    .filter(
      (exerciseInfo) =>
        selectedBodypart.value == exerciseInfo.category ||
        selectedBodypart.value == 'NoFilter' ||
        !selectedBodypart.value
    )
    .filter((exerciseInfo) => 
        exerciseInfo.name && exerciseInfo.name.toLowerCase().includes(searchInput.value.toLowerCase())
    );

  let grouped = [];
  for (let i = 0; i < filteredExercises.length; i += 2) {
    grouped.push(filteredExercises.slice(i, i + 2));
  }
  return grouped;
});


// this function is used to filter workouts during the "selecting exercises" process
const filterExercisesInWorkout = computed(() => {
  let grouped = exerciseInfos.value.filter((exerciseInfo) => selectedBodypart.value == exerciseInfo.category || selectedBodypart.value == 'NoFilter' || !selectedBodypart.value);
  return grouped;
});

  return {
    exerciseInfos,
    selectedBodypart,
    searchInput,
    selectedExercise,
    isOpen,
    groupedExerciseInfos,
    filterExercisesInWorkout,
    setOpen,
    getExerciseInfos,
  };
}
