import { useEffect, useState } from "react";
import { LayoutElementUI } from "../LayoutItemElement/types";

export type LayoutData = {
    layout: any,
    items: LayoutElementUI[];
}

export type LayoutDataActions = {
    setItems: any
}

export const useLayoutData: (props: {initialData: LayoutData, generateLayout: any}) => {layoutData: LayoutData, layoutActions: LayoutDataActions} = ({initialData, generateLayout}) => {
    const [layout, setLayout] = useState(initialData.items);
    const [items, setItems] = useState<LayoutElementUI[] | null>(initialData.layout);

    useEffect(() => {
        if(!items) {
            return
        }
        setLayout(generateLayout(items))
    }, [items])

    return {
        layoutData: {
            items, 
            layout
        },
        layoutActions: {
            setItems
        }
    }
}