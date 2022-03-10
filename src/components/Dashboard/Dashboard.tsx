import useDashboard from '../../hooks/useDashboard';
import React, { FC } from 'react';
import { DashboardProps } from './Dashboard.types';
import DashobardActionsType from '../../types/DashobardActions.types.';
import DashboardContext from '../../contexts/DashbaordContext/DashboardContext';

function Dashboard<TElementProps, TActionsType extends DashobardActionsType>(props: DashboardProps<TElementProps, TActionsType>) {
  const {
    id,
    title,
    elements: initialElements,
    layouts: initialLayouts,
    columnCount,
    children,
    editModeDefaultValue,
    elementWrapper,
    actions: a
  } = props;

  const [elements, layouts, actions, settings] = useDashboard<TActionsType>({
    initialElements,
    initialLayouts,
    editModeDefaultValue,
    actions: a
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
        actions, 
        context: DashboardContext
      })}
    </DashboardContext.Provider>
  );
};

export default Dashboard;
