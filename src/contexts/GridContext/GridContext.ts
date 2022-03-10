import { createContext } from 'react';
import GridContextType from './GridContextType.types';

//@ts-expect-error  we need to initialize the variable
const GridContext = createContext<GridContextType>();

export default GridContext;
