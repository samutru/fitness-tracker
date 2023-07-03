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
          <ion-title size="large"></ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-button>Start a Workout</ion-button>

      <ion-card color="medium" v-for="workout in workouts">
        <ion-card-header>
          <ion-card-title>Workout#{{ workout.id }}</ion-card-title>
          <ion-card-subtitle>{{ workout.date }} </ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <table>
            <tr>
              <td>
                {{ workout.time }} Min
              </td>
              <td>
                {{ workout.calories }} Cal
              </td>
            </tr>
          </table>
        </ion-card-content>

      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import {
    IonButton,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonFab,
    IonFabButton,
    IonIcon

  } from '@ionic/vue';
  import {
    ref
  } from 'vue';

  const workouts = ref < any > ([]);
  workouts.value = [{
      "user_id": 1,
      "date": "2023-07-01",
      "id": 101,
      "time": 60,
      "calories": 500
    },
    {
      "user_id": 1,
      "date": "2023-07-01",
      "id": 102,
      "time": 45,
      "calories": 400
    },
    {
      "user_id": 1,
      "date": "2023-07-02",
      "id": 103,
      "time": 30,
      "calories": 250
    },
    {
      "user_id": 1,
      "date": "2023-07-02",
      "id": 104,
      "time": 60,
      "calories": 550
    },
    {
      "user_id": 1,
      "date": "2023-07-03",
      "id": 105,
      "time": 75,
      "calories": 700
    }
  ];
</script>