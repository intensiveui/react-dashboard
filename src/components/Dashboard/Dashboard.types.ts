import { FC } from 'react';
import DashbaordElementCollectionType from '../../types/DashbaordElementCollection.types';
import DashobardActionsType from '../../types/DashobardActions.types.';
import DashobardElementWrapperComponentProps from '../../types/DashobardElementWrapperComponentProps.types';

export interface DashboardProps {
  id: string;
  title: string;
  elements: DashbaordElementCollectionType;
  elementWrapper: FC<DashobardElementWrapperComponentProps>;
  children: (args: DashboardChildrenProps) => JSX.Element;
  rowUnits: number;
  rowHeight: string;
  editModeDefaultValue: boolean;
}

export interface DashboardChildrenProps {
  elementsJsx: JSX.Element;
  actions: DashobardActionsType;
}
