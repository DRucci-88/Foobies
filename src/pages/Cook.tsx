import React, {useEffect, useState} from "react";
import {
  IonButton,
  IonCol,
  IonContent, IonFab, IonFabButton, IonIcon, IonItem, IonItemDivider,
  IonLabel, IonList,
  IonPage,
  IonRow,
  IonSearchbar,
  IonSelect,
  IonSelectOption, useIonAlert, useIonLoading,
} from "@ionic/react";
import AppBar from "../components/AppBar";
import {add} from "ionicons/icons";
import cookStyle from './Cook.module.scss'
import {cookQuery} from "../data/cook-data";
import {getListRecipeWithQuery} from "../data/config-api";
import {HomeHit} from "../data/static-recipe";
import axios from "axios";
import {useHistory} from "react-router";
import ListRecipeCard from "../components/ListRecipeCard";

const Cook: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [diet, setDiet] = useState<string>("");
  const [mealType, setMealType] = useState<string>("");
  const [cuisineType, setCuisineType] = useState<string>("");
  const [presentCookLoader, dismissCookLoader] = useIonLoading();
  const [listRecipe, setListRecipe] = useState<HomeHit[]>([])
  const [errorAlert] = useIonAlert()
  const history = useHistory()

  const recipeResult = async () => {
    // console.log(ingredients)
    // console.log(diet)
    // console.log(mealType)
    // console.log(cuisineType)
    const url = getListRecipeWithQuery(ingredients, diet, mealType, cuisineType);
    console.log(url);
    // presentCookLoader({
    //   message: "Please Wait ...",
    //   spinner: 'bubbles',
    //   backdropDismiss: true,
    //   duration: 4000
    // });
    // await axios.get(url)
    //   .then((response) => {
    //     setListRecipe(response.data.hits)
    //   })
    //   .catch((error)=>{
    //     errorAlert(error.response.data[0].message)
    //   });
    // setTimeout(() => {
    //   dismissCookLoader();
    // }, 300);
  }

  const goToRecipeHandler = (href: string) => {
    const id = href.split('?')[0].split('/')[6];
    console.log(id);
    history.replace(`/recipe/${id}`);
  }

  return (
    <IonPage>
      <AppBar title={'Recipe'} backButton={false}/>

      <IonContent>
        <IonRow>
          <p className={'ion-margin-horizontal'}> Tak perlu pusing lagi mau masak apa hari ini. Tinggal pilih bahan yang kamu
            punya (Pilih minimal 2 bahan)</p>
        </IonRow>
        <IonItem>
          <IonLabel>Bahan Makanan </IonLabel>
          <IonSelect value={ingredients} multiple={true} cancelText="Nah" okText="Okay!"
                     onIonChange={e => setIngredients(e.detail.value)}>
            {cookQuery.ingredients.map((value => (
              <IonSelectOption key={value} value={value}>{value}</IonSelectOption>
            )))}
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>Diet </IonLabel>
          <IonSelect value={diet} multiple={false} cancelText="Nah" okText="Okay!"
                     onIonChange={e => setDiet(e.detail.value)}>
            {cookQuery.diet.map((value => (
              <IonSelectOption key={value} value={value}>{value}</IonSelectOption>
            )))}
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>Meal Type </IonLabel>
          <IonSelect value={mealType} multiple={false} cancelText="Nah" okText="Okay!"
                     onIonChange={e => setMealType(e.detail.value)}>
            {cookQuery.mealType.map((value => (
              <IonSelectOption key={value} value={value}>{value}</IonSelectOption>
            )))}
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>Cuisine Type </IonLabel>
          <IonSelect value={cuisineType} multiple={false} cancelText="Nah" okText="Okay!"
                     onIonChange={e => setCuisineType(e.detail.value)}>
            {cookQuery.cuisineType.map((value => (
              <IonSelectOption key={value} value={value}>{value}</IonSelectOption>
            )))}
          </IonSelect>
        </IonItem>

        <IonButton expand={'block'} onClick={recipeResult}>Search</IonButton>

        <ListRecipeCard listRecipe={listRecipe} goToRecipe={goToRecipeHandler}/>

        {/*<IonList>*/}
        {/*  <IonItemDivider>*/}
        {/*    <IonLabel>A</IonLabel>*/}
        {/*  </IonItemDivider>*/}
        {/*  <IonItem lines={"none"}>*/}
        {/*    <IonLabel>Ayam</IonLabel>*/}
        {/*  </IonItem>*/}
        {/*  <IonItem lines={"none"}>*/}
        {/*    <IonLabel>Almond</IonLabel>*/}
        {/*  </IonItem>*/}
        {/*  <IonItemDivider>*/}
        {/*    <IonLabel>B</IonLabel>*/}
        {/*  </IonItemDivider>*/}
        {/*  <IonItem lines={"none"}>*/}
        {/*    <IonLabel>Brocoli</IonLabel>*/}
        {/*  </IonItem>*/}
        {/*  <IonItem lines={"none"}>*/}
        {/*    <IonLabel>Bacon</IonLabel>*/}
        {/*  </IonItem>*/}
        {/*</IonList>*/}
        {/*<IonFab vertical="bottom" horizontal="end" slot="fixed">*/}
        {/*  <IonFabButton>*/}
        {/*    <IonIcon icon={add}/>*/}
        {/*  </IonFabButton>*/}
        {/*</IonFab>*/}
      </IonContent>
    </IonPage>
  )
}
export default Cook;
