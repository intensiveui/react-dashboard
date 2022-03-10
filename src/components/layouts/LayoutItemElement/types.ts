import { GridLayoutData, GridLayoutItemProps } from "new/core/gridLayout/types";
import { AttributeBase } from "new/domain/types/attribute.types";
import React from "react";

export interface LayoutElementProps {
    value: string
}

export interface LayoutTextElementProps extends LayoutElementProps {
}

export interface LayoutBinerElementProps extends LayoutElementProps {
    attribute: AttributeBase
}

export interface LayoutElementComponentProps<Value> extends GridLayoutItemProps {
    defaultValue: string,
    onDone: (value: Value) => void,
    onDelete: (key: string) => void
}

export type LayoutElementType = "Text" | "Binder";


export interface LayoutElement {
    id: number, 
    key: string,
    props: LayoutElementProps,
    layout: ElementLayout,
    type: LayoutElementType
}

export interface LayoutElementUI extends LayoutElement {
    render: LayoutElementComponentRenderer
}

export interface EntitiyGridLayoutData extends GridLayoutData<LayoutElement> {

}

export type LayoutElementComponentRenderer = (props: React.PropsWithChildren<LayoutElementProps>) => Element;
export type LayoutElementRenderer = (element: LayoutElement) => LayoutElementComponentRenderer

export interface ElementLayout {
    minWidth: number, 
    minHeight: number,
    y?: number
}