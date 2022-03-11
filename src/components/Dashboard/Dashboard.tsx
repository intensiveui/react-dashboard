import useDashboard from '../../hooks/useDashboard';
import React from 'react';
import { DashboardProps } from './Dashboard.types';
import DashboardActionsType from '../../types/DashboardActionsType';
import DashboardContext from '../../contexts/DashbaordContext/DashboardContext';
import { DashboardElementProps } from '../../types/DashboardElementProps';

function Dashboard<TElementProps extends DashboardElementProps, TActionsType extends DashboardActionsType<TElementProps>>(props: DashboardProps<TElementProps, TActionsType>) {
  const {
    id,
    title,
    elements: initialElements,
    layouts: initialLayouts,
    columnCount,
    children,
    editModeDefaultValue,
    elementWrapper,
    actions: customActions
  } = props;

  const [elements, layouts, actions, settings] = useDashboard<TElementProps, TActionsType>({
    initialElements,
    initialLayouts,
    editModeDefaultValue,
    customActions
  });


  return (
    <DashboardContext.Provider
      value={{ id, elements, layouts, actions, columnCount, settings, elementWrapper }}
    >
      {title}
      {children({
        id,
        elements,
        layouts,
        columnCount,
        actions
      })}
    </DashboardContext.Provider>
  );
}

export default Dashboard;
