import { DashobardElementComponentProps } from '..';
import GridElementType from './GridElement.types';

export interface DashbaordElementBaseType {
  id: string,
  title: string;
}

export default interface DashbaordElementType<TElementProps> extends DashbaordElementBaseType, GridElementType {
  render: (props: DashobardElementComponentProps) => JSX.Element,
  props: TElementProps
}
