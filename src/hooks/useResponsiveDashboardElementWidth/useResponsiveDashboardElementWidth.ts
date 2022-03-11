import { useMemo } from "react";
import DashboardActionsType from "../../types/DashboardActionsType";
import { DashboardElementProps } from "../../types/DashboardElementProps";
import ResponsiveDashboardElementWidthType from "../../types/ResponsiveDashboardElementWidth.types";
import { getElementLayouts } from "../../utils/dashboaardElementUtils";
import useDashboardContext from "../useDashboardContext";
import useDashboardElement from "../useDashboardElement";

function useResponsiveDashboardElementWidth<TElementProps extends DashboardElementProps, TActionsType extends DashboardActionsType<TElementProps>>(id: string) : ResponsiveDashboardElementWidthType {
  const {layouts} = useDashboardContext<TElementProps, TActionsType>();  
  const [element] = useDashboardElement<TElementProps, TActionsType>(id);

  const elementLayout = useMemo(() => getElementLayouts(layouts, element), [layouts]);

  return elementLayout;
}

export default useResponsiveDashboardElementWidth;