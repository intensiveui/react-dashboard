import useDashboard from '../../hooks/useDashboard';
import React, { FC } from 'react';
import { DashboardProps } from './Dashboard.types';
import DashobardActionsType from '../../types/DashobardActions.types.';
import createDashboardContext from '../../contexts/DashbaordContext/DashboardContext';
import DashboardContext from '../../contexts/DashbaordContext/DashboardContext';

function Dashboard<TActionsType extends DashobardActionsType>(props: DashboardProps<TActionsType>) {
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

  
  type NewActionsType = {
    [Property in keyof TActionsType]: () => void;
  };

  const [elements, layouts, actions, settings] = useDashboard<TActionsType, NewActionsType>({
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
      {children<NewActionsType>({
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
