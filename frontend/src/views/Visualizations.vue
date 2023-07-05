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
      <ion-searchbar v-model="searchQuery" placeholder="Exercise"></ion-searchbar>
      <ion-list>
        <ion-item v-for="exercise in filteredExercises" :key="exercise.id">
          <ion-grid>
            <ion-row>
              <ion-col>
                {{ exercise.name }}
              </ion-col>
              <ion-col>
                <ion-button @click="openCloseModal(true, exercise)">
                  Visualization
                  <ion-icon slot="end" :icon="chevronForwardOutline"></ion-icon>
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
      </ion-list>

      <ion-modal :is-open="openVis">
        <ion-header>
          <ion-toolbar>
            <ion-title>{{ selectedExercise ? selectedExercise.name : '' }}</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="openCloseModal(false, null)">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <Line v-if="data.labels.length || data.datasets.length" :data="data" :options="options" style="width: 100%;"/>
          <div v-else style="text-align: center;">
            <h2>No graphic available</h2>
            <h6>You need to do a Workout first</h6>
          </div>
          <h4>Description:</h4>{{ selectedExercise ? selectedExercise.description : '' }}
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonList, IonItem, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonModal, IonButtons } from '@ionic/vue'
  import { UseVisualization } from '@/composables/useVisualization'
  import { chevronForwardOutline } from 'ionicons/icons';
  import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
  import { Line } from 'vue-chartjs'

  const { searchQuery, filteredExercises, openVis, selectedExercise, openCloseModal, data } = UseVisualization();

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
    maintainAspectRatio: true
  }

  


</script>