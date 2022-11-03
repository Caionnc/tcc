import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  IonModal,
  IonText,
  IonChip,
  IonTextarea,
  IonSearchbar,
  IonSelectOption,
  IonItem,
  IonList,
  IonSelect,
} from '@ionic/react';

import { IconCloseCircle } from 'assets';

import './styles.css';
import { RootState } from 'store';
import { Creators } from 'store/ducks/medication';
import { current } from 'immer';
import { frequencyOptions, durationOptions } from 'assets/json/index';

interface MedicationModalProps {
  show: any;
  setShow: any;
}

const MedicationModal = ({ show, setShow }: MedicationModalProps) => {
  const dispatch = useDispatch();

  const currentMedication = useSelector(
    ({ medication }: RootState) => medication.currentMedication,
  );

  const [medicationData, setMedicationData] = useState<string[]>([]);
  const [medicationName, setMedicationName] = useState<string>(
    currentMedication.name,
  );

  const [medicationFrequency, setMedicationFrequency] = useState<string>(
    currentMedication.frequency,
  );
  const [medicationDuration, setMedicationDuration] = useState<string>(
    currentMedication.duration,
  );
  const [medicationObservations, setMedicationObservations] = useState<string>(
    currentMedication.observation,
  );

  const closeModal = () => {
    setShow(false);
  };

  const handlePositiveRevision = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const handleSaveData = () => {
    // dispatch(Creators.setCurrentMedicationName(medicationName));
    // dispatch(Creators.setCurrentMedicationFrequency(medicationFrequency));
    // dispatch(Creators.setCurrentMedicationDuration(medicationDuration));
    // dispatch(Creators.setCurrentMedicationObservations(medicationObservations));

    setMedicationData([
      ...medicationData,
      `${
        medicationName +
        medicationFrequency +
        medicationDuration +
        medicationObservations
      }`,
    ]);

    dispatch(
      Creators.editMedication({
        id: currentMedication.id,
        medication: {
          ...currentMedication,
          name: medicationName,
          frequency: medicationFrequency,
          duration: medicationDuration,
          observation: medicationObservations,
        },
      }),
    );
    setShow(false);
  };

  const renderFrequencyOptions = (item: string) => (
    <IonSelectOption value={item}>{item}</IonSelectOption>
  );

  const renderDurationOptions = (item: string) => (
    <IonSelectOption value={item}>{item}</IonSelectOption>
  );

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
            Nome do Remédio
          </IonText>
          <IonList>
            <IonItem>
              <IonSelect
                interface="popover"
                placeholder={'Frequência'}
                onIonChange={ev =>
                  setMedicationFrequency(JSON.stringify(ev.detail.value))
                }
              >
                {frequencyOptions.map(item => {
                  return renderFrequencyOptions(item.value);
                })}
              </IonSelect>
            </IonItem>
          </IonList>
          <IonText class="medication-modal-selection-boxes-title">
            Duração do tratamento
          </IonText>
          <IonList>
            <IonItem>
              <IonSelect
                interface="popover"
                placeholder={'Duração'}
                onIonChange={ev =>
                  setMedicationDuration(JSON.stringify(ev.detail.value))
                }
              >
                {durationOptions.map(item => {
                  return renderDurationOptions(item.value);
                })}
              </IonSelect>
            </IonItem>
          </IonList>
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
      </IonModal>
    </div>
  );
};

export default MedicationModal;
