import React, {useEffect, useState} from "react";
import {
  IonAvatar,
  IonCard, IonCol,
  IonContent, IonGrid, IonIcon,
  IonImg,
  IonItem, IonItemOption, IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRow
} from "@ionic/react";

import './Favorite.scss';
import AppBar from "../components/AppBar";
import {FavFirebase} from "../data/favFirebase";
import {trash} from "ionicons/icons";

const Favorite: React.FC = () => {

  const [favList, setFavList] = useState<FavFirebase[]>([])

  useEffect(() => {
    const stored : FavFirebase[] = JSON.parse(sessionStorage.getItem('fav')!)
    setFavList(stored)
  },[])

  return (
    <IonPage>
      <AppBar title={'Favorite'} backButton={true}/>
      <IonContent className="ion-padding">
        <IonCard className={'titleFav'}>
          <h2>Favorite</h2>
        </IonCard>

        {favList.map((fav, index) => (
          <IonItemSliding key={fav.id}>
            <IonItemOptions slot={'end'}>
              <IonItemOption color={'primary'} onClick={() => ''}>
                <IonIcon slot={'icon-only'} icon={trash}/>
              </IonItemOption>
            </IonItemOptions>

            <IonItem>
              <IonGrid className={''}>
                <IonRow>
                  <IonCol>
                      <IonImg src={fav.image} alt={fav.name}/>
                  </IonCol>
                  <IonCol>
                      <h2>{fav.name}</h2>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>

          </IonItemSliding>
        ))}

        {/*{favList.map( (fav, index) => {*/}
        {/*  return (*/}
        {/*    <IonList className={'background_list'}>*/}
        {/*      <IonItem className="itemList">*/}
        {/*        <IonImg className={'images'} src={fav.image} alt={'image'}/>*/}
        {/*        /!*<IonImg src={fav.image} alt={fav.name} className={'image'}/>*!/*/}
        {/*        <IonLabel color="dark">{fav.name}</IonLabel>*/}
        {/*      </IonItem>*/}
        {/*    </IonList>*/}
        {/*  )*/}
        {/*})}*/}


      </IonContent>
    </IonPage>
  )
}

export default Favorite;