import React from "react";
import {IonCard, IonContent, IonItem, IonLabel, IonList, IonListHeader, IonPage} from "@ionic/react";

import './Favorite.scss';
import AppBar from "../components/AppBar";
const Favorite: React.FC = () => {
  return(
      <IonPage>
          <AppBar title={'Favorite'} backButton={true}/>
        <IonContent className="ion-padding">
          <IonCard className={'titleFav'}>
            <h2>Favorite</h2>
          </IonCard>
          <IonList className={'background_list'}>
            <IonListHeader> My Favorite</IonListHeader>
            <IonItem className="itemList">
              <img className={'images'} src={'assets/example/kids.png'} alt={'bocah'}/>
              <IonLabel color="dark"> Makanan</IonLabel>
            </IonItem>
          </IonList>

        </IonContent>
      </IonPage>
  )
}

export default Favorite;