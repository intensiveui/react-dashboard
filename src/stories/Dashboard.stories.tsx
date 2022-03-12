import React from 'react';
import { Story, Meta } from '@storybook/react';
import Dashboard from '../components/Dashboard/Dashboard';
import { DashboardProps } from '../components/Dashboard/Dashboard.types';
import DashbaordElementCollectionType from '../types/DashbaordElementCollection.types';
import useDashboardElement from '../hooks/useDashboardElement';
import useDashboardSettings from '../hooks/useDashboardSettings';
import DefaultDashboardGrid from '../components/DefaultDashboardGrid/DefaultDashboardGrid';
import ResponsiveDashboardLayoutType from '../types/ResponsiveDashboardLayout.types';
import DashboardElementComponentType from '../types/DashboardElementComponent.types';
import { CustomDashboardActionsType, CustomDashboardElementProps, CustomDashboardElementsActionsType } from './Dashboard/CustomConfig';
import ElementWrapper from './Dashboard/DashboardElementWrapper';
import DashboardStatisticsElement, { StatisticsElementProps } from './Dashboard/Elements/DashboardStatisticsElement';
import Button from './Dashboard/Elements/Button';
import DashboardNextGoalElement, { NextGoalElementProps } from './Dashboard/Elements/DashboardNextGoalElement';
import DashboardNotesElement from './Dashboard/Elements/DashboardNotesElement';
//import useDashboardContext from '../hooks/useDashboardContext';

export default {
  title: 'Dashboard',
  component: Dashboard,
  argTypes: {}
} as Meta<typeof Dashboard>;



const DashboardCard : DashboardElementComponentType<CustomDashboardElementProps, CustomDashboardActionsType> = ({id}) => {
  const [element, actions] = useDashboardElement<CustomDashboardElementProps, CustomDashboardActionsType, CustomDashboardElementsActionsType>(id);
  return (
    <div>
      <span>Statistics Component</span>
      {element.id}: {element.title}
      <button onClick={actions.toggleEnabled}>{element.props.isDisabled? "Enable": "Disable"}</button>
      {element.props.isDisabled && <div>disabled</div>}
    </div>
  );
};

const statsElements : DashbaordElementCollectionType<StatisticsElementProps> = [
  {
    id: 'sold-cars',
    title: 'Statistics',
    render: ({ id }) => {
      return <DashboardStatisticsElement id={id}/>;
    },
    props: {
      isDisabled: false,
      data: {
        value: '1000',
        label: "Cars Sold"
      }
    }
  },
  {
    id: 'new-customers',
    title: 'Statistics',
    render: ({ id }) => {
      return <DashboardStatisticsElement id={id}/>;
    },
    props: {
      isDisabled: false,
      data: {
        value: '90',
        label: "New Customers"
      }
    }
  },
  {
    id: 'new-models',
    title: 'Statistics',
    render: ({ id }) => {
      return <DashboardStatisticsElement id={id}/>;
    },
    props: {
      isDisabled: false,
      data: {
        value: '5',
        label: "New Models"
      }
    }
  },
]

const nextGoalElements : DashbaordElementCollectionType<NextGoalElementProps> = [
  {
    id: 'next-goal',
    title: 'Next Goal',
    render: ({ id }) => {
      return <DashboardNextGoalElement id={id}/>;
    },
    props: {
      isDisabled: false,
      data: {
        value: 'Sell 200 Units in the current month'
      }
    }
  }
] 

const initEl: DashbaordElementCollectionType<CustomDashboardElementProps> = [
  ...statsElements,
  ...nextGoalElements,
  {
    id: 'notes',
    title: 'Notes',
    render: ({ id }) => {
      return <DashboardNotesElement id={id}/>;
    },
    props: {
      isDisabled: false
    }
  }
];

const initL: ResponsiveDashboardLayoutType = {
  md: [
      {
        i: 'sold-cars',
        x: 0,
        y: 0,
        w: 4,
        h: 4
      },
      {
        i: 'new-customers',
        x: 4,
        y: 0,
        w: 4,
        h: 4
      },
      {
        i: 'new-models',
        x: 8,
        y: 0,
        w: 4,
        h: 4
      },
      {
        i: 'next-goal',
        x: 12,
        y: 0,
        w: 5,
        h: 6
      },
      {
        i: 'notes',
        x: 0,
        y: 5,
        w: 7,
        h: 6
      }
    ],
  sm: [
      {
        i: 'sold-cars',
        x: 0,
        y: 0,
        w: 6,
        h: 4
      },
      {
        i: 'new-customers',
        x: 4,
        y: 0,
        w: 6,
        h: 4
      },
      {
        i: 'new-models',
        x: 8,
        y: 0,
        w: 6,
        h: 4
      },
      {
        i: 'next-goal',
        x: 12,
        y: 0,
        w: 6,
        h: 12
      },
      {
        i: 'notes',
        x: 0,
        y: 5,
        w: 12,
        h: 4
      }
    ]
}   


const Template: Story<DashboardProps<CustomDashboardElementProps, CustomDashboardActionsType, CustomDashboardElementsActionsType>> = (args) => {
  return (
    <div style={{ backgroundColor: '#f7f7f7', padding: 10 }}>
      <Dashboard<CustomDashboardElementProps, CustomDashboardActionsType, CustomDashboardElementsActionsType>
        {...args}
        title={'my dassh'}
        elements={initEl}
        layouts={initL}
        editModeDefaultValue={false}
        customDashboardActions={{
          toggleElementEnabled: (event) => (elements, layouts) => {
            return [elements.map(t => ({...t, props: {...t.props, isDisabled: !t.props.isDisabled } }) ), layouts]
          }
        }}
        customElementActions={{
          toggleEnabled: (event) => (elemnet, layout) => {
            elemnet.props.isDisabled = !elemnet.props.isDisabled;
            return [elemnet, layout]
          }
        }}
      >
        {({ id, elements, layouts, actions, title, settings }) => {
          const { addElement, toggleEditMode, toggleElementEnabled } = actions;
          const { editModeEnabled } = settings;
      
          return (
            <> 
              <div style={{display: "flex", justifyContent: "center"}}>
                <Button
                  onClick={() => {
                    addElement({
                      id: 'xyz',
                      title: 'xyz',
                      render: ({ id }) => {
                        return <DashboardCard id={id}></DashboardCard>;
                      },
                      props: {
                        isDisabled: true
                      }
                    }, {
                      md: {
                          i: 'xyz',
                          x: 0,
                          y: 0,
                          w: 8,
                          h: 8
                      },
                      sm: {
                        i: 'xyz',
                        x: 0,
                        y: 0,
                        w: 12,
                        h: 12
                    },
                    });
                  }}
                >
                  Add Element
                </Button>
                <Button onClick={() => toggleEditMode()}>
                  {editModeEnabled ?  "Disable Edit Mode" : "Enable Edit Mode"}
                </Button>
                <Button
                  onClick={toggleElementEnabled}
                >Toggle All Elements Enabled
                </Button>
              </div>
              <DefaultDashboardGrid<CustomDashboardElementProps, CustomDashboardActionsType, CustomDashboardElementsActionsType>
                elementWrapper={ElementWrapper}
                columnCount={12}
                rowHeight={28}
                padding={10}
                fallbackLayoutScreenClassConfig={"md"}
              />
            </>
          );
        }}
      </Dashboard>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  primary: true,
  disabled: false,
  text: 'Primary'
};
