import { Visualization } from "@/model/visualization";
import { ref } from 'vue';

export function UseVisualization() {

    const data = ref<Visualization>({
        labels: [],
        datasets: []
    });
    
    const getVisualization = () => {
        data.value = {
            labels: ['2023-07-01', '2023-07-02', '2023-07-03', '2023-07-04', '2023-07-05'],
            datasets: [
              {
                label: 'Push-ups',
                backgroundColor: '#f87979',
                data: [10, 15, 17, 20, 25]
              }
            ]
          }
    }
   
    return {
        data,
        getVisualization
    };
}