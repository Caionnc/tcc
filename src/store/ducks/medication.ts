/* eslint-disable no-param-reassign */
import produce, { Draft } from 'immer';
import { IMedication } from 'pages/Home';
import { Reducer } from 'redux';
import { createAction, ActionType } from 'typesafe-actions';

export const Types = {
  SET_CURRENT_MEDICATION_NAME: '@medication/SET_CURRENT_MEDICATION_NAME',
  SET_CURRENT_MEDICATION_FREQUENCY:
    '@medication/SET_CURRENT_MEDICATION_FREQUENCY',
  SET_CURRENT_MEDICATION_DURATION:
    '@medication/SET_CURRENT_MEDICATION_DURATION',
  SET_CURRENT_MEDICATION_OBSERVATIONS:
    '@medication/SET_CURRENT_MEDICATION_OBSERVATIONS',
  SET_CURRENT_MEDICATION_DATA: '@medication/SET_CURRENT_MEDICATION_DATA',
  SET_CURRENT_MEDICATION_LIST: '@medication/SET_CURRENT_MEDICATION_LIST',
};

export interface MedicationState {
  name: string;
  frequency: string;
  duration: string;
  observation: string;
  medicationData: string[];
  medicationList: IMedication[];
}

const INITIAL_STATE: MedicationState = {
  name: 'Nome do remedio',
  frequency: 'Frequência',
  duration: 'Duração',
  observation: 'Observações',
  medicationData: [''],
  medicationList: [],
};

export const Creators = {
  setCurrentMedicationName: createAction(
    Types.SET_CURRENT_MEDICATION_NAME,
  )<string>(),
  setCurrentMedicationFrequency: createAction(
    Types.SET_CURRENT_MEDICATION_FREQUENCY,
  )<string>(),
  setCurrentMedicationDuration: createAction(
    Types.SET_CURRENT_MEDICATION_DURATION,
  )<string>(),
  setCurrentMedicationObservations: createAction(
    Types.SET_CURRENT_MEDICATION_OBSERVATIONS,
  )<string>(),
  setCurrentMedicationData: createAction(
    Types.SET_CURRENT_MEDICATION_DATA,
  )<string>(),
  setCurrentMedicationList: createAction(
    Types.SET_CURRENT_MEDICATION_LIST,
  )<any>(),
};

export type ActionTypes = ActionType<typeof Creators>;

const reducer: Reducer<MedicationState, ActionTypes> = (
  state = INITIAL_STATE,
  action: ActionTypes,
) => {
  const { payload, type } = action;
  return produce(state, (draft: Draft<MedicationState>) => {
    switch (type) {
      case Types.SET_CURRENT_MEDICATION_NAME:
        draft.name = payload;
        break;
      case Types.SET_CURRENT_MEDICATION_FREQUENCY:
        draft.frequency = payload;
        break;
      case Types.SET_CURRENT_MEDICATION_DURATION:
        draft.duration = payload;
        break;
      case Types.SET_CURRENT_MEDICATION_OBSERVATIONS:
        draft.observation = payload;
        break;
      case Types.SET_CURRENT_MEDICATION_DATA:
        draft.medicationData = [...draft.medicationData, payload];
        break;
      case Types.SET_CURRENT_MEDICATION_LIST:
        draft.medicationList = [...draft.medicationList, payload];
        break;

      default:
        break;
    }
  });
};

export default reducer;
