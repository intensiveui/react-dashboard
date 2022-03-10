import React, { useEffect, useRef, useState } from 'react';
import clsx from "clsx";
import { useLayoutTextElementStyles } from './styles';
import { LayoutElementComponentProps } from '../types';
import { useAppDispatch } from 'new/domain/store/hooks';
import { showModal } from 'new/core/utils/modalUtils';
import modals from 'new/domain/modals/modals';
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import { useEditMode } from 'new/domain/contexts/EditModeContext';
import AbsoluteView from 'new/core/elements/AbsoluteView/AbsoluteView';

export interface LayoutTextElementComponentProps extends LayoutElementComponentProps<string> {
    readonly?: boolean
}

const LayoutTextElement : React.FC<LayoutTextElementComponentProps> = ({defaultValue, onDone, onDelete, injectedProps}) => {
    const classes = useLayoutTextElementStyles()
    const wrapperRef = useRef(null);
    const dispatch = useAppDispatch();
    const [html, setHtml] = useState(defaultValue)
    const editMode = useEditMode();

    const onEditClick = () => {
        dispatch(showModal(modals.textEditor({
            onChange: (html) => {
                setHtml(html)
                onDone(html)
            },
            defaultValue: html
        })))
    }

    const onDeleteClick = () => {
        injectedProps?.id && onDelete(injectedProps.id)
    }
    
    return (
        <div
            className={clsx(classes.root)}
            ref={wrapperRef}
        >
            {
                editMode && 
                    <AbsoluteView right={10} top={10}>
                        <span style={{fontSize: 18, color: "crimson", cursor: "pointer"}} onClick={onEditClick}>
                            <EditIcon fontSize={"inherit"} color={"inherit"}/>
                        </span>
                        <span style={{fontSize: 18, color: "crimson", cursor: "pointer"}} onClick={onDeleteClick}>
                            <DeleteIcon fontSize={"inherit"} color={"inherit"}/>
                        </span>
                    </AbsoluteView>
            }
            <span dangerouslySetInnerHTML={{ __html: html }}/>
        </div>
    );
};

export default LayoutTextElement;
