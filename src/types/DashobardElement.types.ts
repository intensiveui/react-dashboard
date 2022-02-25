import DashboardElementLayoutType from './DashboardElementLayout';
import DashobardElementComponentProps from './DashobardElementComponentProps.types';

export interface DashbaordElementBaseType {
  id: string;
  title: string;
}

export default interface DashbaordElementType extends DashbaordElementBaseType {
  render: (props: DashobardElementComponentProps) => JSX.Element;
  layout: DashboardElementLayoutType;
}
