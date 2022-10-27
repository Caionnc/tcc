import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  IonModal,
  IonText,
  IonChip,
  IonTextarea,
  IonSearchbar,
} from '@ionic/react';

import { IconCloseCircle } from 'assets';

import './styles.css';
import SelectMedicationType from 'components/SelectMedicationType';
import SelectMedicationPeriod from 'components/SelectMedicationPeriod';
import { RootState } from 'store';
import { Creators } from 'store/ducks/medication';
import { current } from 'immer';

interface MedicationModalProps {
  show: any;
  setShow: any;
}

const MedicationModal = ({ show, setShow }: MedicationModalProps) => {
  const dispatch = useDispatch();
  const currentMedicationName = useSelector(
    ({ medication }: RootState) => medication.name,
  );

  const [medicationData, setMedicationData] = useState<string[]>([]);
  const [medicationName, setMedicationName] = useState<any>(
    currentMedicationName,
  );
  const [medicationFrequency, setMedicationFrequency] = useState<any>(0);
  const [medicationDuration, setMedicationDuration] = useState<any>('');
  const [medicationObservations, setMedicationObservations] = useState<any>(0);

  const closeModal = () => {
    setShow(false);
  };

  const handlePositiveRevision = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const handleSaveData = () => {
    dispatch(Creators.setCurrentMedicationName(medicationName));
    setMedicationData([...medicationData, medicationName]);
  };

  return (
    <div>
      <IonModal
        isOpen={show}
        cssClass="evaluation-modal"
        onDidDismiss={closeModal}
        swipeToClose
      >
        <div className="medication-modal-container-close-button-container">
          <span className="hidden-span">test</span>
          <IonText class="medication-modal">Medicamento</IonText>
          <button type="button" onClick={closeModal}>
            <IconCloseCircle color="#4E4E4E" />
          </button>
        </div>
        <div className="medication-modal-selection-boxes">
          <IonText class="medication-modal-selection-boxes-title">
            Nome do medicamento
          </IonText>
          <IonSearchbar
            className="dictionary-textarea"
            placeholder="Medicamento"
            inputmode="text"
            searchIcon="none"
            onIonChange={e => setMedicationName(e.detail.value || '')}
          />
          <IonText class="medication-modal-selection-boxes-title">
            {medicationName}
          </IonText>
          <SelectMedicationType></SelectMedicationType>
          <IonText class="medication-modal-selection-boxes-title">
            Duração do tratamento
          </IonText>
          <SelectMedicationPeriod></SelectMedicationPeriod>
          <IonText class="medication-modal-selection-boxes-title">
            Orientações importantes
          </IonText>
          <IonTextarea
            class="medication-modal-observation-textarea"
            placeholder={'Observações importantes!'}
            rows={2}
            cols={2}
            wrap="soft"
            required
          />
        </div>
        <IonChip onClick={handleSaveData}>Salvar</IonChip>
        <IonText class="medication-modal-selection-boxes-title">
          {medicationData}
        </IonText>
      </IonModal>
    </div>
  );
};

export default MedicationModal;
