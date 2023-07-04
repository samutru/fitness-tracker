<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Workouts</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Workouts</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-searchbar></ion-searchbar>

      <ion-card :key="workout.id" v-for="workout in workouts">
        <ion-card-header>
          <ion-card-title>Workout - {{ workout.dateOfWorkout }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>Total calories: {{ workout.calories }} --- Total Workouttime: {{ workout.totalTime }}  </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonSearchbar } from '@ionic/vue';
import { useWorkouts } from "../composables/useWorkouts";

const { workouts, getWorkouts } = useWorkouts();

</script>