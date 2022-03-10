import { FC } from "react";
import GridActionsType from "../../types/GridActions.types";
import GridElementCollectionType from "../../types/GridElementCollection.types";
import GridElementComponentProps from "../../types/GridElementComponentProps.types";
import GridElementLayoutCollectionType from "../../types/GridElementLayoutCollection.types";

export interface GridLayoutProps {
  onLayoutChange?: any,
  elements: GridElementCollectionType,
  layouts: GridElementLayoutCollectionType,
  elementWrapper: FC<GridElementComponentProps>,
  columnCount: number,
  isDraggable: boolean,
  isResizable: boolean,
  children: (args: GridLayoutChildrenProps) => JSX.Element;
}

export interface GridLayoutChildrenProps {
  elementsGridJsx: () => JSX.Element;
  actions: GridActionsType;
}