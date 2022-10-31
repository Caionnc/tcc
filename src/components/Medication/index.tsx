import { IonImg, IonText } from '@ionic/react';
import { logoPills, IconCloseCircle } from 'assets';
import MedicationModal from 'components/MedicationModal';
import { IMedication, MedicationListState } from 'pages/Home';
import React, { useCallback, useState } from 'react';

import './styles.css';

interface MedicationProps {
  medication: MedicationListState;
  deleteMedication(medicationToBeDeleted: string): void;
}

const Medication = ({ medication, deleteMedication }: MedicationProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = useCallback(() => {
    setShowModal(true);
  }, [setShowModal])

  return (
    <div className="medication-container">
      <IonImg src={logoPills}></IonImg>
      <div
        className="medication-texts"
        onClick={handleModal}
      >
        <IonText class="medication-texts-title">{medication.name}</IonText>
        <IonText class="medication-texts-subtitle">
          {`${medication.frequency+", "}` +
            `${medication.duration+" e "}` +
            `${medication.observation +";"}`}
        </IonText>
      </div>
      <MedicationModal
        show={showModal}
        setShow={setShowModal}
      ></MedicationModal>
      <button
        className="medication-close-button"
        type="button"
        onClick={() => deleteMedication(medication.name)}
      >
        <IconCloseCircle color="#c9c7c9" />
      </button>
    </div>
  );
};
export default Medication;
