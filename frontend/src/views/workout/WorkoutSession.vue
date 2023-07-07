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

      <ion-button v-if="!workoutStarted && !workoutEnded" @click="showNextExercise()">Begin Workout</ion-button>

      <ion-modal :is-open="workoutStarted && !workoutEnded">
        <ion-header>
          <ion-toolbar>
            <ion-title>Current Exercise</ion-title>
            <ion-progress-bar :value="countdown / totalExerciseTime" type="determinate"></ion-progress-bar>
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
                <ion-button v-if="showNextExerciseBtn && !workoutEnded" @click="showNextExercise()">Next Exercise</ion-button>
                <ion-input v-if="showRepInputField" labelPlacement="floating" v-model="reps">
                  <div slot="label">Reps <ion-text color="danger">(Required)</ion-text></div>
                </ion-input>
              </div>
            </ion-card-content>
            <iframe width="100%" height="315" :src="currentExercises[currentExerciseIndex].exerciseInfo?.youtubeLink" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </ion-card>
        </ion-content>
      </ion-modal>
      <ion-modal :is-open="!workoutStarted && workoutEnded && finishModalOpen">
        <ion-header>
          <ion-toolbar>
            <ion-title>Congratulations! You finished your Workout!</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-card :key="currentExercise.id" v-for="currentExercise in currentExercises">
            <ion-card-header>
              <ion-card-title>{{ currentExercise.exerciseInfo?.name }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <p><b>Time:</b> {{ currentExercise.exerciseTime }}s</p>
              <p><b>Reps:</b> {{ currentExercise.reps }}</p>
            </ion-card-content>
          </ion-card>
          <ion-button @click="endWorkout()">End Workout</ion-button>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar, IonInput, IonProgressBar } from '@ionic/vue';
import { useWorkoutSession } from '../../composables/useWorkoutSession';
const { currentExercises, workoutStarted, workoutEnded, finishModalOpen, currentExerciseIndex, countdown, totalExerciseTime, workoutPaused, showNextExerciseBtn, showRepInputField, reps, showNextExercise, pauseWorkout, endWorkout, updateExerciseWithReps } = useWorkoutSession();
</script>

<style scoped></style>
