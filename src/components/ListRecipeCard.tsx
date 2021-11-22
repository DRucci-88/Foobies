import React from "react";
import {HomeHit} from "../data/static-recipe";
import {IonCard, IonCardContent, IonCardTitle, IonCol, IonImg, IonRow} from "@ionic/react";

const ListRecipeCard: React.FC<{
  listRecipe: HomeHit[];
  goToRecipe: (href: string) => void;
}> = props => {

  return (
    <IonRow>
      {props.listRecipe.map((recipe, index) => {
        return(
          <IonCol size={'6'} sizeSm={'4'} sizeMd={'3'} key={index}>
            <IonCard
              onClick={() => props.goToRecipe(recipe._links.self.href)}>
              <IonCardContent>
                <IonCardTitle>
                  {recipe.recipe.label}
                </IonCardTitle>
              </IonCardContent>
              <IonImg src={recipe.recipe.image} />
            </IonCard>
          </IonCol>
        )
      })}

    </IonRow>
  )
}

export default ListRecipeCard;
