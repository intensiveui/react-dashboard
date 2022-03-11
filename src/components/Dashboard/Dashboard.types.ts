import { FC } from 'react';
import DashbaordElementCollectionType from '../../types/DashbaordElementCollection.types';
import DashboardActionsType, { DashboardDefaultActionsType } from '../../types/DashboardActionsType';
import { DashboardElementProps } from '../../types/DashboardElementProps';
import DashboardElementWrapperComponentProps from '../../types/DashboardElementWrapperComponentProps.types';
import ResponsiveDashboardLayoutType from '../../types/ResponsiveDashboardLayout.types';

export interface DashboardProps<TElementProps extends DashboardElementProps, TActionsType extends DashboardActionsType<TElementProps>> {
  id: string;
  title: string;
  elements: DashbaordElementCollectionType<TElementProps>;
  layouts: ResponsiveDashboardLayoutType,
  children: (args: DashboardChildrenProps<TElementProps, TActionsType>) => JSX.Element;
  columnCount: number;
  rowHeight: string;
  editModeDefaultValue: boolean;
  elementWrapper: FC<DashboardElementWrapperComponentProps>,
  actions: TActionsType
}

export interface DashboardChildrenProps<TElementProps extends DashboardElementProps, TActionsType extends DashboardActionsType<TElementProps>> {
  id: string,
  actions: TActionsType & DashboardDefaultActionsType<TElementProps>;
  columnCount: number,
  elements: DashbaordElementCollectionType<TElementProps>;
  layouts: ResponsiveDashboardLayoutType
}
