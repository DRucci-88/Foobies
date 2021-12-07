import React from "react";
import {IonBackButton, IonBadge, IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar} from "@ionic/react";
import {bookmark} from "ionicons/icons";
import {useHistory} from "react-router";

const AppBar: React.FC<{
  title: string;
  backButton: boolean;
}> = props => {

  const history = useHistory()

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
          <p className={'ion-no-margin'}>Chef </p>
        </IonTitle>

        <IonButtons slot={'end'} onClick={() => history.push('/favorite')}>
          <IonButton>
            <IonBadge slot={'start'}>0</IonBadge> &nbsp;
            <IonIcon slot={'end'} icon={bookmark}/>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}
export default AppBar;
