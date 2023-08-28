import React from 'react';

import { Player } from 'components';
import { MenuLayout } from 'layouts';

import { Strings } from './strings';

import './styles.css';
import { useLocation } from 'react-router';
import paths from 'constants/paths';

function Translating() {
  const location = useLocation();

  return (
    <MenuLayout title={Strings.TOOLBAR_TITLE} mode="menu">
      <Player />
    </MenuLayout>
  );
}

export default Translating;
