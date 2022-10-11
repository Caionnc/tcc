import React, { useCallback } from 'react';

import { IonModal, IonText, IonChip } from '@ionic/react';

import { IconCloseCircle, IconThumbDown, IconThumbUp } from 'assets';

import './styles.css';
import { Strings } from './strings';
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
          <IonText class="medication-modal">Medicação</IonText>
          <button type="button" onClick={closeModal}>
            <IconCloseCircle color="#4E4E4E" />
          </button>
        </div>
        <div className="medication-modal-selection-boxes">
          <div className="medication-modal-selection-boxes-row">
            <SelectMedication></SelectMedication>
            <SelectMedicationType></SelectMedicationType>
          </div>
          <div className="medication-modal-selection-boxes-row">
            <SelectMedicationPeriod></SelectMedicationPeriod>
            <SelectMedicationDosage></SelectMedicationDosage>
          </div>
        </div>
        <IonChip>Salvar</IonChip>
      </IonModal>
    </div>
  );
};

export default MedicationModal;
