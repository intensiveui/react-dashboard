import { useContext } from 'react';
import DashboardContext from '../../contexts/DashbaordContext/DashboardContext';
import DashboardContextType from '../../contexts/DashbaordContext/DashboardContext.types';
import DashboardActionsType from '../../types/DashboardActionsType';
import DashboardElementActionsType from '../../types/DashboardElementActions.types';
import { DashboardElementProps } from '../../types/DashboardElementProps';

function useDashboardContext<
  TElementProps extends DashboardElementProps, 
  TActionsType extends DashboardActionsType<TElementProps>,
  TElementActionsType extends DashboardElementActionsType<TElementProps>
>() {
  const context = useContext<DashboardContextType<TElementProps, TActionsType, TElementActionsType>>(
    (DashboardContext as unknown) as React.Context<DashboardContextType<TElementProps, TActionsType, TElementActionsType>>
  );
  if (!context) {
    throw new Error('useDashboardContext must be used under DashboardContextProvider');
  }
  return context;
}

export default useDashboardContext;
