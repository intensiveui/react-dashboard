import { FC } from 'react';
import DashbaordElementCollectionType from '../../types/DashbaordElementCollection.types';
import DashobardActionsType from '../../types/DashobardActions.types.';
import DashobardElementWrapperComponentProps from '../../types/DashobardElementWrapperComponentProps.types';
import DashobardSettingsType from '../../types/DashobardSettings.types';

export default interface DashboardContextType {
  id: string;
  elements: DashbaordElementCollectionType;
  elementWrapper: FC<DashobardElementWrapperComponentProps>;
  rowUnits: number;
  actions: DashobardActionsType;
  settings: DashobardSettingsType;
}
