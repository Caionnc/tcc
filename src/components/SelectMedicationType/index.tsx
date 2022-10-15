import React from 'react';
import { IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import { medicationType } from 'assets/json/index';

interface SelectMedicationTypeProps {
  name: string;
}

function SelectMedicationType() {
  const renderMedication = (item: SelectMedicationTypeProps) => (
    <IonSelectOption value={item.name}>{item.name}</IonSelectOption>
  );
  return (
    <IonList>
      <IonItem>
        <IonSelect interface="popover" placeholder={'Comprimido'}>
          {medicationType.map(item => {
            return renderMedication(item);
          })}
        </IonSelect>
      </IonItem>
    </IonList>
  );
}
export default SelectMedicationType;