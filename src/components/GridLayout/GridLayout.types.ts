import { FC } from "react";
import GridActionsType from "../../types/GridActions.types";
import GridElementCollectionType from "../../types/GridElementCollection.types";
import GridElementComponentProps from "../../types/GridElementComponentProps.types";
import GridElementLayoutCollectionType from "../../types/GridElementLayoutCollection.types";

export interface GridLayoutProps {
  id: string,
  onLayoutChange?: any,
  elements: GridElementCollectionType,
  layouts: GridElementLayoutCollectionType,
  elementWrapper: FC<GridElementComponentProps>,
  callbacks?: GridActionsType,
  columnCount: number,
  isDraggable: boolean,
  isResizable: boolean,
  children: (args: GridLayoutChildrenProps) => JSX.Element;
}

export interface GridLayoutChildrenProps {
  GridLayoutComponent: FC<{}>;
  actions: GridActionsType;
}