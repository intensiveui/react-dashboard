import React from 'react';
import { Story, Meta } from '@storybook/react';
import Dashboard from '../components/Dashboard/Dashboard';
import { DashboardProps } from '../components/Dashboard/Dashboard.types';
import DashbaordElementCollectionType from '../types/DashbaordElementCollection.types';
import useDashboardElement from '../hooks/useDashboardElement';
import useDashboardSettings from '../hooks/useDashboardSettings';
import DashboardElementWrapperComponentProps from '../types/DashboardElementWrapperComponentProps.types';
import DefaultDashboardGrid from '../components/DefaultDashboardGrid/DefaultDashboardGrid';
import ResponsiveDashboardLayoutType from '../types/ResponsiveDashboardLayout.types';
import DashboardActionsType from '../types/DashboardActionsType';
import { CustomDashboardActionType, CustomDashboardElementActionType } from '../types';
import DashboardElementComponentType from '../types/DashboardElementComponent.types';
import DashboardElementActionsType from '../types/DashboardElementActions.types';
//import useDashboardContext from '../hooks/useDashboardContext';

export default {
  title: 'Dashboard',
  component: Dashboard,
  argTypes: {}
} as Meta<typeof Dashboard>;



interface CustomElementProps {
  isDisabled: boolean
}

interface CustomDashboardActionsType extends DashboardActionsType<CustomElementProps> {
  disableElement: CustomDashboardActionType<CustomElementProps>
}

interface CustomDashboardElementsActionsType extends DashboardElementActionsType<CustomElementProps> {
  toggleEnabled: CustomDashboardElementActionType<CustomElementProps>
}


const DashboardElementStatisticsCard : DashboardElementComponentType<CustomElementProps, CustomDashboardActionsType> = ({id}) => {
  const [element, actions] = useDashboardElement<CustomElementProps, CustomDashboardActionsType, CustomDashboardElementsActionsType>(id);
  return (
    <div>
      <span>Statistics Component</span>
      {element.id}: {element.title}
      <button onClick={actions.toggleEnabled}>{element.props.isDisabled? "Enable": "Disable"}</button>
      {element.props.isDisabled && <div>disabled</div>}
    </div>
  );
};

const elementWrapper: React.FC<DashboardElementWrapperComponentProps> = ({
  id,
  children
}) => {
  const [element ,actions] = useDashboardElement(id);
  //const [element, layout, actions] = useGridElement(id);
  const { editModeEnabled } = useDashboardSettings();
  //const {actions: dActions} = useDashboardContext();

  return (
    <div
      style={{
        width: "calc(100% - 20px)",
        height: "calc(100% - 20px)",
        padding: '10px',
        backgroundColor: 'white',
        borderRadius: 10,
        boxShadow: `0 1px 1px rgba(0,0,0,0.11), 
                            0 2px 2px rgba(0,0,0,0.11), 
                            0 4px 4px rgba(0,0,0,0.11), 
                            0 6px 8px rgba(0,0,0,0.11),
                            0 8px 16px rgba(0,0,0,0.11)`
      }}
    >
      {/* <h2>{element.title}</h2> */}
      {editModeEnabled && <button onClick={actions.delete}>Delete</button>}
      {children}
    </div>
  );
};

const initEl: DashbaordElementCollectionType<CustomElementProps> = [
  {
    id: 'stats',
    title: 'Statistics',
    render: ({ id }) => {
      return <DashboardElementStatisticsCard id={id}></DashboardElementStatisticsCard>;
    },
    props: {
      isDisabled: false
    }
  },
  {
    id: 'stats2',
    title: 'Statistics',
    render: ({ id }) => {
      return <DashboardElementStatisticsCard id={id}></DashboardElementStatisticsCard>;
    },
    props: {
      isDisabled: false
    }
  },
  {
    id: 'stats3',
    title: 'Statistics',
    render: ({ id }) => {
      return <DashboardElementStatisticsCard id={id}></DashboardElementStatisticsCard>;
    },
    props: {
      isDisabled: false
    }
  },
  {
    id: 'stats4',
    title: 'Statistics',
    render: ({ id }) => {
      return <DashboardElementStatisticsCard id={id}></DashboardElementStatisticsCard>;
    },
    props: {
      isDisabled: false
    }
  },
  {
    id: 'users',
    title: 'Statistics',
    render: ({ id }) => {
      return <DashboardElementStatisticsCard id={id}></DashboardElementStatisticsCard>;
    },
    props: {
      isDisabled: false
    }
  }
];

