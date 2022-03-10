import DashbaordElementCollectionType from "./DashbaordElementCollection.types";
import ResponsiveDashboardLayoutType from "./ResponsiveDashboardLayout.types";

export type CustomActionType = (elements: DashbaordElementCollectionType, layouts: ResponsiveDashboardLayoutType) => [DashbaordElementCollectionType, ResponsiveDashboardLayoutType];
