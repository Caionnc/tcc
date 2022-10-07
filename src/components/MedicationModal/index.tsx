import React, { useCallback } from 'react';

import { IonModal, IonText, IonChip } from '@ionic/react';

import { IconCloseCircle, IconThumbDown, IconThumbUp } from 'assets';

import './styles.css';
import { Strings } from './strings';

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

        <p className="modal-title"> {Strings.TITLE_MENU_MODAL} </p>

        <div className="evaluation-modal-container-rating-chips">
          <IonChip
            class="evaluation-modal-container-rating-chips-yes"
            onClick={handlePositiveRevision}
          >
            <IconThumbUp color="#4E4E4E" />
            <IonText class="evaluation-modal-container-rating-chips-texts">
              {Strings.CHIP_YES}
            </IonText>
          </IonChip>
          <IonChip
            class="evaluation-modal-container-rating-chips-no"
            onClick={() => {
              setShow(false);
            }}
          >
            <IconThumbDown color="#4E4E4E" />
            <IonText class="evaluation-modal-container-rating-chips-texts">
              {Strings.CHIP_NO}
            </IonText>
          </IonChip>
        </div>
      </IonModal>
    </div>
  );
};

export default MedicationModal;
