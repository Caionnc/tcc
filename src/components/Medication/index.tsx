import { IonImg, IonText } from '@ionic/react';
import { logoPills, IconCloseCircle } from 'assets';
import MedicationModal from 'components/MedicationModal';
import { IMedication, MedicationListState } from 'pages/MedicationPage';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Creators, Medication } from 'store/ducks/medication';

import './styles.css';

interface MedicationProps {
  medication: Medication;
  deleteMedication(medicationToBeDeleted: string): void;
  canDelete: boolean;
}

const MedicationComponent = ({
  medication,
  deleteMedication,
  canDelete,
}: MedicationProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = useCallback(() => {
    setShowModal(true);
    dispatch(Creators.setCurrentMedication(medication));
  }, [setShowModal, medication]);

  const dispatch = useDispatch();

  return (
    <div className="medication-container">
      <IonImg src={logoPills}></IonImg>
      <div className="medication-texts" onClick={handleModal}>
        <IonText class="medication-texts-title">{medication.name}</IonText>
        <IonText class="medication-texts-subtitle">
          {`${medication.frequency + ', '}` +
            `${medication.duration + ' e '}` +
            `${medication.observation + ';'}`}
        </IonText>
      </div>
      <MedicationModal
        show={showModal}
        setShow={setShowModal}
      ></MedicationModal>
        <button
          className="medication-close-button"
          type="button"
          onClick={() => deleteMedication(medication.id)}
          disabled={!canDelete}
        >
          <IconCloseCircle color="#c9c7c9" />
        </button>
  
    </div>
  );
};
export default MedicationComponent;
