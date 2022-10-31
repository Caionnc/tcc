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
import SelectMedicationDuration from 'components/SelectMedicationDuration';
import { RootState } from 'store';
import { Creators } from 'store/ducks/medication';
import { current } from 'immer';
import SelectMedicationFrequency from 'components/SelectMedicationFrequency';

interface MedicationModalProps {
  show: any;
  setShow: any;
}

const MedicationModal = ({ show, setShow }: MedicationModalProps) => {
  const dispatch = useDispatch();
  const currentMedicationName = useSelector(
    ({ medication }: RootState) => medication.name,
  );
  const currentMedicationFrequency = useSelector(
    ({ medication }: RootState) => medication.frequency,
  );
  const currentMedicationDuration = useSelector(
    ({ medication }: RootState) => medication.duration,
  );
  const currentMedicationObservations = useSelector(
    ({ medication }: RootState) => medication.observation,
  );

  const [medicationData, setMedicationData] = useState<string[]>([]);
  const [medicationName, setMedicationName] = useState<string>(
    currentMedicationName,
  );
  const [medicationFrequency, setMedicationFrequency] = useState<string>(
    currentMedicationFrequency,
  );
  const [medicationDuration, setMedicationDuration] = useState<string>(
    currentMedicationDuration,
  );
  const [medicationObservations, setMedicationObservations] = useState<string>(
    currentMedicationObservations,
  );

  const closeModal = () => {
    setShow(false);
  };

  const handlePositiveRevision = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const handleSaveData = () => {
    dispatch(Creators.setCurrentMedicationName(medicationName));
    dispatch(Creators.setCurrentMedicationFrequency(medicationFrequency));
    dispatch(Creators.setCurrentMedicationDuration(medicationDuration));
    dispatch(Creators.setCurrentMedicationObservations(medicationObservations));

    setMedicationData([
      ...medicationData,
      `${
        medicationName +
        medicationFrequency +
        medicationDuration +
        medicationObservations
      }`,
    ]);
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
            //dispatch(Creators.setCurrentMedicationName(e.detail.value || ''));
            //setMedicationName(e.detail.value || '')
          />
          <IonText class="medication-modal-selection-boxes-title">
            {medicationName}
          </IonText>
          <SelectMedicationFrequency></SelectMedicationFrequency>
          <IonText class="medication-modal-selection-boxes-title">
            Duração do tratamento
          </IonText>
          <SelectMedicationDuration></SelectMedicationDuration>
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
            onIonChange={e => setMedicationObservations(e.detail.value || '')}
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
