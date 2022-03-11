import DashbaordElementType from './DashbaordElement.types';
import { DashboardElementProps } from './DashboardElementProps';
import { ResponsiveDashboardElementLayoutType } from './ResponsiveDashboardLayout.types';

export type DashboardActionAddElementType<TElementProps extends DashboardElementProps> = (element: DashbaordElementType<TElementProps>, layout: ResponsiveDashboardElementLayoutType) => void;

export default interface DashboardActionsType<TElementProps extends DashboardElementProps> {
}


export interface DashboardDefaultActionsType<TElementProps extends DashboardElementProps> extends DashboardActionsType<TElementProps> {
  addElement: DashboardActionAddElementType<TElementProps>,
  deleteElement: (element: DashbaordElementType<TElementProps>) => void;
  toggleEditMode: () => void;
}


