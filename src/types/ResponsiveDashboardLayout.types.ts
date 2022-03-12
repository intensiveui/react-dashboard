import DashboardElementLayoutType from "./DashboardElementLayout";
import DashboardElementLayoutCollectionType from "./DashboardElementLayoutCollection.types";

export type LayoutBreakpointsType = 'xs' | 'sm' | 'md' | 'lg';


export default interface ResponsiveDashboardLayoutType {
    xs?: DashboardElementLayoutCollectionType,
    sm?: DashboardElementLayoutCollectionType,
    md: DashboardElementLayoutCollectionType,
    lg?: DashboardElementLayoutCollectionType
}

export interface ResponsiveDashboardElementLayoutType {
    xs?: DashboardElementLayoutType,
    sm?: DashboardElementLayoutType,
    md: DashboardElementLayoutType,
    lg?: DashboardElementLayoutType
}