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

      <div>
        <ion-button v-if="!workoutStarted && !workoutEnded" @click="beginWorkout(true)">Begin Workout</ion-button>
        <ion-button v-else-if="!workoutStarted" @click="endWorkout()">End Workout</ion-button>
      </div>

      <ion-modal :is-open="workoutStarted && !workoutEnded">
        <ion-header>
          <ion-toolbar>
            <ion-title>Current Exercise - {{ countdown }} </ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-card v-if="currentExerciseIndex >= 0 && currentExerciseIndex < currentExercises.length">
            <ion-card-header>
              <ion-card-title>{{ currentExercises[currentExerciseIndex].exerciseInfo?.name }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <div>
                <ion-button v-if="!workoutPaused && !showNextExerciseBtn" @click="pauseWorkout(true)">Pause Workout</ion-button>
                <ion-button v-else-if="workoutPaused && !showNextExerciseBtn" @click="pauseWorkout(false)">Continiue Workout</ion-button>
                <ion-button v-if="showNextExerciseBtn" @click="showNextExercise(), updateExerciseInfos(currentExercises[currentExerciseIndex - 1].workout?.id, currentExercises[currentExerciseIndex - 1].id)">Next Exercise</ion-button>
                <ion-input v-if="showRepInputField" labelPlacement="floating" v-model="reps">
                  <div slot="label">Reps <ion-text color="danger">(Required)</ion-text></div>
                </ion-input>
              </div>
            </ion-card-content>
          </ion-card>
          <iframe width="560" height="315" :src="currentExercises[currentExerciseIndex].exerciseInfo?.youtubeLink" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar, IonInput } from '@ionic/vue';
import { useWorkoutSession } from '../../composables/useWorkoutSession';
const { currentExercises, workoutStarted, workoutEnded, currentExerciseIndex, countdown, workoutPaused, showNextExerciseBtn, showRepInputField, reps, beginWorkout, showNextExercise, pauseWorkout, endWorkout, updateExerciseInfos } = useWorkoutSession();
</script>

<style scoped></style>
