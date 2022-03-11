import { FC } from 'react';
import DashbaordElementCollectionType from '../../types/DashbaordElementCollection.types';
import DashboardActionsType, { DashboardDefaultActionsType } from '../../types/DashboardActionsType';
import DashboardElementWrapperComponentProps from '../../types/DashboardElementWrapperComponentProps.types';
import DashboardSettingsType from '../../types/DasbhoardSettings.types';
import ResponsiveDashboardLayoutType from '../../types/ResponsiveDashboardLayout.types';
import { DashboardElementProps } from '../../types/DashboardElementProps';
import DashboardElementActionsType, { DashboardElementDefaultActionsType } from '../../types/DashboardElementActions.types';

export default interface DashboardContextType<
    TElementProps extends DashboardElementProps, 
    TActionsType extends DashboardActionsType<TElementProps>,
    TElementActionsType extends DashboardElementActionsType<TElementProps>
  > {
  id: string;
  elements: DashbaordElementCollectionType<TElementProps>;
  layouts: ResponsiveDashboardLayoutType,
  columnCount: number;
  actions: TActionsType & DashboardDefaultActionsType<TElementProps>;
  customElementActions: TElementActionsType & DashboardElementDefaultActionsType<TElementProps>,
  settings: DashboardSettingsType;
  elementWrapper?: FC<DashboardElementWrapperComponentProps>
}
