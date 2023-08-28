import React from 'react';
import {
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonText,
  IonContent,
  IonTextarea,
} from '@ionic/react';

interface SelectMedicationProps {
  name: string;
}

function SelectMedication() {
  const renderMedication = (item: SelectMedicationProps) => (
    <IonSelectOption value={item.name}>{item.name}</IonSelectOption>
  );
  return (
    <IonContent class="medication-container">
      <IonText class="medication-modal-selection-boxes-title">
        Nome do medicamento
      </IonText>
      <IonTextarea
        placeholder="Medicamento"
        class="medication-text-area"
      >Teste</IonTextarea>
    </IonContent>
  );
}
export default SelectMedication;