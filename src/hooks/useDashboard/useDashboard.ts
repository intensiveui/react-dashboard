import { useMemo, useState } from 'react';
import { DashboardProps } from '../../components/Dashboard/Dashboard.types';
import DashbaordElementCollectionType from '../../types/DashbaordElementCollection.types';
import DashobardActionsType, { DashboardActionAddElementType } from '../../types/DashobardActions.types.';
import DashbaordElementType from '../../types/DashobardElement.types';
import DashobardSettingsType from '../../types/DashobardSettings.types';
import ResponsiveDashboardLayoutType, { LayoutBreakpointsType, ResponsiveDashboardElementLayoutType } from '../../types/ResponsiveDashboardLayout.types';


function useDashboard<TActionsType extends DashobardActionsType, NewActionsType>({initialElements, initialLayouts, editModeDefaultValue, actions}: {
  initialElements: DashbaordElementCollectionType,
  initialLayouts: ResponsiveDashboardLayoutType,
  editModeDefaultValue: boolean, 
  actions: TActionsType
}) : [
  DashbaordElementCollectionType,
  ResponsiveDashboardLayoutType,
  NewActionsType,
  DashobardSettingsType
] {
  const [elements, setElements] = useState(initialElements);
  const [layouts, setLayouts] = useState(initialLayouts);
  const [editMode, setEditMode] = useState(editModeDefaultValue);

  const addElement: DashboardActionAddElementType = (element, layout) => {
    setElements(prev => [...prev, element]);
    setLayouts(prev => addElementLayouts(prev, element, layout));
  };

  const deleteElement = (element: DashbaordElementType) => {
    setElements(prev => prev.filter((t) => t.id !== element.id));
    setLayouts(prev => deleteElementLayouts(prev, element))
  };

  const deleteElementLayouts = (layouts: ResponsiveDashboardLayoutType, element: DashbaordElementType) => {
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

  const addElementLayouts = (layouts: ResponsiveDashboardLayoutType, element: DashbaordElementType, layout: ResponsiveDashboardElementLayoutType) => {
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
    let n: NewActionsType = {};
   
    for(const a in actions) {
      //
      n = {...n, [a]: () => {
        const [e, l] = actions[a]?.(elements, layouts);
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
    newaActions,
    {
      editModeEnabled: editMode
    }
  ];
};

export default useDashboard;
