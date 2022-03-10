import { FC } from 'react';
import DashbaordElementCollectionType from '../../types/DashbaordElementCollection.types';
import DashobardActionsType from '../../types/DashobardActions.types.';
import DashobardElementWrapperComponentProps from '../../types/DashobardElementWrapperComponentProps.types';
import DashobardSettingsType from '../../types/DashobardSettings.types';
import ResponsiveDashboardLayoutType from '../../types/ResponsiveDashboardLayout.types';

export default interface DashboardContextType<TActionsType extends DashobardActionsType> {
  id: string;
  elements: DashbaordElementCollectionType;
  layouts: ResponsiveDashboardLayoutType,
  columnCount: number;
  actions: TActionsType;
  settings: DashobardSettingsType;
  elementWrapper?: FC<DashobardElementWrapperComponentProps>
}
