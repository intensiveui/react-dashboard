import DashboardSettingsType from '../../types/DasbhoardSettings.types';
import DashbaordElementCollectionType from '../../types/DashbaordElementCollection.types';
import DashboardActionsType, { DashboardDefaultActionsType } from '../../types/DashboardActionsType';
import DashboardElementActionsType from '../../types/DashboardElementActions.types';
import { DashboardElementProps } from '../../types/DashboardElementProps';
import ResponsiveDashboardLayoutType from '../../types/ResponsiveDashboardLayout.types';

export interface DashboardProps<
    TElementProps extends DashboardElementProps, 
    TActionsType extends DashboardActionsType<TElementProps>,
    TElementActionsType extends DashboardElementActionsType<TElementProps>
  > {
  id: string;
  title: string;
  elements: DashbaordElementCollectionType<TElementProps>;
  layouts: ResponsiveDashboardLayoutType,
  children: (args: DashboardChildrenProps<TElementProps, TActionsType>) => JSX.Element;
  editModeDefaultValue: boolean;
  customDashboardActions?: TActionsType,
  customElementActions?: TElementActionsType
}

export interface DashboardChildrenProps<TElementProps extends DashboardElementProps, TActionsType extends DashboardActionsType<TElementProps>> {
  id: string,
  actions: TActionsType & DashboardDefaultActionsType<TElementProps>;
  elements: DashbaordElementCollectionType<TElementProps>;
  layouts: ResponsiveDashboardLayoutType,
  title: string;
  settings: DashboardSettingsType
}
