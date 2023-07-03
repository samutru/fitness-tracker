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

      <ion-card v-for="exercise in exercises">
        <ion-card-header>
          <ion-card-title>{{ exercise.id }} - {{ exercise.name }}</ion-card-title>
        </ion-card-header>
        <ion-card-content> {{ exercise.description }} </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonSearchbar } from '@ionic/vue';
import { ref } from 'vue';

const exercises = ref<any>([]);

exercises.value = [
  { id: 1, name: 'Push-ups', description: 'Keep your body straight and lower it by bending your arms. Push up until your arms are straight.' },
  { id: 2, name: 'Squats', description: 'Stand straight with feet hip-width apart, and bend your knees as if you were going to sit.' },
  { id: 3, name: 'Lunges', description: 'Step forward with one foot and lower your body until your front knee is bent at a 90 degree angle.' },
  { id: 4, name: 'Plank', description: 'Hold your body up off the ground in a straight line from your head to your heels.' },
  { id: 5, name: 'Sit-ups', description: 'Lie down on your back, bend your legs and lift your upper body towards your knees.' },
  { id: 6, name: 'Pull-ups', description: 'Grip the bar with your hands and pull your body up until your chin is over the bar.' },
  { id: 7, name: 'Bicep curls', description: 'With a weight in your hand, bend your elbow and curl the weight towards your shoulder.' },
  { id: 8, name: 'Tricep dips', description: 'Grip the edge of a bench or chair, slide your bottom off, and dip down by bending your elbows.' },
  { id: 9, name: 'Jumping jacks', description: 'Stand upright, then jump while spreading your arms and legs, return to standing and repeat.' },
  { id: 10, name: 'Mountain climbers', description: 'Start in a plank position and alternately drive your knees towards your chest, like running in place.' },
];

</script>
