import DashbaordElementCollectionType from "./DashbaordElementCollection.types";
import ResponsiveDashboardLayoutType from "./ResponsiveDashboardLayout.types";

export type CustomActionType<TElementProps> = (event: any) => (elements: DashbaordElementCollectionType<TElementProps>, layouts: ResponsiveDashboardLayoutType) => [DashbaordElementCollectionType<TElementProps>, ResponsiveDashboardLayoutType];
