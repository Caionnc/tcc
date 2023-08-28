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
import { addMedicationImg, IconEdit, IconHandsTranslate } from 'assets';
import { Creators, Medication } from 'store/ducks/medication';
import translate from 'services/translate';

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

function MedicationPage() {
  const [searchText, setSearchText] = useState('');

  const [text, setText] = useState('');
  const { textPtBr, textGloss, setTextGloss } = useTranslation();
  const { setTextPtBr } = useTranslation();

  const [auxValueText, setAuxValueText] = useState<any>(textGloss);

  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const TIME_DEBOUNCE_MS = 500;

  const currentMedicationList = useSelector(
    ({ medication }: RootState) => medication.medicationList,
  );

  //Medication List state
  const [medicationList, setMedicationList] = useState<MedicationListState[]>(
    [],
  );

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

  const handlePlayTranslation = () => {
    const bundleText = currentMedicationList.map(
      (item: Medication, key: number) => {
        return (
          ' O medicamento ' +
          item.name +
          ' deve ser tomado ' +
          item.frequency +
          ' durante ' +
          item.duration +
          ' observando o seguinte ' +
          item.observation
        );
      },
    );

    const textToTranslate = bundleText
      .join()
      .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');

    setAuxValueText(textToTranslate);
    history.replace(paths.HOME);
  };

  async function translate() {
    const bundleText = currentMedicationList.map(
      (item: Medication, key: number) => {
        return (
          ' medicamento ' +
          item.name +
          ' deve usar' +
          item.frequency +
          ' durante ' +
          item.duration +
          ' observando as recomendações ' +
          item.observation
        );
      },
    );

    const textToTranslate = bundleText
      .join()
      .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    setText(textToTranslate);

    const formatted = textToTranslate.trim();

    const gloss = await setTextPtBr(formatted, false);

    setAuxValueText(gloss);
    history.replace(paths.HOME);
  }

  /* const handleBundleToTranslation = () => {
    const bundleText = currentMedicationList.map(
      (item: Medication, key: number) => {
        return (
          ' O medicamento ' +
          item.name +
          ' ter que tomar ' +
          item.frequency +
          ' durante ' +
          item.duration +
          ' observando o seguinte ' +
          item.observation
        );
      },
    );
    
    const textToTranslate = bundleText
    .join()
    .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');

    const formattedText = textToTranslate.replace('"', ' ');
    console.log(textToTranslate);
    console.log(formattedText);
  };
 */
  /* const handleWordSuggestion = useCallback(
    (word: string) => {
      const text = auxValueText.split(' ');
      console.log('text after creation' + text);
      text.pop();
      const gloss = text.join(' ').concat(` ${word}`);

      // setTextGloss(gloss, false);
      setAuxValueText(gloss);
    },
    [auxValueText],
  ); */

  useEffect(() => {
    playerService.send(
      PlayerKeys.PLAYER_MANAGER,
      PlayerKeys.PLAY_NOW,
      auxValueText,
    );
  }, [auxValueText]);

  const debouncedSearch = debounce(translate, TIME_DEBOUNCE_MS);

  return (
    <MenuLayout
      title={Strings.TOOLBAR_TITLE}
      mode={location.pathname === paths.MEDICATION ? 'menu' : 'menu'}
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
        <button
          className="home-translator-button-save"
          onClick={debouncedSearch}
          type="button"
        >
          <IconHandsTranslate color="white" />
          <span>Traduzir</span>
        </button>
      </IonFooter>
    </MenuLayout>
  );
}

export default MedicationPage;
