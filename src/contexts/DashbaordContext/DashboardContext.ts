import { createContext } from 'react';
import DashboardActionsType from '../../types/DashboardActionsType';
import { DashboardElementProps } from '../../types/DashboardElementProps';
import DashboardContextType from './DashboardContext.types';


const DashboardContext = createContext<DashboardContextType<DashboardElementProps, DashboardActionsType<DashboardElementProps>>>({
    elements: [],
    layouts: {},
    actions: {},
    id: "",
    settings: {
        editModeEnabled: false
    },
    columnCount: 12
});


export default DashboardContext;
