import GridElementComponentProps from "./GridElementComponentProps.types";

export default interface GridElementType {
  id: string;
  render: (props: GridElementComponentProps) => JSX.Element
}
