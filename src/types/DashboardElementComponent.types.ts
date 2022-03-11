import DashboardActionsType from "./DashboardActionsType";
import { DashboardElementProps } from "./DashboardElementProps";

export interface DashboardElementComponentProps {
  id: string;
}

type DashboardElementComponentType<TElementProps extends DashboardElementProps, TActionsType extends DashboardActionsType<TElementProps>> = (props: DashboardElementComponentProps) 
  => JSX.Element;

export default DashboardElementComponentType;  

