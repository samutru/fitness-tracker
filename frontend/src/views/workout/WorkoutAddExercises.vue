<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Add Exercises to Your Workout ({{ currentWorkout && currentWorkout.dateOfWorkout ? new Date(currentWorkout.dateOfWorkout).toLocaleDateString() : '...loading' }})</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-title>Selected Exercises</ion-title>
      <ion-list>
        <ion-item-sliding v-for="selectedExercise in selectedExercises">
          <ion-item>
            <ion-label>{{ selectedExercise.name }}</ion-label>
            <!-- :value="60" set start value for range -->
            <ion-range @ionChange="onIonChange(selectedExercise.id, $event)" :pin="true" :snaps="true"></ion-range>
          </ion-item>
          <ion-item-options>
            <ion-item-option color="danger" @click="removeExercise(selectedExercise.id)">Remove</ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>
      <ion-button id="startWorkout" @click="startWorkout(currentWorkout.id)">Start Workout</ion-button>
      <ion-alert v-if="noExercisesSelected" trigger="startWorkout" header="Warning" message="Please add some exercises first" :buttons="alertButtons"></ion-alert>

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
import { IonAlert, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonModal, IonPage, IonRange, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/vue';
import { UseExerciseInfos } from '../../composables/useExerciseInfos';
import { useWorkouts } from '../../composables/useWorkouts';

const { currentWorkout, selectedExercises, noExercisesSelected, addExercise, startWorkout, onIonChange, removeExercise } = useWorkouts();
const { filterExercisesInWorkout, isOpen, setOpen, selectedBodypart, selectedExercise } = UseExerciseInfos();
const alertButtons = ['OK'];
</script>

<style scoped>
ion-range::part(pin) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 50%;
  transform: scale(1.01);
  top: -20px;
  min-width: 28px;
  height: 28px;
  transition: transform 120ms ease, background 120ms ease;
}
</style>
