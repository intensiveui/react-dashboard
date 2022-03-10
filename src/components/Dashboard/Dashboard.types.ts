import { FC } from 'react';
import DashbaordElementCollectionType from '../../types/DashbaordElementCollection.types';
import DashobardActionsType from '../../types/DashobardActions.types.';
import DashobardElementWrapperComponentProps from '../../types/DashobardElementWrapperComponentProps.types';
import ResponsiveDashboardLayoutType from '../../types/ResponsiveDashboardLayout.types';

export interface DashboardProps<TActionsType extends DashobardActionsType> {
  id: string;
  title: string;
  elements: DashbaordElementCollectionType;
  layouts: ResponsiveDashboardLayoutType,
  children: <T>(args: DashboardChildrenProps<T>) => JSX.Element;
  columnCount: number;
  rowHeight: string;
  editModeDefaultValue: boolean;
  elementWrapper: FC<DashobardElementWrapperComponentProps>,
  actions: TActionsType
}

export interface DashboardChildrenProps<TActionsType> {
  id: string,
  actions: TActionsType;
  columnCount: number,
  elements: DashbaordElementCollectionType;
  layouts: ResponsiveDashboardLayoutType,
  context: any
}
