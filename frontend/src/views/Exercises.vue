<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Exercises</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-select aria-label="Bodypart" interface="popover" placeholder="Select Bodypart" >
            <ion-select-option value="abs">Abs</ion-select-option>
            <ion-select-option value="arms">Arms</ion-select-option>
            <ion-select-option value="chest">Chest</ion-select-option>
            <ion-select-option value="legs">Legs</ion-select-option>
            <ion-select-option value="cancel">Cancel</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>
      <ion-grid>
        <ion-row>
          <ion-col size="6" v-for="exerciseInfo in exerciseInfos" :key="exerciseInfo.id">
            <ion-card color="primary" style="height: 10rem">
              <ion-card-header>
                <ion-card-title style="text-align: center">{{ exerciseInfo.name }} - {{ exerciseInfo.category }}</ion-card-title>
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
          <p v-if="selectedExercise">{{ selectedExercise.youtubeLink }}</p>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonList, IonItem, IonSelect, IonSelectOption, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonSearchbar, IonModal, IonButtons, IonButton, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { UseExerciseInfos } from '../composables/useExerciseInfos';
import { ref } from 'vue';

const { exerciseInfos, getExerciseInfos } = UseExerciseInfos();
const isOpen = ref(false);
const selectedExercise = ref<any>();

const setOpen = (status: boolean, exerciseInfo: any) => {
  isOpen.value = status;
  selectedExercise.value = exerciseInfo;
};
</script>

<style scoped></style>
