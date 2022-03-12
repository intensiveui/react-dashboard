import { useMemo, useState } from 'react';
import DashbaordElementCollectionType from '../../types/DashbaordElementCollection.types';
import DashboardActionsType, { DashboardActionAddElementType, DashboardDefaultActionsType } from '../../types/DashboardActionsType';
import DashbaordElementType from '../../types/DashbaordElement.types';
import DashboardSettingsType from '../../types/DasbhoardSettings.types';
import ResponsiveDashboardLayoutType from '../../types/ResponsiveDashboardLayout.types';
import { DashboardElementProps } from '../../types/DashboardElementProps';
import { addElementLayouts, deleteElementLayouts } from '../../utils/dashboaardElementUtils';
import DashboardElementActionsType, { DashboardElementDefaultActionsType } from '../../types/DashboardElementActions.types';


function useDashboard<
  TElementProps extends DashboardElementProps,
  TActionsType extends DashboardActionsType<TElementProps>,
  TElementActionsType extends DashboardElementActionsType<TElementProps>
>(props: {
  initialElements: DashbaordElementCollectionType<TElementProps>,
  initialLayouts: ResponsiveDashboardLayoutType,
  editModeDefaultValue: boolean, 
  customDashboardActions?: TActionsType
}) : [
  DashbaordElementCollectionType<TElementProps>,
  ResponsiveDashboardLayoutType,
  TActionsType & DashboardDefaultActionsType<TElementProps>,
  //TElementActionsType & DashboardElementDefaultActionsType<TElementProps>,
  DashboardSettingsType
] {
  const {
    initialElements, 
    initialLayouts, 
    editModeDefaultValue,
    customDashboardActions
  } = props;
  const [elements, setElements] = useState(initialElements);
  const [layouts, setLayouts] = useState(initialLayouts);
  const [editMode, setEditMode] = useState(editModeDefaultValue);

  const addElement: DashboardActionAddElementType<TElementProps> = (element, layout) => {
    setElements(prev => [...prev, element]);
    setLayouts(prev => addElementLayouts(prev, element, layout));
  };

  const deleteElement = (element: DashbaordElementType<TElementProps>) => {
    setElements(prev => prev.filter((t) => t.id !== element.id));
    setLayouts(prev => deleteElementLayouts(prev, element))
  };

  const updateElement = (element: DashbaordElementType<TElementProps>) => {
    setElements(prev => {
      const elementIndex = prev.findIndex(t => t.id === element.id);
      const newE = [...prev];
      newE.splice(elementIndex, 1, element)
      return newE;
    });
    //setLayouts(prev => deleteElementLayouts(prev, element))
  };

  const actions: TActionsType = useMemo(() => {
    let result: TActionsType = {};
    for(const key in customDashboardActions) {
      result = {...result, [key]: (event: any) => {
        const [e, l] = customDashboardActions[key]?.(event)(elements, layouts);
        setElements(e)
        setLayouts(layouts)
      }}
    }
    return result;
  },  [elements, layouts])

  return [
    elements,
    layouts,
    {
      ...actions,
      addElement,
      deleteElement,
      toggleEditMode: () => setEditMode(t => !t),
      updateElement
    },
    {
      editModeEnabled: editMode
    }
  ];
};

export default useDashboard;
