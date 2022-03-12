import React from "react";
import useDashboardElement from "../../../hooks/useDashboardElement";
import DashboardElementComponentType from "../../../types/DashboardElementComponent.types";
import { CustomDashboardActionsType, CustomDashboardElementProps, CustomDashboardElementsActionsType } from "../CustomConfig";

export interface NotesElementProps extends CustomDashboardElementProps {
}

const DashboardNotesElement : DashboardElementComponentType<NotesElementProps, CustomDashboardActionsType> = ({id}) => {
    const [element, actions] = useDashboardElement<NotesElementProps, CustomDashboardActionsType, CustomDashboardElementsActionsType>(id);
 
    return (
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <span style={{fontSize: 30, color: "crimson", marginBottom: 15}}>
          Notes
        </span>
        <div style={{fontSize: 18, color: "rgb(90, 90, 90)"}}>
          - The most sold model is: Opel Corsa
        </div>
        <div style={{fontSize: 18, color: "rgb(90, 90, 90)"}}>
        - Invest more in supporting the top 5 sold models
        </div>
      </div>
    );
  };

export default DashboardNotesElement;