import { useMemo } from "react";
import DashboardActionsType from "../../types/DashboardActionsType";
import DashboardElementActionsType from "../../types/DashboardElementActions.types";
import { DashboardElementProps } from "../../types/DashboardElementProps";
import ResponsiveDashboardElementWidthType from "../../types/ResponsiveDashboardElementWidth.types";
import { getElementLayoutWidths } from "../../utils/dashboaardElementUtils";
import useDashboardContext from "../useDashboardContext";
import useDashboardElement from "../useDashboardElement";

function useResponsiveDashboardElementWidth<
  TElementProps extends DashboardElementProps, 
  TActionsType extends DashboardActionsType<TElementProps>,
  TElementActionsType extends DashboardElementActionsType<TElementProps>
>(id: string) : ResponsiveDashboardElementWidthType {
  const {layouts} = useDashboardContext<TElementProps, TActionsType, TElementActionsType>();  
  const [element] = useDashboardElement<TElementProps, TActionsType, TElementActionsType>(id);

  const elementLayout = useMemo(() => getElementLayoutWidths(layouts, element), [layouts]);

  return elementLayout;
}

export default useResponsiveDashboardElementWidth;