import DashbaordElementType from '../../types/DashobardElement.types';
import DashobardElementActionsType from '../../types/DashobardElementActions.types';
import useDashboardContext from '../useDashboardContext';

type UseDashboardElementType = (
  id: string
) => [DashbaordElementType, DashobardElementActionsType];

const useDashboardElement: UseDashboardElementType = (id) => {
  const { elements, actions } = useDashboardContext();
  const { deleteElement } = actions;

  const element = elements.filter((t) => t.id === id)[0];

  return [
    element,
    {
      delete: () => deleteElement(element)
    }
  ];
};

export default useDashboardElement;
