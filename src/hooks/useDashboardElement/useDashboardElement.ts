import DashbaordElementType from '../../types/DashbaordElement.types';
import DashboardActionsType from '../../types/DashboardActionsType';
import DashboardElementActionsType from '../../types/DashboardElementActions.types';
import { DashboardElementProps } from '../../types/DashboardElementProps';
import useDashboardContext from '../useDashboardContext';

function useDashboardElement<TElementProps extends DashboardElementProps, TActionsType extends DashboardActionsType<TElementProps>>(
  id: string
) : [DashbaordElementType<TElementProps>, DashboardElementActionsType]
{
  const { elements, actions } = useDashboardContext<TElementProps, TActionsType>();
  const { deleteElement } = actions;

  const element = elements.filter((t) => t.id === id)[0];

  return [
    element,
    {
      delete: () => deleteElement(element)
    }
  ];
}

export default useDashboardElement;
