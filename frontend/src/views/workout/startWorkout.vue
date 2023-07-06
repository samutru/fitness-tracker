<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Workout Session</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-title>Have fun with your workout!</ion-title>
      <ion-button id="startWorkout" @click="beginWorkout()">Begin Workout</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { UseWorkoutSession } from '../../composables/useWorkoutSession';
const { beginWorkout } = UseWorkoutSession();
</script>

<style scoped></style>
