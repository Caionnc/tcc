import React, { useCallback } from 'react';

import {
  IonModal,
  IonText,
  IonChip,
  IonTextarea,
  IonSearchbar,
} from '@ionic/react';

import { IconCloseCircle } from 'assets';

import './styles.css';
import SelectMedication from 'components/SelectMedication';
import SelectMedicationType from 'components/SelectMedicationType';
import SelectMedicationPeriod from 'components/SelectMedicationPeriod';
import SelectMedicationDosage from 'components/SelectMedicationDosage ';

interface MedicationModalProps {
  show: any;
  setShow: any;
}

const MedicationModal = ({ show, setShow }: MedicationModalProps) => {
  const closeModal = () => {
    setShow(false);
  };

  const handlePositiveRevision = useCallback(() => {
    setShow(false);
  }, [setShow]);

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
          />
          <IonText class="medication-modal-selection-boxes-title">
            Frequência de uso
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
        <IonChip>Salvar</IonChip>
      </IonModal>
    </div>
  );
};

export default MedicationModal;
