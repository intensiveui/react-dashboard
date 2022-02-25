import { useState } from 'react';
import DashbaordElementCollectionType from '../../types/DashbaordElementCollection.types';
import DashobardActionsType from '../../types/DashobardActions.types.';
import DashbaordElementType from '../../types/DashobardElement.types';
import DashobardSettingsType from '../../types/DashobardSettings.types';

type UseDashboardType = (
  elements: DashbaordElementCollectionType,
  editModeDefaultValue: boolean
) => [
  DashbaordElementCollectionType,
  DashobardActionsType,
  DashobardSettingsType
];

const useDashboard: UseDashboardType = (elements, editModeDefaultValue) => {
  const [innerElements, setInnerElements] = useState(elements);
  const [editMode, setEditMode] = useState(editModeDefaultValue);

  const addElement = (element: DashbaordElementType) => {
    setInnerElements((prev) => [...prev, element]);
  };

  const deleteElement = (id: string) => {
    setInnerElements((prev) => {
      return prev.filter((t) => t.id !== id);
    });
  };

  return [
    innerElements,
    {
      addElement,
      deleteElement,
      toggleEditMode: () => setEditMode((p) => !p)
    },
    {
      editModeEnabled: editMode
    }
  ];
};

export default useDashboard;
