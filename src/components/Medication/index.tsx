import { IonImg, IonText } from '@ionic/react';
import { logoPills, IconCloseCircle } from 'assets';
import { IMedication } from 'pages/Home';
import React from 'react';

import './styles.css';

interface MedicationProps {
  medication: IMedication;
}

const Medication = ({medication}: MedicationProps) => {
  return (
    <div className="medication-container">
      <IonImg src={logoPills}></IonImg>
      <div className="medication-texts">
        <IonText class="medication-texts-title">Remedio</IonText>
        <IonText class="medication-texts-subtitle">
          qtde x vezes ao periodo 
        </IonText>
      </div>
      <IconCloseCircle color="#c9c7c9" />
    </div>
  );
};
export default Medication;
