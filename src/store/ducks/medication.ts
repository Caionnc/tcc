/* eslint-disable no-param-reassign */
import produce, { Draft } from 'immer';
import { Reducer } from 'redux';
import { createAction, ActionType } from 'typesafe-actions';

export const Types = {
  ADD_MEDICATION: '@medication/ADD_MEDICATION',
  SET_CURRENT_MEDICATION: '@medication/SET_CURRENT_MEDICATION',
  DELETE_MEDICATION: '@medication/DELETE_MEDICATION',
  EDIT_MEDICATION: '@medication/EDIT_MEDICATION',
};

export interface Medication {
  id: string;
  name: string;
  frequency: string;
  duration: string;
  observation: string;
  medicationData?: string;
}

export interface MedicationState {
  currentMedication: Medication;
  medicationList: Medication[];
  translateMedication: '',
}

const INITIAL_STATE: MedicationState = {
  currentMedication: {} as Medication,
  medicationList: [
    {
      id: 'xx',
      name: 'Nome',
      frequency: 'Frequência',
      duration: 'Duração',
      observation: 'Obs',
      medicationData: '',
    },
  ],
  translateMedication: '',
};

export const Creators = {
  addMedication: createAction(Types.ADD_MEDICATION)<Medication>(),
  setCurrentMedication: createAction(
    Types.SET_CURRENT_MEDICATION,
  )<Medication>(),
  deleteMedication: createAction(Types.DELETE_MEDICATION)<string>(),
  editMedication: createAction(Types.EDIT_MEDICATION)<{
    id: string;
    medication: Medication;
  }>(),
};

export type ActionTypes = ActionType<typeof Creators>;

const reducer: Reducer<MedicationState, ActionTypes> = (
  state = INITIAL_STATE,
  action: ActionTypes,
) => {
  const { payload, type } = action;
  return produce(state, (draft: Draft<MedicationState>) => {
    switch (type) {
      case Types.SET_CURRENT_MEDICATION:
        draft.currentMedication = payload as Medication;
        break;

      case Types.DELETE_MEDICATION:
        const medicationList = draft.medicationList.filter(
          medication => medication.id !== payload,
        );
        draft.medicationList = medicationList;
        break;

      case Types.ADD_MEDICATION:
        const medication = payload as Medication;

        draft.medicationList = [
          ...draft.medicationList,
          {
            ...medication,
            medicationData: `${
              medication.id +
              ' ' +
              medication.name +
              ' ' +
              medication.frequency +
              ' ' +
              medication.duration +
              ' ' +
              medication.observation +
              ' '
            }`,
          },
        ];
        break;

      case Types.EDIT_MEDICATION:
        const data = payload as { id: string; medication: Medication };
        const index = draft.medicationList.findIndex(
          element => element.id == data.id,
        );
        draft.medicationList[index] = data.medication;
        break;

      default:
        break;
    }
  });
};

export default reducer;
