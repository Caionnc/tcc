import React from 'react';
import { IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import { medicationName } from 'assets/json/index';

interface SelectMedicationProps {
  name: string;
}

function SelectMedication() {
  const renderMedication = (item: SelectMedicationProps) => (
    <IonSelectOption value={item.name}>{item.name}</IonSelectOption>
  );
  return (
    <IonList>
      <IonItem>
        <IonSelect interface="popover" placeholder={'Medicamento'}>
          {medicationName.map(item => {
            return renderMedication(item);
          })}
        </IonSelect>
      </IonItem>
    </IonList>
  );
}
export default SelectMedication;