import DashbaordElementType from './DashobardElement.types';
import { ResponsiveDashboardElementLayoutType } from './ResponsiveDashboardLayout.types';

export type DashboardActionAddElementType = (element: DashbaordElementType, layout: ResponsiveDashboardElementLayoutType) => void;

export default interface DashobardActionsType {
  addElement: DashboardActionAddElementType,
  deleteElement: (element: DashbaordElementType) => void;
  toggleEditMode: () => void;
}