const initL: ResponsiveDashboardLayoutType = {
  md: [
      {
        i: 'stats',
        x: 0,
        y: 0,
        w: 4,
        h: 4
      },
      {
        i: 'stats2',
        x: 4,
        y: 0,
        w: 4,
        h: 4
      },
      {
        i: 'stats3',
        x: 8,
        y: 0,
        w: 4,
        h: 4
      },
      {
        i: 'stats4',
        x: 12,
        y: 0,
        w: 4,
        h: 4
      },
      {
        i: 'users',
        x: 0,
        y: 5,
        w: 8,
        h: 4
      }
    ],
  sm: [
      {
        i: 'stats',
        x: 0,
        y: 0,
        w: 6,
        h: 4
      },
      {
        i: 'stats2',
        x: 4,
        y: 0,
        w: 6,
        h: 4
      },
      {
        i: 'stats3',
        x: 8,
        y: 0,
        w: 6,
        h: 4
      },
      {
        i: 'stats4',
        x: 12,
        y: 0,
        w: 6,
        h: 4
      },
      {
        i: 'users',
        x: 0,
        y: 5,
        w: 12,
        h: 4
      }
    ]
}   


// const GridLayoutDashboardGrid : React.FC<DashboardGridProps> = ({id, elements, layouts, elementWrapper, columnCount, actions}) => {
//   useEffect(() => {
//     
//   }, [])

//   return (
//     <GridLayout
//         id={id}
//         elements={elements}
//         layouts={layouts}
//         elementWrapper={elementWrapper}
//         columnCount={columnCount}
//         isResizable={false}
//         isDraggable={false}
//       >
//         {({GridLayoutComponent, actions}) => {
//           return (
//             <>
//              {<GridLayoutComponent />}
//             </>
//           )
//         }}
//       </GridLayout>
//   )
// }

const Template: Story<DashboardProps<CustomElementProps, CustomDashboardActionsType, CustomDashboardElementsActionsType>> = (args) => {
  return (
    <div style={{ backgroundColor: '#f7f7f7', padding: 10 }}>
      <Dashboard<CustomElementProps, CustomDashboardActionsType, CustomDashboardElementsActionsType>
        {...args}
        title={'my dassh'}
        elements={initEl}
        layouts={initL}
        columnCount={16}
        editModeDefaultValue={false}
        elementWrapper={elementWrapper}
        customDashboardActions={{
          disableElement: (event) => (elements, layouts) => {
            return [elements.map(t => ({...t, props: {...t.props, isDisabled: true } }) ), layouts]
          }
        }}
        customElementActions={{
          toggleEnabled: (event) => (elemnet, layout) => {
            elemnet.props.isDisabled = !elemnet.props.isDisabled;
            return [elemnet, layout]
          }
        }}
      >
        {({ id, elements, layouts, columnCount, actions }) => {
          const { addElement, toggleEditMode, disableElement } = actions;
      
          return (
            <> 
              <button
                onClick={() => {
                  addElement({
                    id: 'xyz',
                    title: 'xyz',
                    render: ({ id }) => {
                      return <DashboardElementStatisticsCard id={id}></DashboardElementStatisticsCard>;
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
              
                {' '}
                Add element
              </button>
              <button onClick={() => toggleEditMode()}>
                {' '}
                Toggle Edit mode
              </button>
              <button
                onClick={disableElement}
              >Disable</button>
              <DefaultDashboardGrid/>
              {/* <GridLayoutDashboardGrid
                id={id}
                elements={elements}
                layouts={layouts}
                columnCount={columnCount}
                actions={actions}
                elementWrapper={elementWrapper}
              /> */}
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
