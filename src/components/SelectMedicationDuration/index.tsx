import React from 'react';
import { IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import { frequencyOptions } from 'assets/json/index';

interface SelectMedicationDurationProps {
  value: string;
}

function SelectMedicationDuration() {
  const renderMedication = (item: SelectMedicationDurationProps) => (
    <IonSelectOption value={item.value}>{item.value}</IonSelectOption>
  );
  return (
    <IonList>
      <IonItem>
        <IonSelect interface="popover" placeholder={'Duração'}>
          {frequencyOptions.map(item => {
            return renderMedication(item);
          })}
        </IonSelect>
      </IonItem>
    </IonList>
  );
}
export default SelectMedicationDuration;
