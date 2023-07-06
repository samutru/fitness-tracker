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
      <div style="text-align: center;">
        <ion-button @click="openCloseModal(true)">Edit</ion-button>
      </div>
      
      <ion-modal :is-open="openProfile">
        <ion-header>
          <ion-toolbar>
            <ion-title>Edit</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="openCloseModal(false)">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-item>
            <ion-input type="number" placeholder="Age" v-model="age"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input type="number" placeholder="Heigth in CM" v-model="height"></ion-input>
          </ion-item>
          <ion-item>
             <ion-input type="number" placeholder="Weight in KG" v-model="weight"></ion-input>
          </ion-item>
          <ion-button @click="updateUserInfos()">Save</ion-button>
        </ion-content>
      </ion-modal>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonRow, IonCol, IonGrid, IonButton, IonButtons, IonModal, IonItem, IonInput} from '@ionic/vue';
import { UseUserInfo } from '../../composables/useUserInfo';
import { ref } from 'vue';
import { UserInfo } from '@/model/userInfo';

const { userInfo, age, height, weight, openProfile, openCloseModal, updateUserInfos, getTheUserInfos } = UseUserInfo();

</script>