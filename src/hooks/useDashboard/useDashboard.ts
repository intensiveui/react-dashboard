import { useMemo, useState } from 'react';
import { DashboardProps } from '../../components/Dashboard/Dashboard.types';
import DashbaordElementCollectionType from '../../types/DashbaordElementCollection.types';
import DashobardActionsType, { DashboardActionAddElementType } from '../../types/DashobardActions.types.';
import DashbaordElementType from '../../types/DashobardElement.types';
import DashobardSettingsType from '../../types/DashobardSettings.types';
import ResponsiveDashboardLayoutType, { LayoutBreakpointsType, ResponsiveDashboardElementLayoutType } from '../../types/ResponsiveDashboardLayout.types';


function useDashboard<TElementProps, TActionsType extends DashobardActionsType>({initialElements, initialLayouts, editModeDefaultValue, actions}: {
  initialElements: DashbaordElementCollectionType<TElementProps>,
  initialLayouts: ResponsiveDashboardLayoutType,
  editModeDefaultValue: boolean, 
  actions: TActionsType
}) : [
  DashbaordElementCollectionType<TElementProps>,
  ResponsiveDashboardLayoutType,
  TActionsType,
  DashobardSettingsType
] {
  const [elements, setElements] = useState(initialElements);
  const [layouts, setLayouts] = useState(initialLayouts);
  const [editMode, setEditMode] = useState(editModeDefaultValue);

  const addElement: DashboardActionAddElementType = (element, layout) => {
    setElements(prev => [...prev, element]);
    setLayouts(prev => addElementLayouts(prev, element, layout));
  };

  const deleteElement = (element: DashbaordElementType<TElementProps>) => {
    setElements(prev => prev.filter((t) => t.id !== element.id));
    setLayouts(prev => deleteElementLayouts(prev, element))
  };

  const deleteElementLayouts = (layouts: ResponsiveDashboardLayoutType, element: DashbaordElementType<TElementProps>) => {
    const keys = Object.keys(layouts) as LayoutBreakpointsType[];
    let layout: ResponsiveDashboardLayoutType  = {};
    for(const key of keys) {
      const singleLayout = layouts[key];
      if(singleLayout) {
        layout = {...layout, [key]: singleLayout.filter(t => t.i !== element.id)}
      }
    }
    return layout;
  }

  const addElementLayouts = (layouts: ResponsiveDashboardLayoutType, element: DashbaordElementType<TElementProps>, layout: ResponsiveDashboardElementLayoutType) => {
    const keys = Object.keys(layouts) as LayoutBreakpointsType[];
    for(const key of keys) {
      const singleLayout = layouts[key];
      if(singleLayout) {
        layouts = {...layouts, [key]: [...singleLayout, layout[key]]}
      }
    }
    return layouts;
  }

  const newaActions = useMemo(() => {
    let n = {};
   
    for(const a in actions) {
      //
      n = {...n, [a]: (event: any) => {
        const [e, l] = actions[a]?.(event)(elements, layouts);
        setElements(e)
        setLayouts(l)
      }}
    }
    return n;
  },  [])

  //const p : DashboardProps<tttt>

  return [
    elements,
    layouts,
    {
      ...newaActions,
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
