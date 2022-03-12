import React from "react";
import useDashboardElement from "../../../hooks/useDashboardElement";
import DashboardElementComponentType from "../../../types/DashboardElementComponent.types";
import { CustomDashboardActionsType, CustomDashboardElementProps, CustomDashboardElementsActionsType } from "../CustomConfig";

export interface NextGoalElementProps extends CustomDashboardElementProps {
  data: {
    value: string
  }
}

const DashboardNextGoalElement : DashboardElementComponentType<NextGoalElementProps, CustomDashboardActionsType> = ({id}) => {
    const [element, actions] = useDashboardElement<NextGoalElementProps, CustomDashboardActionsType, CustomDashboardElementsActionsType>(id);
    const {data} = element.props;
    const {value} = data;
    return (
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <span style={{fontSize: 30, color: "crimson", marginBottom: 15}}>
          Next Goal
        </span>
        <span style={{fontSize: 18, color: "rgb(90, 90, 90)"}}>
          {value}
        </span>
      </div>
    );
  };

export default DashboardNextGoalElement;