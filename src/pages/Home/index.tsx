import React, { useCallback, useEffect, useRef, useState } from 'react';

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
import { debounce } from 'lodash';
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
import { Creators } from 'store/ducks/dictionary';

import { Strings } from './strings';

import './styles.css';
import { Medication } from 'components';
import { logoAddPillIcon, logoAddPillIconAllBlue } from 'assets';

const playerService = PlayerService.getService();

const TIME_DEBOUNCE_MS = 1000;

function HomePage() {
  const [searchText, setSearchText] = useState('');
  const location = useLocation();

  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    dispatch(
      Creators.fetchWords.request({
        page: FIRST_PAGE_INDEX,
        limit: MAX_PER_PAGE,
      }),
    );
  }, [dispatch]);

  return (
    <MenuLayout
      title={Strings.TOOLBAR_TITLE}
      mode={location.pathname === paths.DICTIONARY ? 'menu' : 'menu'}
    >
      <IonContent class="home-container">
        <div className="home-content">
          <IonText class="home-content-title">Medicação</IonText>
          <Medication></Medication>
          <button className="home-add-medicine-button">
            <img src={logoAddPillIconAllBlue}></img>
          </button>
        </div>
      </IonContent>
      <IonFooter class="home-bottom-container"></IonFooter>
    </MenuLayout>
  );
}

export default HomePage;
