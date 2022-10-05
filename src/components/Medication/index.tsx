import { IonImg, IonText } from '@ionic/react';
import { logoPills, IconCloseCircle } from 'assets';
import { IMedication } from 'pages/Home';
import React from 'react';

import './styles.css';

interface MedicationProps {
  medication: IMedication;
  deleteMedication(medicationToBeDeleted: string): void;
}

const Medication = ({ medication, deleteMedication }: MedicationProps) => {
  return (
    <div className="medication-container">
      <IonImg src={logoPills}></IonImg>
      <div className="medication-texts">
        <IonText class="medication-texts-title">{medication.name}</IonText>
        <IonText class="medication-texts-subtitle">
          {`${medication.quantity}` +
            `${medication.dosage}` +
            'vezes ao' +
            `${medication.period}`}
        </IonText>
      </div>
      <button className="medication-close-button" onClick={() => deleteMedication(medication.name)}>
        <IconCloseCircle color="#c9c7c9" />
      </button>
    </div>
  );
};
export default Medication;
