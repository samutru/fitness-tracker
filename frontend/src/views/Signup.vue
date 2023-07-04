<template>
  <ion-page>
    <ion-content :fullscreen="true" padding>
      <ion-grid>
        <ion-row justify-content-center>
          <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">
            <div text-center>
              <h1>FitnessTracker</h1>
              <h3>signup or <a href="/login"> login</a></h3>
            </div>
            <div padding>
              <ion-item>
                <ion-input type="text" placeholder="Login Name" v-model="username"></ion-input>
              </ion-item>
              <ion-item>
                <ion-input type="password" placeholder="Password" v-model="password"></ion-input>
              </ion-item>
              <ion-item>
                <ion-input type="number" placeholder="Age" v-model="age"></ion-input>
              </ion-item>
              <ion-item>
                <ion-input type="number" placeholder="Heigth in CM" v-model="height"></ion-input>
              </ion-item>
              <ion-item>
                <ion-input type="number" placeholder="Weight in KG" v-model="weight"></ion-input>
              </ion-item>
            </div>
            <div padding>
              <ion-button size="large" @click="signupUser" expand="block">Signup</ion-button>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonInput,
  IonRow,
  IonCol,
  IonGrid,
  IonButton,
  IonItem,
} from "@ionic/vue";
import { UseSignup } from "../composables/useSignup";

const { username, password, height, weight, age, signupUser} = UseSignup();


</script>