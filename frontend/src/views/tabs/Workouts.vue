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
        <ion-card-content>Total calories: {{ workout.calories }} --- Total Workouttime: {{ workout.totalTime }} </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonSearchbar, IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonList, IonDatetime, IonButton } from '@ionic/vue';
import { useWorkouts } from '../../composables/useWorkouts';

const { workouts, datetimeInput, saveWorkout } = useWorkouts();
</script>
