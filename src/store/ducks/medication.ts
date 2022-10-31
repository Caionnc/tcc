/* eslint-disable no-param-reassign */
import { stat } from 'fs';
import produce, { Draft } from 'immer';
import { Reducer } from 'redux';
import { createAction, ActionType } from 'typesafe-actions';

export const Types = {
  SET_CURRENT_MEDICATION_ID: '@medication/SET_CURRENT_MEDICATION_NAME',
  SET_CURRENT_MEDICATION_NAME: '@medication/SET_CURRENT_MEDICATION_NAME',
  SET_CURRENT_MEDICATION_FREQUENCY:
    '@medication/SET_CURRENT_MEDICATION_FREQUENCY',
  SET_CURRENT_MEDICATION_DURATION:
    '@medication/SET_CURRENT_MEDICATION_DURATION',
  SET_CURRENT_MEDICATION_OBSERVATIONS:
    '@medication/SET_CURRENT_MEDICATION_OBSERVATIONS',
  SET_CURRENT_MEDICATION_DATA: '@medication/SET_CURRENT_MEDICATION_DATA',
  //Medication List Getters and Setters
  SET_CURRENT_MEDICATION_LIST: '@medication/SET_CURRENT_MEDICATION_LIST',
  GET_CURRENT_MEDICATION_LIST: '@medication/GET_CURRENT_MEDICATION_LIST',
};

export interface MedicationState {
  id: number;
  name: string;
  frequency: string;
  duration: string;
  observation: string;
  medicationData: string;
  medicationList: MedicationListState[];
}

export interface MedicationListState {
  id: number;
  name: string;
  frequency: string;
  duration: string;
  observation: string;
  medicationData: string;
}

const INITIAL_STATE: MedicationState = {
  id: 0,
  name: 'Nome do remedio',
  frequency: 'Frequência',
  duration: 'Duração',
  observation: 'Observações',
  medicationData: '',
  medicationList: [],
};

export const Creators = {
  setCurrentMedicationId: createAction(
    Types.SET_CURRENT_MEDICATION_ID,
  )<any>(),
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
  /* getCurrentMedicationList: createAction(Types.GET_CURRENT_MEDICATION_LIST)<
    IMedication[]
  >(), */
};

export type ActionTypes = ActionType<typeof Creators>;

const reducer: Reducer<MedicationState, ActionTypes> = (
  state = INITIAL_STATE,
  action: ActionTypes,
) => {
  const { payload, type } = action;
  return produce(state, (draft: Draft<MedicationState>) => {
    switch (type) {
      case Types.SET_CURRENT_MEDICATION_ID:
        draft.id = payload;
        break;
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
        draft.medicationData = payload;
        break;
      case Types.SET_CURRENT_MEDICATION_LIST:
        draft.medicationList = [...draft.medicationList, payload];
        break;

      /* case Types.GET_CURRENT_MEDICATION_LIST:
        draft.medicationList.map((item: IMedication, key: number) =>
          console.log(
            'Medication List Key' + key + '\n',
            'Medication List Name' + draft.medicationList[key].name + '\n',
            'Medication List Name' + draft.medicationList[key].frequency + '\n',
            'Medication List Name' + draft.medicationList[key].duration + '\n',
            'Medication List Name' +
              draft.medicationList[key].observations +
              '\n',
          ),
        );
        break; */

      default:
        break;
    }
  });
};

export default reducer;
