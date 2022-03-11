import { DashboardElementComponentProps } from './DashboardElementComponent.types';


export default interface DashbaordElementType<TElementProps>  {
  id: string,
  title: string,
  render: (props: DashboardElementComponentProps) => JSX.Element,
  props: TElementProps
}
