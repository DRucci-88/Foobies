import React from "react";
import AppBar from "../components/AppBar";
import {IonPage} from "@ionic/react";

const CookResult: React.FC = () => {

    return (
        <IonPage>
            <AppBar title={'Hasil Pencarian'} backButton={true}/>
        </IonPage>
    )
}
export default CookResult;