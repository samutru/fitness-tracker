<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="workouts" href="/tabs/workouts">
          <ion-icon :icon="flash" />
          <ion-label>My Workouts</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="exercises" href="/tabs/exercises">
          <ion-icon :icon="apps" />
          <ion-label>Exercises</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="visualizations" href="/tabs/visualizations">
          <ion-icon :icon="send" />
          <ion-label>Visualizations</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="profile" href="/tabs/profile">
          <ion-icon :icon="send" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { flash, apps, send } from 'ionicons/icons';
</script>
