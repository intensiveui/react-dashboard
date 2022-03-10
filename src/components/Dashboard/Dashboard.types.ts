import { FC } from 'react';
import DashbaordElementCollectionType from '../../types/DashbaordElementCollection.types';
import DashobardActionsType from '../../types/DashobardActions.types.';
import DashobardElementWrapperComponentProps from '../../types/DashobardElementWrapperComponentProps.types';
import ResponsiveDashboardLayoutType from '../../types/ResponsiveDashboardLayout.types';

export interface DashboardProps<TElementProps, TActionsType extends DashobardActionsType> {
  id: string;
  title: string;
  elements: DashbaordElementCollectionType<TElementProps>;
  layouts: ResponsiveDashboardLayoutType,
  children: (args: DashboardChildrenProps<TElementProps, TActionsType>) => JSX.Element;
  columnCount: number;
  rowHeight: string;
  editModeDefaultValue: boolean;
  elementWrapper: FC<DashobardElementWrapperComponentProps>,
  actions: TActionsType
}

export interface DashboardChildrenProps<TElementProps, TActionsType extends DashobardActionsType> {
  id: string,
  actions: TActionsType;
  columnCount: number,
  elements: DashbaordElementCollectionType<TElementProps>;
  layouts: ResponsiveDashboardLayoutType,
  context: any
}
