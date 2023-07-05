import { Visualization } from "@/model/visualization";
import { computed, onMounted, ref } from 'vue';
import { UseExerciseInfos } from '@/composables/useExerciseInfos';
import { ExerciseInfo } from '@/model/exerciseInfos';
import { getExercisesForVisualization } from "@/api/exercise";


export function UseVisualization() {

  const searchQuery = ref('');
  const { exerciseInfos } = UseExerciseInfos();

  const filteredExercises = computed(() => {
    if (searchQuery.value) {
      return exerciseInfos.value.filter(e => e.name && e.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
    } else {
      return exerciseInfos.value;
    }
  });

    const data = ref<Visualization>({
        labels: [],
        datasets: []
    });
    
    const getVisualization = async (exerciseName:string) => {
        var response = await getExercisesForVisualization(exerciseName);
        var label: string[] = [];
        var dataset: number[] = [];
        response.forEach(exercise => {
          if(exercise.workout.dateOfWorkout) {
            label.push(formatDate(new Date (exercise.workout.dateOfWorkout)));
            dataset.push(exercise.reps);
          }
        });

        data.value = {
            labels: label,
            datasets: [
              {
                label: response[0].exerciseInfo.name || 'Fehler',
                backgroundColor: '#f87979',
                data: dataset
              }
            ]
          }

          console.log(data)
    }
    
    const openVis = ref<boolean>();
    const selectedExercise = ref<any>();

    const openCloseModal = (isOpen: boolean, exerciseInfo: ExerciseInfo) => {
        openVis.value = isOpen
        selectedExercise.value = exerciseInfo;
        if(isOpen) {
          if(exerciseInfo.name) {
            getVisualization(exerciseInfo.name);
          }
        }
    }

    const formatDate = (date: Date): string => {
      let day = date.getDate(); // Get the day part
      let month = date.getMonth() + 1; // Get the month part (getMonth is zero-based)
      let year = date.getFullYear(); // Get the year part
  
      // Convert day and month to strings and prepend a zero if they are single digits
      let dayString = day < 10 ? '0' + day : '' + day;
      let monthString = month < 10 ? '0' + month : '' + month;
  
      return `${dayString}/${monthString}/${year}`;
  }

    return {
        searchQuery,
        filteredExercises,
        data,
        getVisualization,
        openVis,
        selectedExercise,
        openCloseModal
    };
}