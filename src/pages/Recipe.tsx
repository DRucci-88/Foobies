import React, {useCallback, useEffect, useState} from "react";
import {
  IonBadge,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonRow,
  IonCardTitle,
  IonCardSubtitle,
  IonCol,
  IonGrid,
  IonList,
  IonListHeader,
  IonLabel,
  IonItem, IonImg, useIonAlert
} from "@ionic/react";
import recipeStyle from './Recipe.module.scss';
import {useParams} from "react-router";
import {bookmark, layersOutline, peopleOutline, scaleOutline, timeOutline} from "ionicons/icons";
import axios from "axios";
import {Hit} from "../data/recipe-response";
import {getRecipeURLWithId1} from "../data/config-api";

const Recipe: React.FC = () => {

  // https://stackoverflow.com/questions/63635997/how-to-access-route-params-from-react-router-dom-using-typescript-ex-some-ro
  const id = useParams<{id: string}>();
  const url = getRecipeURLWithId1(id.id);
  const [recipeAPI, setRecipeAPI] = useState<Hit>();
  const [errorAlert] = useIonAlert();

  useEffect(  () => {
    console.log(id);
    console.log(url);

    axios.get(url)
      .then((response) => {
        setRecipeAPI(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.status);
        errorAlert(error.response.data[0].message);
      })
  },[]);

  useCallback(async () => {
    console.log(id);
    // await axios.get(url).then((response) => {
    //   console.log(response);
    // })
  },[id])

  return (
    <IonPage>
      <IonHeader className={'ion-no-margin'}>
        <IonToolbar>
          <IonButtons slot={'start'}>
            <IonBackButton/>
          </IonButtons>
          <IonTitle>Recipe Detail</IonTitle>

          <IonButtons slot={'end'}>
            <IonButton>
              <IonBadge slot={'start'}>0</IonBadge> &nbsp;
              Bookmark
              <IonIcon slot={'end'} icon={bookmark}/>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <div className={ recipeStyle.headerImage }>
          <img src={ recipeAPI?.recipe.image } alt="main cover" />
          <div className={ `${ recipeStyle.headerInfo }` }>
            <h1>{recipeAPI?.recipe.label}</h1>
            <p>{recipeAPI?.recipe.dishType[0]}</p>
            <p>{recipeAPI?.recipe.mealType[0]}</p>
            <p>{recipeAPI?.recipe.cuisineType[0]}</p>
          </div>
        </div>

        <IonGrid>
          <IonRow className="ion-text-center">
            <IonCol size="6" sizeSm={'3'}>
              <IonCardTitle>
                <IonIcon icon={ peopleOutline } />
              </IonCardTitle>
              <IonCardSubtitle>serves {recipeAPI?.recipe.yield}</IonCardSubtitle>
            </IonCol>
            <IonCol size="6" sizeSm={'3'}>
              <IonCardTitle>
                <IonIcon icon={ timeOutline } />
              </IonCardTitle>
              <IonCardSubtitle>{recipeAPI?.recipe.totalTime ? `${recipeAPI.recipe.totalTime} mins` : "N/A"}</IonCardSubtitle>
            </IonCol>
            <IonCol size="6" sizeSm={'3'}>
              <IonCardTitle>
                <IonIcon icon={ scaleOutline } />
              </IonCardTitle>
              <IonCardSubtitle>{recipeAPI?.recipe.totalWeight.toFixed()}g</IonCardSubtitle>
            </IonCol>
            <IonCol size={'6'} sizeSm={'3'}>
              <IonCardTitle>
                <IonIcon icon={ layersOutline }/>
              </IonCardTitle>
              <IonCardSubtitle>{recipeAPI?.recipe.calories.toFixed()} calories</IonCardSubtitle>
            </IonCol>
          </IonRow>

          <IonRow className={'ion-text-center'}>

          </IonRow>

          <IonList>
            <IonListHeader lines={'full'}>
              <IonLabel>Ingredients ({recipeAPI?.recipe.ingredients.length})</IonLabel>
            </IonListHeader>
            {recipeAPI?.recipe.ingredients.map((ingredient, index) => {
              return (
                <IonItem key={index} lines={'full'} className={recipeStyle.ingredientItem}>
                  <IonImg src={ingredient.image} className={ recipeStyle.ingredientImg }/>
                  <IonLabel className={'ion-margin-start'}>
                    <h2>{ingredient.text}</h2>
                  </IonLabel>
                </IonItem>
              )
            })}

          </IonList>

        </IonGrid>

      </IonContent>
    </IonPage>
  )
}

export default Recipe;