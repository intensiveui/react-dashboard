import { createContext } from 'react';
import DashboardActionsType from '../../types/DashboardActionsType';
import DashboardElementActionsType from '../../types/DashboardElementActions.types';
import { DashboardElementProps } from '../../types/DashboardElementProps';
import DashboardContextType from './DashboardContext.types';


const DashboardContext = createContext<DashboardContextType<DashboardElementProps, DashboardActionsType<DashboardElementProps>, DashboardElementActionsType<DashboardElementProps>>>({
    elements: [],
    layouts: {},
    actions: {},
    customElementActions: {},
    id: "",
    settings: {
        editModeEnabled: false
    },
    columnCount: 12
});


export default DashboardContext;
