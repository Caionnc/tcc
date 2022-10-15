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
import { medicationName } from 'assets/json/index';

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

{
  /* <IonItem>
        <IonSelect interface="popover" placeholder={'Medicamento'}>
          {medicationName.map(item => {
            return renderMedication(item);
          })}
        </IonSelect>
      </IonItem> */
}
