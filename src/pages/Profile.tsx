import React, {useEffect, useState} from "react";
import {
  IonButton,
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
import {useHistory} from "react-router";
import { GoogleAuthProvider, getAuth, getRedirectResult, signInWithRedirect } from 'firebase/auth';

const Profile: React.FC = () => {

  const provider = new GoogleAuthProvider();
  const auth = getAuth()

  const history = useHistory();
  const [isSingIn, setIsSignIn] = useState<Boolean>(false)
  const [username, setUsername] = useState<string>('')
  const [photoUrl, setPhotoUrl] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  useEffect(() => {
    const auth = getAuth()

    auth.onAuthStateChanged((user) => {
      if (user){
        setIsSignIn(true)
        setUsername(user.displayName!!)
        setEmail(user.email!!)
        setPhotoUrl(user.photoURL!!)
        console.log(user)

      }
      else {
        getRedirectResult(auth)
          .then((result) => {
            console.log(result?.providerId)
            console.log(result?.user)
            console.log(result?.user.uid)
            console.log(result?.user.providerId)
            console.log(result?.user.metadata)
            console.log(result?.user.displayName)
            console.log(result?.user.photoURL)
            console.log(result?.user.email)
            console.log(result?.user.providerData)
          })
          .catch((error) => {
            console.log("ERROR LER");
            console.log(error)
          })
      }
    })

  },[])

  // https://firebase.google.com/docs/reference/js/auth.user.md#user_interface
  const signInWithFirebase = () => {
    signInWithRedirect(auth, provider).then()
  }

  return(
    <IonPage className={profileStyle.profile}>

      <AppBar title={'Profile'} backButton={false}/>

      <IonContent>

        <div className={ profileStyle.topHeader }/>

        {isSingIn && (
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol size="12" className="ion-justify-content-center ion-align-items-center ion-text-center">
                <IonCard className={ profileStyle.profileHeader }>
                  <IonCardContent>
                    <IonCardTitle slot= "start">{username}</IonCardTitle>
                    <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
                      
                        <IonCol size="4">
                          <img src={photoUrl === '' ? 'assets/example/kids.png' : photoUrl}
                               alt="avatar"
                               className={ profileStyle.avatar } />
                        </IonCol>

                        <IonCol size="12">
                          <IonText color="dark" className={ profileStyle.profileName }>
                            <h2>{email}</h2>
                          </IonText>
                        </IonCol>
                     
                    </IonRow>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        )}


        <IonGrid onClick={() => history.push('/aboutUs')} >
          <IonRow className={ profileStyle.profileActionContainer }>
            <IonCol size="12">
              <IonCard className={ profileStyle.profileActionCard }>
                <IonCardContent>
                  <IonRow className="ion-justify-content-between">
                    <IonCardSubtitle>About Us</IonCardSubtitle>
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

        {isSingIn ?
        <IonRow className={ profileStyle.signout1Style }>
            <IonButton expand={'block'} onClick={() => auth.signOut()} className={ profileStyle.signoutStyle }>Sign Out</IonButton>
        </IonRow>
          :
        <IonRow className={ profileStyle.signin1Style }>
          <IonButton expand={'block'} onClick={() => signInWithFirebase()} className={ profileStyle.signinStyle }>Sign In</IonButton>
        </IonRow>
        }

      </IonContent>

    </IonPage>
  )
}

export default Profile;