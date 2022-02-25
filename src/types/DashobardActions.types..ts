import DashbaordElementType from './DashobardElement.types';

export default interface DashobardActionsType {
  addElement: (element: DashbaordElementType) => void;
  deleteElement: (id: string) => void;
  toggleEditMode: () => void;
}
