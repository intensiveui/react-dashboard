import { createContext } from 'react';
import DashobardActionsType from '../../types/DashobardActions.types.';
import DashboardContextType from './DashboardContext.types';

//@ts-expect-error error
const DashboardContext = createContext<DashboardContextType<DashobardActionsType>>();


export default DashboardContext;
