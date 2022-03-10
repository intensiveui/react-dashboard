import { useContext } from 'react';
import DashboardContext from '../../contexts/DashbaordContext/DashboardContext';
import DashboardContextType from '../../contexts/DashbaordContext/DashboardContext.types';
import DashobardActionsType from '../../types/DashobardActions.types.';

function useDashboardContext<TActionsType extends DashobardActionsType>() {
  const context = useContext<DashboardContextType<TActionsType>>(
    (DashboardContext as unknown) as React.Context<DashboardContextType<TActionsType>>
  );
  if (!context) {
    throw new Error('useDashboardContext must be used under DashboardContextProvider');
  }
  return context;
};

export default useDashboardContext;
