import React, { useState } from 'react';
import { IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import { medicationFrequency } from 'assets/json/index';

interface SelectMedicationFrequencyProps {
  value: string;
  selectedOption: string; 
}

function SelectMedicationFrequency(value: SelectMedicationFrequencyProps) {
  const renderMedication = (item: string) => (
    <IonSelectOption value={item}>{item}</IonSelectOption>
  );

  const [frequency, setfrequency] = useState('');
  return (
    <IonList>
      <IonItem>
        <IonSelect
          interface="popover"
          placeholder={'Frequência'}
          onIonChange={ev => setfrequency(JSON.stringify(ev.detail.value))}
        >
          {medicationFrequency.map(item => {
            return renderMedication(item.value);
          })}
        </IonSelect>
      </IonItem>
    </IonList>
  );
}
export default SelectMedicationFrequency;
