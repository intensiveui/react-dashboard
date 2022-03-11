import DashbaordElementType from "../types/DashbaordElement.types";
import DashboardElementLayoutCollectionType from "../types/DashboardElementLayoutCollection.types";
import { DashboardElementProps } from "../types/DashboardElementProps";
import ResponsiveDashboardElementWidthType from "../types/ResponsiveDashboardElementWidth.types";
import ResponsiveDashboardLayoutType, { LayoutBreakpointsType, ResponsiveDashboardElementLayoutType } from "../types/ResponsiveDashboardLayout.types";

export const deleteElementLayouts = (layouts: ResponsiveDashboardLayoutType, element: DashbaordElementType<DashboardElementProps>) => {
    const keys = Object.keys(layouts) as LayoutBreakpointsType[];
    let layout: ResponsiveDashboardLayoutType  = {};
    for(const key of keys) {
      const singleLayout = layouts[key];
      if(singleLayout) {
        layout = {...layout, [key]: singleLayout.filter(t => t.i !== element.id)}
      }
    }
    return layout;
}


export const addElementLayouts = (layouts: ResponsiveDashboardLayoutType, element: DashbaordElementType<DashboardElementProps>, layout: ResponsiveDashboardElementLayoutType) => {
    const keys = Object.keys(layouts) as LayoutBreakpointsType[];
    for(const key of keys) {
        const singleLayout = layouts[key];
        if(singleLayout) {
        layouts = {...layouts, [key]: [...singleLayout, layout[key]]}
        }
    }
    return layouts; 
}

export const getElementLayouts = (layouts: ResponsiveDashboardLayoutType, element: DashbaordElementType<DashboardElementProps>) => {
    const keys = Object.keys(layouts) as LayoutBreakpointsType[];
    let layout: ResponsiveDashboardElementWidthType  = {};
    for(const key of keys) {
      const singleLayout = layouts[key] as DashboardElementLayoutCollectionType;
      if(singleLayout) {
        layout = {...layout, [key]: singleLayout.filter(t => t.i === id)[0]?.w}
      }
    }
    return layout;
}

    
