<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Exercises</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar v-model="searchInput"></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-select aria-label="Bodypart" interface="alert" placeholder="Select Bodypart" v-model="selectedBodypart">
            <ion-select-option value="Abs">Abs</ion-select-option>
            <ion-select-option value="Arms">Arms</ion-select-option>
            <ion-select-option value="Chest">Chest</ion-select-option>
            <ion-select-option value="Legs">Legs</ion-select-option>
            <ion-select-option value="NoFilter">No Filter</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>

      <ion-grid>
        <ion-row v-for="(group, index) in groupedExerciseInfos" :key="index">
          <ion-col size="6" v-for="exerciseInfo in group" :key="exerciseInfo.id">
            <ion-card color="primary" style="height: 8rem">
              <ion-card-header>
                <ion-card-title style="text-align: center">{{ exerciseInfo.name }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-button expand="block" @click="setOpen(true, exerciseInfo)" color="light">Open</ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>

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
import { IonList, IonItem, IonSelect, IonSelectOption, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonSearchbar, IonModal, IonButtons, IonButton, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { UseExerciseInfos } from '../composables/useExerciseInfos';

const { exerciseInfos, getExerciseInfos, groupedExerciseInfos, isOpen, setOpen, selectedBodypart, searchInput, selectedExercise } = UseExerciseInfos();
</script>

<style scoped></style>
