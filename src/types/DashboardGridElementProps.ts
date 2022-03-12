import DashboardActionsType from "./DashboardActionsType";
import DashboardElementActionsType from "./DashboardElementActions.types";
import { DashboardElementProps } from "./DashboardElementProps";
import DashboardElementWrapperComponentType from "./DashboardElementWrapperComponent.types";
import { LayoutBreakpointsType } from "./ResponsiveDashboardLayout.types";

export default interface DashboardGridElementProps<  
  TElementProps extends DashboardElementProps, 
  TActionsType extends DashboardActionsType<TElementProps>,
  TElementActionsType extends DashboardElementActionsType<TElementProps>
> {
  id: string,
  columnCount: number,
  rowHeight: number,
  elementWrapper: DashboardElementWrapperComponentType<TElementProps, TActionsType, TElementActionsType>
  padding: number,
  fallbackLayoutScreenClassConfig: LayoutBreakpointsType
}