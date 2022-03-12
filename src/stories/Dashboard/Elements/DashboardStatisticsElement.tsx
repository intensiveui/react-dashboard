import React from "react";
import useDashboardElement from "../../../hooks/useDashboardElement";
import DashboardElementComponentType from "../../../types/DashboardElementComponent.types";
import { CustomDashboardActionsType, CustomDashboardElementProps, CustomDashboardElementsActionsType } from "../CustomConfig";

export interface StatisticsElementProps extends CustomDashboardElementProps {
  data: {
    value: string,
    label: string
  }
}

const DashboardStatisticsElement : DashboardElementComponentType<StatisticsElementProps, CustomDashboardActionsType> = ({id}) => {
    const [element, actions] = useDashboardElement<StatisticsElementProps, CustomDashboardActionsType, CustomDashboardElementsActionsType>(id);
    const {data} = element.props;
    const {label, value} = data;
    return (
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <span style={{fontSize: 30, color: "crimson"}}>{value}</span>
        <span style={{fontSize: 15, color: "rgb(110, 110, 110)"}}>{label}</span>
      </div>
    );
  };

export default DashboardStatisticsElement;