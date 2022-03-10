import { useMemo } from "react";
import DashboardElementLayoutCollectionType from "../../types/DashboardElementLayoutCollection.types";
import ResponsiveDashboardElementWidthType from "../../types/ResponsiveDashboardElementWidth.types";
import { LayoutBreakpointsType } from "../../types/ResponsiveDashboardLayout.types";
import useDashboardContext from "../useDashboardContext";

type UseResponsiveDashboardElementWidth = (
  id: string
) => ResponsiveDashboardElementWidthType;

const useResponsiveDashboardElementWidth : UseResponsiveDashboardElementWidth = (id) => {
  const {layouts} = useDashboardContext();  

  let elementLayout = useMemo(() => {
    const keys = Object.keys(layouts) as LayoutBreakpointsType[];
    let layout: ResponsiveDashboardElementWidthType  = {};
    for(const key of keys) {
      const singleLayout = layouts[key] as DashboardElementLayoutCollectionType;
      if(singleLayout) {
        layout = {...layout, [key]: singleLayout.filter(t => t.i === id)[0]?.w}
      }
    }
    return layout;
  }, [layouts]);

  
  return elementLayout;
}

export default useResponsiveDashboardElementWidth;