import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'ppw-angular-21-c4977',
        appId: '1:499867170399:web:5a7c5c0dc51a0aaeaf8dea',
        storageBucket: 'ppw-angular-21-c4977.firebasestorage.app',
        apiKey: 'AIzaSyAyFjUx6v-HrVdXv445clymrsmH6nOMuM4',
        authDomain: 'ppw-angular-21-c4977.firebaseapp.com',
        messagingSenderId: '499867170399',
        measurementId: 'G-CD65J1QLM2',
        // Se eliminaron 'projectNumber' y 'version' para cumplir el tipado oficial de FirebaseOptions
      }),
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};