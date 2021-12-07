import React from "react";
import {IonCard, IonContent, IonItem, IonLabel, IonList, IonListHeader, IonPage} from "@ionic/react";

import './Favorite.css';
const Favorite: React.FC = () => {
  return(
      <IonPage>
        <IonContent className="ion-padding">
          <IonCard className="titleFav">
            <h2>Favorite</h2>
          </IonCard>
          <IonList className={"background_list"}>
            <IonListHeader> My Favorite</IonListHeader>
            <IonItem className="itemList">
              <img className={'images'} src={'assets/example/kids.png'}/>
              <IonLabel className="name"> Makanan</IonLabel>
            </IonItem>
          </IonList>

        </IonContent>
      </IonPage>
  )
}

export default Favorite;