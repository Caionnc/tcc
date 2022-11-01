import React, { useCallback, useEffect, useRef, useState } from 'react';

import { uuid } from 'uuidv4';
import {
  IonChip,
  IonContent,
  IonItem,
  IonList,
  IonSearchbar,
  IonText,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonIcon,
  IonImg,
  IonBackButton,
  IonButton,
  IonFooter,
} from '@ionic/react';
import { debounce, indexOf } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';

import {
  FIRST_PAGE_INDEX,
  MAX_PER_PAGE,
  PAGE_STEP_SIZE,
} from 'constants/pagination';
import paths from 'constants/paths';
import { PlayerKeys } from 'constants/player';
import { useTranslation } from 'hooks/Translation';
import { MenuLayout } from 'layouts';
import { Words } from 'models/dictionary';
import PlayerService from 'services/unity';
import { RootState } from 'store';

import { Strings } from './strings';

import './styles.css';
import { MedicationComponent } from 'components';
import { addMedicationImg } from 'assets';
import { Creators, Medication } from 'store/ducks/medication';

const playerService = PlayerService.getService();

export interface IMedication {
  name: any;
  frequency: any;
  duration: any;
  observations: any;
}

export interface MedicationListState {
  id: number;
  name: string;
  frequency: string;
  duration: string;
  observation: string;
  medicationData: string;
}

function HomePage() {
  const [searchText, setSearchText] = useState('');
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  // const currentMedicationId = useSelector(
  //   ({ medication }: RootState) => medication.id,
  // );

  // const currentMedicationName = useSelector(
  //   ({ medication }: RootState) => medication.name,
  // );

  // const currentMedicationFrequency = useSelector(
  //   ({ medication }: RootState) => medication.frequency,
  // );

  // const currentMedicationDuration = useSelector(
  //   ({ medication }: RootState) => medication.duration,
  // );

  // const currentMedicationObservations = useSelector(
  //   ({ medication }: RootState) => medication.observation,
  // );

  // const currentMedicationData = useSelector(
  //   ({ medication }: RootState) => medication.medicationData,
  // );

  const currentMedicationList = useSelector(
    ({ medication }: RootState) => medication.medicationList,
  );

  //Medication Modal
  //const [showModal, setShowModal] = useState(false);

  //Medication List state
  const [medicationList, setMedicationList] = useState<MedicationListState[]>(
    [],
  );
  // const [medicationName, setMedicationName] = useState<any>(
  //   currentMedicationName,
  // );
  // const [medicationFrequency, setmedicationFrequency] = useState<any>(
  //   currentMedicationFrequency,
  // );
  // const [medicationDuration, setMedicationDuration] = useState<any>(
  //   currentMedicationDuration,
  // );
  // const [medicationObservations, setMedicationObervations] = useState<any>(
  //   currentMedicationObservations,
  // );

  // const [medicationListTest, setMedicationListTest] = useState<IMedication[]>(
  //   [],
  // );
  // const [medicationNameTest, setMedicationNameTest] = useState<string>(
  //   currentMedicationName,
  // );
  // const [medicationFrequencyTest, setmedicationFrequencyTest] = useState<any>(
  //   currentMedicationFrequency,
  // );
  // const [medicationDurationTest, setMedicationDurationTest] = useState<any>(
  //   currentMedicationDuration,
  // );
  // const [medicationObservationsTest, setMedicationDoObservations] =
  //   useState<any>(currentMedicationObservations);

  const id = uuid();
  const name = 'Nome';
  const frequency = 'Frequência';

  //FIXED HOME MEDICATION
  const testMedication: Medication = {
    id: uuid(),
    name: 'Nome',
    frequency: 'Frequência',
    duration: 'Duração',
    observation: '',
  };

  const addMedication = (): void => {
    dispatch(Creators.addMedication(testMedication));
  };

  const deleteMedication = (medicationToBeDeleted: string): void => {
    dispatch(Creators.deleteMedication(medicationToBeDeleted));
  };

  return (
    <MenuLayout
      title={Strings.TOOLBAR_TITLE}
      mode={location.pathname === paths.DICTIONARY ? 'menu' : 'menu'}
    >
      <IonContent class="home-container">
        <div className="home-content">
          <IonText class="home-content-title">Medicamentos</IonText>
          {/* <MedicationComponent
            medication={testMedication}
            deleteMedication={deleteMedication}
          ></MedicationComponent> */}
          <IonList class="home-medication-list">
            {currentMedicationList.map((item: Medication, key: number) => (
              <MedicationComponent
                key={key}
                medication={item}
                deleteMedication={deleteMedication}
                canDelete={key != 0}
              ></MedicationComponent>
            ))}
          </IonList>
        </div>
      </IonContent>
      <div className="home-add-medication-div">
        <button className="home-add-medicine-button" onClick={addMedication}>
          <img src={addMedicationImg} alt="" />
        </button>
      </div>
      <IonFooter class="home-bottom-container">
        <IonButton onClick={() => console.log('Traduzir bundle')}>
          Traduzir
        </IonButton>
      </IonFooter>
    </MenuLayout>
  );
}

export default HomePage;
