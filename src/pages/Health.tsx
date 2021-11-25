import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonApp, IonRouterOutlet, IonButton, IonCol, IonCard } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React from "react";
import { Route, Redirect } from "react-router";
// import './Health.css';

const Health: React.FC = () => {
    return (
    <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle className="ion-text-center">Health</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">


        </IonContent>
        </IonPage>
    );
  };
  
  export default Health;