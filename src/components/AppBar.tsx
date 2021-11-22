import React from "react";
import {IonBackButton, IonBadge, IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar} from "@ionic/react";
import {bookmark} from "ionicons/icons";

const AppBar: React.FC<{
  title: string;
  backButton: boolean;
}> = props => {
  return (
    <IonHeader className={'ion-no-margin'}>
      <IonToolbar>
        {props.backButton && (
          <IonButtons slot={'start'}>
            <IonBackButton/>
          </IonButtons>
        )}
        <IonTitle>
          {props.title}
          <p className={'ion-no-margin'}>Name </p>
        </IonTitle>

        <IonButtons slot={'end'}>
          <IonButton>
            <IonBadge slot={'start'}>0</IonBadge> &nbsp;
            Bookmark
            <IonIcon slot={'end'} icon={bookmark}/>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}
export default AppBar;
