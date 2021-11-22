import React from "react";
import {
  IonCard, IonCardContent, IonCardSubtitle, IonCardTitle,
  IonCol, IonContent,
  IonGrid,
  IonIcon,
  IonPage,
  IonRow, IonText,
} from "@ionic/react";
import profileStyle from './Profile.module.scss'
import {arrowForward} from "ionicons/icons";
import AppBar from "../components/AppBar";

const Profile: React.FC = () => {
  return(
    <IonPage className={profileStyle.profile}>

      <AppBar title={'Profile'} backButton={false}/>

      <IonContent>

        <div className={ profileStyle.topHeader }/>

        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" className="ion-justify-content-center ion-align-items-center ion-text-center">
              <IonCard className={ profileStyle.profileHeader }>

                <IonCardContent>
                  <IonCardTitle slot= "start">Profile</IonCardTitle>
                  <IonRow>
                    <IonCard>
                      <IonCol size="4">
                        <img src={'assets/example/kids.png'} alt="avatar" className={ profileStyle.avatar } />
                      </IonCol>
                      <IonCol size="12">
                        <IonText color="dark" className={ profileStyle.profileName }>
                          <p>Kids</p>
                        </IonText>
                      </IonCol>
                    </IonCard>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow className={ profileStyle.profileActionContainer }>
            <IonCol size="12">
              <IonCard className={ profileStyle.profileActionCard }>
                <IonCardContent>
                  <IonRow className="ion-justify-content-between">
                    <IonCardSubtitle>history</IonCardSubtitle>
                    <IonIcon icon={ arrowForward } />
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow className={ profileStyle.profileActionContainer }>
            <IonCol size="12">
              <IonCard className={ profileStyle.profileActionCard }>
                <IonCardContent>
                  <IonRow className="ion-justify-content-between">
                    <IonCardSubtitle>Favorite  Recipes</IonCardSubtitle>
                    <IonIcon icon={ arrowForward } />
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow className={ profileStyle.profileActionContainer }>
            <IonCol size="12">
              <IonCard className={ profileStyle.profileActionCard }>
                <IonCardContent>
                  <IonRow className="ion-justify-content-between">
                    <IonCardSubtitle>FAQ</IonCardSubtitle>
                    <IonIcon icon={ arrowForward } />
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>

    </IonPage>
  )
}

export default Profile;