import { useMemo } from 'react';
import DashbaordElementType from '../../types/DashbaordElement.types';
import DashboardActionsType from '../../types/DashboardActionsType';
import DashboardElementActionsType from '../../types/DashboardElementActions.types';
import {DashboardElementDefaultActionsType} from '../../types/DashboardElementActions.types';
import { DashboardElementProps } from '../../types/DashboardElementProps';
import { ResponsiveDashboardElementLayoutType } from '../../types/ResponsiveDashboardLayout.types';
import { getElementLayouts } from '../../utils/dashboaardElementUtils';
import useDashboardContext from '../useDashboardContext';

function useDashboardElement<
    TElementProps extends DashboardElementProps, 
    TActionsType extends DashboardActionsType<TElementProps>,
    TElementActionsType extends DashboardElementActionsType<TElementProps>
  >(
  id: string
) : [
  DashbaordElementType<TElementProps>,
  ResponsiveDashboardElementLayoutType,
  TElementActionsType & DashboardElementDefaultActionsType<TElementProps>
]
{ 
  const { elements, actions, customElementActions, layouts } = useDashboardContext<TElementProps, TActionsType, TElementActionsType>();
  const { deleteElement, updateElement } = actions;

  const element = elements.filter((t) => t.id === id)[0];
  const layout = useMemo(() => 
    getElementLayouts(layouts, element), 
    []
  );

  const elementActions: TElementActionsType = useMemo(() => {
    let result: TElementActionsType = {};
    for(const key in customElementActions) {
      result = {...result, [key]: (event: any) => {
        const [e, l] = customElementActions[key]?.(event)({...element}, {...layout});
        updateElement(e);
      }}
    }
    return result;
  },  [elements])

  return [
    element,
    layout,
    {
      ...elementActions,
      delete: () => deleteElement(element)
    }
  ];
}

export default useDashboardElement;
