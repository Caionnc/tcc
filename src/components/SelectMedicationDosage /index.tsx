import React from 'react';
import { IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import { medicationDosage } from 'assets/json/index';

interface SelectMedicationDosageProps {
  name: string;
}

function SelectMedicationDosage() {
  const renderMedication = (item: SelectMedicationDosageProps) => (
    <IonSelectOption value={item.name}>{item.name}</IonSelectOption>
  );
  return (
    <IonList>
      <IonItem>
        <IonSelect interface="popover" placeholder={'Dosagem'}>
          {medicationDosage.map(item => {
            return renderMedication(item);
          })}
        </IonSelect>
      </IonItem>
    </IonList>
  );
}
export default SelectMedicationDosage;