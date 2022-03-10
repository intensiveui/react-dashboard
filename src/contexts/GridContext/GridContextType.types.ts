import { FC } from 'react';
import GridActionsType from '../../types/GridActions.types';
import GridElementCollectionType from '../../types/GridElementCollection.types';
import GridElementComponentProps from '../../types/GridElementComponentProps.types';
import GridElementLayoutCollectionType from '../../types/GridElementLayoutCollection.types';
import GridSettingsType from '../../types/GridSettings.types';

export default interface GridContextType {
  id: string;
  elements: GridElementCollectionType;
  layouts: GridElementLayoutCollectionType,
  elementWrapper: FC<GridElementComponentProps>;
  columnCount: number;
  actions: GridActionsType;
  settings: GridSettingsType;
}
