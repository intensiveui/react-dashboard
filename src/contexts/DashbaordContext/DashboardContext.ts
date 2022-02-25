import { createContext } from 'react';
import DashboardContextType from './DashboardContext.types';

//@ts-expect-error  we need to initialize the variable
const DashboardContext = createContext<DashboardContextType>();

export default DashboardContext;
