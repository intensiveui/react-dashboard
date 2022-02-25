import { DashbaordElementBaseType } from '../../types/DashobardElement.types';
import DashobardElementActionsType from '../../types/DashobardElementActions.types';
import useDashboardContext from '../useDashboardContext';

type UseDashboardElementType = (
  id: string
) => [DashbaordElementBaseType, DashobardElementActionsType];

const useDashboardElement: UseDashboardElementType = (id) => {
  const { elements, actions } = useDashboardContext();
  const { deleteElement } = actions;

  const element = elements.find((t) => t.id === id);

  return [
    {
      id: element?.id || '',
      title: element?.title || ''
    },
    {
      delete: () => deleteElement(id)
    }
  ];
};

export default useDashboardElement;
