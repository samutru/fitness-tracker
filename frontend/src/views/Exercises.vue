<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Exercises</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Exercises</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-searchbar></ion-searchbar>

      <ion-card :key="exerciseInfo.id" v-for="exerciseInfo in exerciseInfos">
        <ion-card-header>
          <ion-card-title>{{ exerciseInfo.name }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>Category: {{ exerciseInfo.category }} --- Description: {{ exerciseInfo.description }} </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonSearchbar } from '@ionic/vue';
import { UseExerciseInfos } from '../composables/useExerciseInfos';

const { exerciseInfos, getExerciseInfos } = UseExerciseInfos();
</script>
