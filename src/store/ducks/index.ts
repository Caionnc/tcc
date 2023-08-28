import { combineReducers } from 'redux';

import customization from './customization';
import dictionaryReducer from './dictionary';
import regionalism from './regionalism';
import translator from './translator';
import video from './video';
import medication from './medication';

const reducers = combineReducers({
  regionalism,
  video,
  dictionaryReducer,
  translator,
  customization,
  medication,
});

export default reducers;
