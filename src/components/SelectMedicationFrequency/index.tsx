import React from 'react';
import { IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import { medicationFrequency } from 'assets/json/index';

interface SelectMedicationFrequencyProps {
  value: string;
}

function SelectMedicationFrequency() {
  const renderMedication = (item: SelectMedicationFrequencyProps) => (
    <IonSelectOption value={item.value}>{item.value}</IonSelectOption>
  );
  return (
    <IonList>
      <IonItem>
        <IonSelect interface="popover" placeholder={'Frequência'}>
          {medicationFrequency.map(item => {
            return renderMedication(item);
          })}
        </IonSelect>
      </IonItem>
    </IonList>
  );
}
export default SelectMedicationFrequency;
