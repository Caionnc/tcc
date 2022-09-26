import { IonImg, IonText } from '@ionic/react';
import { logoPills, IconCloseCircle } from 'assets';
import React from 'react';

import './styles.css';

const Medication = () => {
  return (
    <div className="medication-container">
      <IonImg src={logoPills}></IonImg>
      <div className="medication-texts">
        <IonText class="medication-texts-title">Remédio</IonText>
        <IonText class="medication-texts-subtitle">x vezes ao período 100mg</IonText>
      </div>
      <IconCloseCircle color="#c9c7c9" />
    </div>
  );
};
export default Medication;
