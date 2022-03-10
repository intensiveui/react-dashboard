import React from 'react';
import clsx from "clsx";
import {useItemBoxStyles} from "./styles";
import { useEditMode } from 'new/domain/contexts/EditModeContext';

export interface LayoutItemElementWrapperProps {
}

const LayoutItemElementWrapper : React.FC<LayoutItemElementWrapperProps>= ({children}) => {
    const classes = useItemBoxStyles();
    const editMode = useEditMode()

    return (
        <div
            className={clsx(classes.root, editMode && classes.rootEditModeStyle)}
        >
            {children}
        </div>
    );
};

export default LayoutItemElementWrapper;
