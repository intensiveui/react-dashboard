import GridElementType from './GridElement.types';

export default interface GridActionsType {
  addElement: (element: GridElementType) => void;
  deleteElement: (element: GridElementType) => void;
  toggleEditMode: () => void;
}
