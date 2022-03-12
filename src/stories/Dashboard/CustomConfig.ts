import { CustomDashboardActionType, CustomDashboardElementActionType } from "../../types"
import DashboardActionsType from "../../types/DashboardActionsType"
import DashboardElementActionsType from "../../types/DashboardElementActions.types"
import { DashboardElementProps } from "../../types/DashboardElementProps"

export interface CustomDashboardElementProps extends DashboardElementProps {
  isDisabled: boolean
}

export interface CustomDashboardActionsType extends DashboardActionsType<CustomDashboardElementProps> {
  toggleElementEnabled: CustomDashboardActionType<CustomDashboardElementProps>
}

export interface CustomDashboardElementsActionsType extends DashboardElementActionsType<CustomDashboardElementProps> {
  toggleEnabled: CustomDashboardElementActionType<CustomDashboardElementProps>
}