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

      <ion-accordion-group>
        <ion-accordion value="first">
          <ion-item slot="header" color="light">
            <ion-label>Start a new workout</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <ion-label>Set your start time and the correct Date</ion-label>
            <ion-datetime display-format="YYYY-MM-DD HH:mm" v-bind="datetimeInput"></ion-datetime>
            <ion-button @click="saveWorkout">Save Workout</ion-button>
          </div>
        </ion-accordion>
      </ion-accordion-group>

      <ion-card :key="workout.id" v-for="workout in workouts">
        <ion-card-header>
          <ion-card-title>Workout - {{ workout.dateOfWorkout }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>You have burned {{ workout.calories }} calories in {{ workout.totalTime }} Min </ion-card-content>
        <ion-button @click="openCloseModal(true, workout)">Show Exercises</ion-button>
      </ion-card>
    </ion-content>
    <ion-modal :is-open="showExercises">
        <ion-header>
          <ion-toolbar>
            <ion-title>Workout - {{ selectedWorkout ? selectedWorkout.dateOfWorkout : '' }}</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="openCloseModal(false, null)">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-list>
            <ion-item v-for="exercise in exercisesForWorkout">
              <ion-label> 
                 {{ exercise.exerciseInfo?.name }}
                <p>{{ exercise.reps }} reps --- {{ exercise.exerciseTime }} seconds</p>
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-modal>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonSearchbar, IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonDatetime, IonButton, IonModal, IonButtons, IonList } from '@ionic/vue';
import { useWorkouts } from '../../composables/useWorkouts';

const { showExercises, selectedWorkout, exercisesForWorkout, openCloseModal, workouts, datetimeInput, saveWorkout } = useWorkouts();

</script>

<style>
  td {
    padding: 10px;
  }
</style>
