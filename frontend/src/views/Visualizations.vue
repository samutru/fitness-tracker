<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Visualizations</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Visualizations</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-searchbar placeholder="Exercise"></ion-searchbar>
      <Line :data="data" :options="options" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar } from '@ionic/vue';
import {Visualization} from '@/model/visualization'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import { UseVisualization } from '@/composables/useVisualization'
import { onMounted } from 'vue';

const { data, getVisualization } = UseVisualization();

onMounted(() => {
  getVisualization()
})

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  maintainAspectRatio: false
}

</script>