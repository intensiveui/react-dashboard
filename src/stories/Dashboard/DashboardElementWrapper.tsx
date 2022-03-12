import React from "react";
import useDashboardElement from "../../hooks/useDashboardElement";
import useDashboardSettings from "../../hooks/useDashboardSettings";
import DashboardElementWrapperComponentType from "../../types/DashboardElementWrapperComponent.types";
import { CustomDashboardActionsType, CustomDashboardElementProps, CustomDashboardElementsActionsType } from "./CustomConfig";

const ElementWrapper: DashboardElementWrapperComponentType<CustomDashboardElementProps, CustomDashboardActionsType, CustomDashboardElementsActionsType> = ({
    id,
    children
  }) => {
    const [element, actions] = useDashboardElement<CustomDashboardElementProps, CustomDashboardActionsType, CustomDashboardElementsActionsType>(id);
    const { editModeEnabled } = useDashboardSettings();

    return (
      <div
        style={{
          width: "calc(100% - 20px)",
          height: "calc(100% - 20px)",
          padding: '15px',
          backgroundColor: 'white',
          borderRadius: 10,
          boxShadow: `0 1px 1px rgba(0,0,0,0.11), 
                              0 2px 2px rgba(0,0,0,0.11), 
                              0 4px 4px rgba(0,0,0,0.11), 
                              0 6px 8px rgba(0,0,0,0.11),
                              0 8px 16px rgba(0,0,0,0.11)`,
        }}
      >
        <div style={{display: "flex", alignItems: "center", height: "20px"}}>
            <div style={{flex: 1}}>

            </div>
            {
                    editModeEnabled &&
                    <div>
                    <span onClick={actions.toggleEnabled} 
                        style={{cursor: "pointer", border: "solid 1px crimson", padding: '2px 5px', borderRadius: 10, fontSize: 13, color: "crimson"}}
                    >{!element.props.isDisabled ? "Enable" : "Disable"}</span>
                    </div>
            }
        </div> 
        {children}
      </div>
    );
  };

export default ElementWrapper;  