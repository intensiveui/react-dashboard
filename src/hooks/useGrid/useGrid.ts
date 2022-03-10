import { useState } from "react";
import GridActionsType from "../../types/GridActions.types";
import GridElementType from "../../types/GridElement.types";
import GridElementCollectionType from "../../types/GridElementCollection.types";
import GridElementLayoutCollectionType from "../../types/GridElementLayoutCollection.types";
import GridSettingsType from "../../types/GridSettings.types";

type UseGrid = (
  elements: GridElementCollectionType,
  layouts: GridElementLayoutCollectionType,
  callbacks?: GridActionsType
) => [
  GridElementCollectionType,
  GridElementLayoutCollectionType,
  GridActionsType,
  GridSettingsType
];

const useGrid: UseGrid = (elements, layouts, callbacks) => {
  const [innerElements, setInnerElements] = useState(elements);
  const [innerLayouts, setInnerLayouts] = useState(layouts);

  const deleteElement = (element: GridElementType) => {
    setInnerElements(prev => prev.filter(t => t.id !== element.id));
    setInnerLayouts(prev => prev.filter(t => t.i !== element.id))
    callbacks?.deleteElement(element)
  }

  return [
    innerElements,
    innerLayouts,
    {
      deleteElement: deleteElement,
      addElement: () => null,
      toggleEditMode: () => null
    },
    {
      editModeEnabled: false
    }
  ];
};

export default useGrid;
