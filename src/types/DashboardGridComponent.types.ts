import DashbaordElementCollectionType from "./DashbaordElementCollection.types";
import DashboardActionsType from "./DashboardActionsType";
import DashboardElementActionsType from "./DashboardElementActions.types";
import { DashboardElementProps } from "./DashboardElementProps";
import DashboardElementWrapperComponentType from "./DashboardElementWrapperComponent.types";
import { LayoutBreakpointsType } from "./ResponsiveDashboardLayout.types";

export interface DashboardGridProps<  
  TElementProps extends DashboardElementProps, 
  TActionsType extends DashboardActionsType<TElementProps>,
  TElementActionsType extends DashboardElementActionsType<TElementProps>
> {
  columnCount: number,
  rowHeight: number,
  padding: number,
  elementWrapper: DashboardElementWrapperComponentType<TElementProps, TActionsType, TElementActionsType>,
  fallbackLayoutScreenClassConfig: LayoutBreakpointsType
}

type DashboardGridComponentType<  
  TElementProps extends DashboardElementProps, 
  TActionsType extends DashboardActionsType<TElementProps>,
  TElementActionsType extends DashboardElementActionsType<TElementProps>
> = (props: DashboardElementWrapperComponentType<TElementProps, TActionsType, TElementActionsType>) 
  => JSX.Element;

export default DashboardGridComponentType