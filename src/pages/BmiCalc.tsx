import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTitle, IonToolbar, IonHeader, IonCol, IonGrid, IonInput, IonItem, IonLabel, IonRow, IonButton, IonIcon, IonCard, IonCardContent, IonAlert, IonContent, IonPage, IonBackButton } from '@ionic/react';
import { calculatorOutline, colorFill, colorFillOutline, refreshOutline } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import Home from './Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../theme/variables.css';
import {useRef, useState} from "react";
import { render } from '@testing-library/react';
import { clear } from 'console';

import BtnControls from '../components/BtnControls';
import BmiResult from '../components/BmiResult';
import InputControl from '../components/InputControl';

const BmiCalc: React.FC = () => {
  const [ calculatedBMI, setCalculatedBMI ] = useState<number>();
  const [ categoryBMI, setCategoryBMI ] = useState<string>('');
  const [ color, setColor ] = useState<string>('');
  const [ error, setError ] = useState<string>();
  const [ calcUnits, setCalcUnits ] = useState<'cmkg' | 'ftlbs'>('cmkg');
  const selectCalcUnitHandler = (selectedValue: 'cmkg' | 'ftlbs') => {
    setCalcUnits(selectedValue);
  };

  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);

  const calculateBMI = () => {
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;

    if(
      !enteredWeight || 
      !enteredHeight ||
      +enteredHeight <= 0 ||
      +enteredWeight <= 0)
      {
        setError('Please enter a valid (non-negative) input number.');
        return;
      }

    const weightConvers = calcUnits === 'ftlbs' ? 2.2 : 100;
    const heightConvers = calcUnits === 'ftlbs' ? 3.28 : 1000;

    const weight = +enteredWeight / weightConvers;
    const height = +enteredHeight / heightConvers;

    const bmi = weight / (height * height);

    // const bmi = +enteredWeight / ((+enteredHeight/100) * (+enteredHeight/100));
    
    console.log(bmi);

    setCalculatedBMI(bmi);

    if (bmi < 18.5) {setCategoryBMI('Kurus'); setColor("warning"); }
    else if (bmi >= 18.5 && bmi < 24.99) {setCategoryBMI('Normal'); setColor("success")}
    else if (bmi >= 25 && bmi <= 29.99) {setCategoryBMI('Gemuk'); setColor("warning"); }
    else if (bmi >= 30) {setCategoryBMI('Obesitas'); setColor("danger"); }
  };
  
  const resetInputs = () => {
    weightInputRef.current!.value = "";
    heightInputRef.current!.value = "";
  };

  const clearError = () => {
    setError('');
  };

return (
  <>
    <IonPage>
    <IonAlert 
      isOpen={!!error}
      message={error}
      buttons={[
        { text: 'Okay', handler: clearError }
      ]} />

    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonButton slot="start" color="light">
            <IonBackButton defaultHref="home" />
          </IonButton>
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
              <IonGrid className="ion-no-padding">
              <IonRow>
                <IonCol>
                  <InputControl selectedValue = {calcUnits} onSelectValue={selectCalcUnitHandler}/>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel position="floating">Tinggi Badan ({calcUnits === 'cmkg' ? 'cm' : 'feet'})</IonLabel>
                    <IonInput ref={heightInputRef}></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel position="floating">Berat Badan ({calcUnits === 'cmkg' ? 'kg' : 'lbs'})</IonLabel>
                    <IonInput ref={weightInputRef}></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>

              <BtnControls onCalculate={calculateBMI} onReset={resetInputs} />
              {calculatedBMI && <BmiResult 
              calcBMI = {calculatedBMI} 
              category = {categoryBMI} 
              color = {color}/> }
              
              </IonGrid>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
    </IonPage>
    </>
  )
};

export default BmiCalc;
