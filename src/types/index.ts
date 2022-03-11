import DashbaordElementType from "./DashbaordElement.types";
import DashbaordElementCollectionType from "./DashbaordElementCollection.types";
import ResponsiveDashboardLayoutType, { ResponsiveDashboardElementLayoutType } from "./ResponsiveDashboardLayout.types";

export type CustomDashboardActionType<TElementProps> = (event: any) => 
    (elements: DashbaordElementCollectionType<TElementProps>, layouts: ResponsiveDashboardLayoutType)  => 
        [DashbaordElementCollectionType<TElementProps>, ResponsiveDashboardLayoutType];

export type CustomDashboardElementActionType<TElementProps> = (event: any) => 
    (element: DashbaordElementType<TElementProps>, layout: ResponsiveDashboardElementLayoutType) => 
        [DashbaordElementType<TElementProps>, ResponsiveDashboardElementLayoutType];
