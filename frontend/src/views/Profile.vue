<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Profile</ion-title>
        </ion-toolbar>
      </ion-header>
      <h1>Welcome, {{ userInfo?.loginName }}!</h1>

      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card color="primary">
            <ion-card-header>
          <ion-card-title>Weight: {{ userInfo?.weight }}</ion-card-title>
        </ion-card-header>
      </ion-card>
          </ion-col>
          <ion-col>
            <ion-card color="primary">
        <ion-card-header>
          <ion-card-title>BMI: {{ userInfo?.bmi }}</ion-card-title>
        </ion-card-header>
      </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card color="primary">
        <ion-card-header>
          <ion-card-title>Height: {{ userInfo?.height }}</ion-card-title>
        </ion-card-header>
      </ion-card>
          </ion-col>
          <ion-col>
            <ion-card color="primary">
        <ion-card-header>
          <ion-card-title>Age: {{ userInfo?.age }}</ion-card-title>
        </ion-card-header>
      </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
      

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonRow, IonCol, IonGrid } from '@ionic/vue';
import { UseUserInfo } from '../composables/useUserInfo';

const { userInfo, getTheUserInfos } = UseUserInfo();
</script>