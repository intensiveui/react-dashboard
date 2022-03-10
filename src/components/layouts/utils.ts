import { LayoutElement, LayoutElementUI, LayoutElementRenderer } from "./LayoutItemElement/types";

export const layoutBinderElementValuePlaceholder = "[Value]";

export const mapLayoutElementsToLayoutElementsUI : (elements: LayoutElement[], renderer: LayoutElementRenderer) => LayoutElementUI[] = (elements, renderer)  => {
    return elements.map(element => mapLayoutElementToLayoutElementUI(element, renderer));
}
  
export const mapLayoutElementToLayoutElementUI : (element: LayoutElement, renderer: LayoutElementRenderer) => LayoutElementUI  = (element: LayoutElement, renderer) => {
    return {...element, render: renderer(element)};
}

export const mapLayoutBinderElementToLayoutTextElement : (element: LayoutElement, value: string) => LayoutElement  = (element, value) => {
    return {...element, type: "Text", props: {value: element.props.value.replace(layoutBinderElementValuePlaceholder, value)}};
}
  