import React from 'react';

import { Player } from 'components';
import { MenuLayout } from 'layouts';

import { Strings } from './strings';

import './styles.css';
import HomePage from 'pages/HomePage';

function Translating() {
  return (
    <MenuLayout title={Strings.TOOLBAR_TITLE}>
      <Player />
    </MenuLayout>
  );
}

export default Translating;
