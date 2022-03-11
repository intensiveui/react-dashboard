import { useMemo, useState } from 'react';
import DashbaordElementCollectionType from '../../types/DashbaordElementCollection.types';
import DashboardActionsType, { DashboardActionAddElementType, DashboardDefaultActionsType } from '../../types/DashboardActionsType';
import DashbaordElementType from '../../types/DashbaordElement.types';
import DashboardSettingsType from '../../types/DasbhoardSettings.types';
import ResponsiveDashboardLayoutType from '../../types/ResponsiveDashboardLayout.types';
import { DashboardElementProps } from '../../types/DashboardElementProps';
import { addElementLayouts, deleteElementLayouts } from '../../utils/dashboaardElementUtils';


function useDashboard<TElementProps extends DashboardElementProps, TActionsType extends DashboardActionsType<TElementProps>>(props: {
  initialElements: DashbaordElementCollectionType<TElementProps>,
  initialLayouts: ResponsiveDashboardLayoutType,
  editModeDefaultValue: boolean, 
  customActions: TActionsType
}) : [
  DashbaordElementCollectionType<TElementProps>,
  ResponsiveDashboardLayoutType,
  TActionsType & DashboardDefaultActionsType<TElementProps>,
  DashboardSettingsType
] {
  const {
    initialElements, 
    initialLayouts, 
    editModeDefaultValue,
    customActions
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

  const actions: TActionsType = useMemo(() => {
    let result: TActionsType = {};
    const keys = Object.keys(customActions);
    for(const key in keys) {
      result = {...result, [key]: (event: any) => {
        const [element, layout] = customActions[key]?.(event)(elements, layouts);
        setElements(element)
        setLayouts(layout)
      }}
    }
    return result;
  },  [])

  return [
    elements,
    layouts,
    {
      ...actions,
      addElement,
      deleteElement,
      toggleEditMode: () => setEditMode(t => !t)
    },
    {
      editModeEnabled: editMode
    }
  ];
};

export default useDashboard;
