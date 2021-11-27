import React from "react";
import AppBar from "../components/AppBar";
import {IonPage} from "@ionic/react";

const CookResult: React.FC = () => {

    return (
        <IonPage>
            <AppBar title={'Hasil Pencarian'} backButton={false}/>
        </IonPage>
    )
}
export default CookResult;