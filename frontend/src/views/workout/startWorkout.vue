<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Workout Session</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-title>Have fun with your workout!</ion-title>

      <ion-card :key="currentExercise.id" v-for="currentExercise in currentExercises">
        <ion-card-header>
          <ion-card-title>Exercise - {{ currentExercise.exerciseInfo?.name }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>Time {{ currentExercise.exerciseTime }}s </ion-card-content>
      </ion-card>

      <ion-button @click="beginWorkout(true)">Begin Workout</ion-button>

      <ion-modal :is-open="workoutStarted">
        <ion-header>
          <ion-toolbar>
            <ion-title>Current Exercise</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="workoutStarted = false">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-card v-if="currentExerciseIndex >= 0 && currentExerciseIndex < currentExercises.length">
            <ion-card-header>
              <ion-card-title>{{ currentExercises[currentExerciseIndex].exerciseInfo?.name }}</ion-card-title>
            </ion-card-header>
          </ion-card>
          <ion-item>
            <ion-input type="number" placeholder="Age"></ion-input>
          </ion-item>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { useWorkoutSession } from '../../composables/useWorkoutSession';
const { currentExercises, workoutStarted, currentExerciseIndex, beginWorkout, listAllExercisesForWorkout } = useWorkoutSession();
</script>

<style scoped></style>
