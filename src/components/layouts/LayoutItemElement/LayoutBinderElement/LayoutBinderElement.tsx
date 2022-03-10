import React, { useEffect, useMemo, useRef, useState } from 'react';
import clsx from "clsx";
import { useLayoutBinderElementStyles } from './styles';
import { LayoutElementComponentProps , LayoutBinerElementProps} from '../types';
import { useAppDispatch } from 'new/domain/store/hooks';
import { showModal } from 'new/core/utils/modalUtils';
import modals from 'new/domain/modals/modals';
import EditIcon from "@material-ui/icons/Edit"


import { useEditMode } from 'new/domain/contexts/EditModeContext';
import Select, { toSelectItem } from 'new/core/elements/FormControls/Select';
import { Attribute, AttributeBase } from 'new/domain/types/attribute.types';
import { SelectItem } from 'new/core/types/select.types';
import { tryParseInt } from 'new/core/utils/typesUtils';
import { layoutBinderElementValuePlaceholder } from '../../utils';
import AbsoluteView from 'new/core/elements/AbsoluteView/AbsoluteView';
import DeleteIcon from "@material-ui/icons/Delete"


export interface LayoutBinderElementComponentProps extends LayoutBinerElementProps, LayoutElementComponentProps<LayoutBinerElementProps> {
    source: Array<Attribute>
}

const LayoutBinderElement : React.FC<LayoutBinderElementComponentProps>= ({defaultValue, onDone, attribute, source, injectedProps, onDelete}) => {
    const classes = useLayoutBinderElementStyles()
    const dispatch = useAppDispatch();
    const valuePlaceholder = layoutBinderElementValuePlaceholder;
    const [html, setHtml] = useState(defaultValue || valuePlaceholder)
    const editMode = useEditMode();

    useEffect(() => {
        onDone({value: html, attribute: selectedAttribute});
    }, [])

    const onEditClick = () => {
        dispatch(showModal(modals.textEditor({
            onChange: (html) => {
                setHtml(html)
                onDone({value: html, attribute: selectedAttribute});
            },
            defaultValue: valuePlaceholder
        })))
    }

    const selectItems: SelectItem[] = useMemo(() => {
        return source.map(a => toSelectItem(a.name, a.id))
    }, [source])

    console.log(source)
    const [selectedAttribute, setSelectedAttribute] = useState<AttributeBase>({id: source[0].id, name: source[0].name});

    const onDeleteClick = () => {
        injectedProps?.id && onDelete(injectedProps.id)
    }

    return (
        <div
            className={clsx(classes.root)}
        >
            <div style={{display: "flex", alignItems: "center"}}>
                <span dangerouslySetInnerHTML={{ __html: html }} style={{marginInline: 5}}/>
                <Select
                    onChange={value => {
                        const selectedItem = selectItems.find(t => t.value === value);
                        if(selectedItem) {
                            const selectedAttribute = {id: tryParseInt(selectedItem.value.toString(), 0), name: selectedItem.name};
                            setSelectedAttribute(selectedAttribute)
                            onDone({value: html, attribute: selectedAttribute});
                        }
                    }}
                    defaultValue={selectedAttribute?.id}
                    items={selectItems}
                />
            </div>
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
        </div>
    );
};

export default LayoutBinderElement;
