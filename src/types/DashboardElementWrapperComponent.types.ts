import DashboardActionsType from "./DashboardActionsType";
import DashboardElementActionsType from "./DashboardElementActions.types";
import { DashboardElementProps } from "./DashboardElementProps";

export interface DashboardElementWrapperComponentProps {
  id: string;
  children: JSX.Element | JSX.Element[]
}

type DashboardElementWrapperComponentType<
  TElementProps extends DashboardElementProps, 
  TActionsType extends DashboardActionsType<TElementProps>,
  TElementActionsType extends DashboardElementActionsType<TElementProps>
> = (props: DashboardElementWrapperComponentProps) 
  => JSX.Element;


export default  DashboardElementWrapperComponentType;