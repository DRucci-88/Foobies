import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonApp, IonRouterOutlet, IonButton, IonCol, IonCard } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React from "react";
import { Route, Redirect } from "react-router";
import './Health.css';

const Health: React.FC = () => {
    return (
    <IonPage>
        <IonHeader className="headerStyle">
          <IonToolbar className="title1Health">
            <IonTitle className="ion-text-center">
                <p>Health</p>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <IonCard className="titleHealth">
                <h2>- - Please Choose - -</h2>
            </IonCard>

            <IonCard color="light" routerLink={'/bmi'} className="bmiStyle">
                <div className="bmi">
                    <img src="assets/images/bmi.png" alt="" />
                </div>
            </IonCard>

            <IonCard color="light" routerLink={'/bmr'} className="bmrStyle">
                <div className="bmr">
                    <img src="assets/images/bmr.png" alt="" />
                </div>
            </IonCard>
          
        </IonContent>
    </IonPage>
    );
  };
  
  export default Health;