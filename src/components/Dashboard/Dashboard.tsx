import useDashboard from '../../hooks/useDashboard';
import React from 'react';
import { DashboardProps } from './Dashboard.types';
import DashboardActionsType from '../../types/DashboardActionsType';
import DashboardContext from '../../contexts/DashbaordContext/DashboardContext';
import { DashboardElementProps } from '../../types/DashboardElementProps';
import DashboardElementActionsType from '../../types/DashboardElementActions.types';

function Dashboard<
  TElementProps extends DashboardElementProps, 
  TActionsType extends DashboardActionsType<TElementProps>,
  TElementActionsType extends DashboardElementActionsType<TElementProps>
>(props: DashboardProps<TElementProps, TActionsType, TElementActionsType>) {
  const {
    id,
    title,
    elements: initialElements,
    layouts: initialLayouts,
    columnCount,
    children,
    editModeDefaultValue,
    elementWrapper,
    customDashboardActions,
    customElementActions
  } = props;

  const [elements, layouts, actions, settings] = useDashboard<TElementProps, TActionsType, TElementActionsType>({
    initialElements,
    initialLayouts,
    editModeDefaultValue,
    customDashboardActions
  });


  return (
    <DashboardContext.Provider
      value={{ id, elements, layouts, customElementActions , actions, columnCount, settings, elementWrapper }}
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
