<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Add Exercises to Your Workout {{ currentWorkout || '...loading' }}!</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-title>Selected Exercises</ion-title>
      <ion-list>
        <ion-item-sliding v-for="selectedExercise in selectedExercises">
          <ion-item>
            <ion-label>{{ selectedExercise.name }}</ion-label>
            <ion-range @ionChange="onIonChange(selectedExercise.id, $event)"></ion-range>
            <ion-label>{{ selectedExercise.time }}s </ion-label>
          </ion-item>
          <ion-item-options>
            <ion-item-option color="danger" @click="removeExercise(selectedExercise.id)">Remove</ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>
      <ion-button @click="startWorkout()">Start Workout</ion-button>
      <ion-alert trigger="present-alert" header="Alert" subHeader="Important message" message="This is an alert!">Test</ion-alert>

      <ion-list>
        <ion-item>
          <ion-select aria-label="Bodypart" interface="alert" placeholder="Select Bodypart" v-model="selectedBodypart" fill="solid">
            <ion-select-option value="Abs">Abs</ion-select-option>
            <ion-select-option value="Arms">Arms</ion-select-option>
            <ion-select-option value="Chest">Chest</ion-select-option>
            <ion-select-option value="Legs">Legs</ion-select-option>
            <ion-select-option value="NoFilter">No Filter</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>

      <ion-list>
        <ion-item-sliding v-for="exerciseInfo in filterExercisesInWorkout" :key="exerciseInfo.id">
          <ion-item-options side="start">
            <ion-item-option color="success" @click="addExercise(exerciseInfo.name, exerciseInfo.id)">Add</ion-item-option>
          </ion-item-options>
          <ion-item>
            <ion-label>{{ exerciseInfo.name }}</ion-label>
            <ion-button @click="setOpen(true, exerciseInfo)" color="light">Description</ion-button>
          </ion-item>
        </ion-item-sliding>
      </ion-list>

      <ion-modal :is-open="isOpen">
        <ion-header>
          <ion-toolbar>
            <ion-title v-if="selectedExercise">{{ selectedExercise.name }}</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="setOpen(false, null)">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <h3>Description:</h3>
          <p v-if="selectedExercise">{{ selectedExercise.description }}</p>
          <h3>YouTube:</h3>
          <iframe v-if="selectedExercise" width="560" height="315" :src="selectedExercise.youtubeLink" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonList, IonItem, IonSelect, IonSelectOption, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonModal, IonButtons, IonButton, IonItemSliding, IonItemOptions, IonItemOption, IonLabel, IonRange, IonAlert } from '@ionic/vue';
import { UseExerciseInfos } from '../composables/useExerciseInfos';
import { useWorkouts } from '../composables/useWorkouts';

const { filterExercisesInWorkout, isOpen, setOpen, selectedBodypart, selectedExercise } = UseExerciseInfos();
const { currentWorkout, selectedExercises, addExercise, startWorkout, onIonChange, removeExercise } = useWorkouts();
</script>

<style scoped></style>
