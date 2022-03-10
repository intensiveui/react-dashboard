import { useContext } from 'react';
import GridContext from '../../contexts/GridContext/GridContext';
import GridElementType from '../../types/GridElement.types';
import GridElementActionsType from '../../types/GridElementActions.types';
import GridElementLayoutType from '../../types/GridElementLayout.types';

type UseGridElementType = (
  id: string
) => [GridElementType, GridElementLayoutType, GridElementActionsType];

const useGridElement: UseGridElementType = (id) => {
  const { elements, actions, layouts } = useContext(GridContext);
  const { deleteElement } = actions;

  const element = elements.filter((t) => t.id === id)[0];
  const layout = layouts.filter(t => t.i === id)[0];

  return [
    element, 
    layout,
    {
      delete: () => deleteElement(element)
    }
  ];
};

export default useGridElement;
