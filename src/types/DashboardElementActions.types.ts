import { DashboardElementProps } from "./DashboardElementProps";

export default interface DashboardElementActionsType<TElementProps extends DashboardElementProps> {
}

export interface DashboardElementDefaultActionsType<TElementProps extends DashboardElementProps> extends DashboardElementActionsType<TElementProps> {
  delete: () => void;
}
