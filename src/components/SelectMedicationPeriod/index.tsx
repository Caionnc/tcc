import React from 'react';
import { IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import { medicationFrequency } from 'assets/json/index';

interface SelectMedicationPeriodProps {
  name: string;
}

function SelectMedicationPeriod() {
  const renderMedication = (item: SelectMedicationPeriodProps) => (
    <IonSelectOption value={item.name}>{item.name}</IonSelectOption>
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
export default SelectMedicationPeriod;