import React, {  useState} from "react";
import {
    IonButton,
    IonCol,
    IonContent, IonFab, IonFabButton, IonIcon, IonItem, IonItemDivider,
    IonLabel, IonList,
    IonPage,
    IonRow,
    IonSearchbar,
    IonSelect,
    IonSelectOption,
} from "@ionic/react";
import AppBar from "../components/AppBar";
import {add} from "ionicons/icons";

const Cook: React.FC = () => {
    const [toppings1, setToppings1] = useState<string[]>([]);
    const [toppings2, setToppings2] = useState<string[]>([]);
    const [toppings3, setToppings3] = useState<string[]>([]);
    const [toppings4, setToppings4] = useState<string[]>([]);


    return(
        <IonPage>
            <AppBar title={'Recipe'} backButton={true}/>

            <IonContent >
                <IonRow >
                    <p className={'ion-margin-horizontal'}> Tak perlu lagi mau masak apa hari ini. Tinggal pilih bahan yang kamu punya (Pilih minimal 2 bahan)</p>
                    <IonCol size={'8'}>
                    <IonSearchbar
                            // ref="#"
                            placeholder={'Search some food...'}/>
                        </IonCol>
                        <IonCol size={'4'} className={'ion-align-self-center'}>
                            <IonButton
                                // onClick="#"
                                expand={'block'} className={'ion-no-margin '}>
                                Search
                            </IonButton>
                        </IonCol>
                </IonRow>
                <IonItem>
                    <IonLabel>Bahan Makanan 1</IonLabel>
                    <IonSelect value={toppings1} multiple={false} cancelText="Nah" okText="Okay!" onIonChange={e => setToppings1(e.detail.value)}>
                        <IonSelectOption value="bacon">Bacon</IonSelectOption>
                        <IonSelectOption value="olives">Black Olives</IonSelectOption>
                        <IonSelectOption value="xcheese">Extra Cheese</IonSelectOption>
                        <IonSelectOption value="peppers">Green Peppers</IonSelectOption>
                        <IonSelectOption value="mushrooms">Mushrooms</IonSelectOption>
                        <IonSelectOption value="onions">Onions</IonSelectOption>
                        <IonSelectOption value="pepperoni">Pepperoni</IonSelectOption>
                        <IonSelectOption value="pineapple">Pineapple</IonSelectOption>
                        <IonSelectOption value="sausage">Sausage</IonSelectOption>
                        <IonSelectOption value="Spinach">Spinach</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem>
                    <IonLabel>Bahan Makanan 2</IonLabel>
                    <IonSelect value={toppings2} multiple={false} cancelText="Nah" okText="Okay!" onIonChange={e => setToppings2(e.detail.value)}>
                        <IonSelectOption value="bacon">Bacon</IonSelectOption>
                        <IonSelectOption value="olives">Black Olives</IonSelectOption>
                        <IonSelectOption value="xcheese">Extra Cheese</IonSelectOption>
                        <IonSelectOption value="peppers">Green Peppers</IonSelectOption>
                        <IonSelectOption value="mushrooms">Mushrooms</IonSelectOption>
                        <IonSelectOption value="onions">Onions</IonSelectOption>
                        <IonSelectOption value="pepperoni">Pepperoni</IonSelectOption>
                        <IonSelectOption value="pineapple">Pineapple</IonSelectOption>
                        <IonSelectOption value="sausage">Sausage</IonSelectOption>
                        <IonSelectOption value="Spinach">Spinach</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem>
                    <IonLabel>Bahan Makanan 3</IonLabel>
                    <IonSelect value={toppings3} multiple={false} cancelText="Nah" okText="Okay!" onIonChange={e => setToppings3(e.detail.value)}>
                        <IonSelectOption value="bacon">Bacon</IonSelectOption>
                        <IonSelectOption value="olives">Black Olives</IonSelectOption>
                        <IonSelectOption value="xcheese">Extra Cheese</IonSelectOption>
                        <IonSelectOption value="peppers">Green Peppers</IonSelectOption>
                        <IonSelectOption value="mushrooms">Mushrooms</IonSelectOption>
                        <IonSelectOption value="onions">Onions</IonSelectOption>
                        <IonSelectOption value="pepperoni">Pepperoni</IonSelectOption>
                        <IonSelectOption value="pineapple">Pineapple</IonSelectOption>
                        <IonSelectOption value="sausage">Sausage</IonSelectOption>
                        <IonSelectOption value="Spinach">Spinach</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem>
                    <IonLabel>Bahan Makanan 4</IonLabel>
                    <IonSelect value={toppings4} multiple={false} cancelText="Nah" okText="Okay!" onIonChange={e => setToppings4(e.detail.value)}>
                        <IonSelectOption value="bacon">Bacon</IonSelectOption>
                        <IonSelectOption value="olives">Black Olives</IonSelectOption>
                        <IonSelectOption value="xcheese">Extra Cheese</IonSelectOption>
                        <IonSelectOption value="peppers">Green Peppers</IonSelectOption>
                        <IonSelectOption value="mushrooms">Mushrooms</IonSelectOption>
                        <IonSelectOption value="onions">Onions</IonSelectOption>
                        <IonSelectOption value="pepperoni">Pepperoni</IonSelectOption>
                        <IonSelectOption value="pineapple">Pineapple</IonSelectOption>
                        <IonSelectOption value="sausage">Sausage</IonSelectOption>
                        <IonSelectOption value="Spinach">Spinach</IonSelectOption>
                    </IonSelect>
                </IonItem>
                    <IonList>
                        <IonItemDivider>
                            <IonLabel>A</IonLabel>
                        </IonItemDivider>
                        <IonItem lines={"none"}
                        // onClick={fabActivated}
                        >
                            <IonLabel>Ayam</IonLabel>
                        </IonItem>
                        <IonItem lines={"none"}>
                            <IonLabel>Almond</IonLabel>
                        </IonItem>
                        <IonItemDivider>
                            <IonLabel>B</IonLabel>
                        </IonItemDivider>
                        <IonItem lines={"none"}>
                            <IonLabel>Brocoli</IonLabel>
                        </IonItem>
                        <IonItem lines={"none"}>
                            <IonLabel>Bacon</IonLabel>
                        </IonItem>
                    </IonList>
                <IonFab vertical="bottom" horizontal="end" slot="fixed" >
                    <IonFabButton >
                        <IonIcon icon={add} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    )
}
export default Cook;
