import React, { useEffect } from 'react';
import { Story, Meta } from '@storybook/react';
import Dashboard from '../components/Dashboard/Dashboard';
import { DashboardProps } from '../components/Dashboard/Dashboard.types';
import DashbaordElementCollectionType from '../types/DashbaordElementCollection.types';
import useDashboardElement from '../hooks/useDashboardElement';
import useDashboardSettings from '../hooks/useDashboardSettings';
import DashobardElementWrapperComponentProps from '../types/DashobardElementWrapperComponentProps.types';
import DefaultDashboardGrid from '../components/DefaultDashboardGrid/DefaultDashboardGrid';
import ResponsiveDashboardLayoutType from '../types/ResponsiveDashboardLayout.types';
import DashobardActionsType from '../types/DashobardActions.types.';
import { CustomActionType } from '../types';
//import useDashboardContext from '../hooks/useDashboardContext';

export default {
  title: 'Dashboard',
  component: Dashboard,
  argTypes: {}
} as Meta<typeof Dashboard>;

const StatisticsCard: React.FC<{ id: string }> = ({ id }) => {
  const [element] = useDashboardElement(id);
  return (
    <div>
      <span>Statistics Component</span>
      {element.id}: {element.title}
    </div>
  );
};

const initialElements: DashbaordElementCollectionType = [
  {
    id: 'stats',
    title: 'Statistics',
    render: ({ id }) => {
      return <StatisticsCard id={id}></StatisticsCard>;
    }
  },
  {
    id: 'stats2',
    title: 'Statistics2',
    render: ({ id }) => {
      return <StatisticsCard id={id}></StatisticsCard>;
    }
  }
];

const elementWrapper: React.FC<DashobardElementWrapperComponentProps> = ({
  id,
  children
}) => {
  const [elemen ,actions] = useDashboardElement(id);
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

const initEl: DashbaordElementCollectionType = [
  {
    id: 'stats',
    title: 'Statistics',
    render: ({ id }) => {
      return <StatisticsCard id={id}></StatisticsCard>;
    }
  },
  {
    id: 'stats2',
    title: 'Statistics',
    render: ({ id }) => {
      return <StatisticsCard id={id}></StatisticsCard>;
    }
  },
  {
    id: 'stats3',
    title: 'Statistics',
    render: ({ id }) => {
      return <StatisticsCard id={id}></StatisticsCard>;
    }
  },
  {
    id: 'stats4',
    title: 'Statistics',
    render: ({ id }) => {
      return <StatisticsCard id={id}></StatisticsCard>;
    }
  },
  {
    id: 'users',
    title: 'Statistics',
    render: ({ id }) => {
      return <StatisticsCard id={id}></StatisticsCard>;
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
//     console.log("mount")
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


interface CustomElementProps {
  isDisabled: boolean
}

interface CustomDashboardActionsType extends DashobardActionsType {
  disableElement: CustomActionType<CustomElementProps>
}

const Template: Story<DashboardProps<CustomElementProps, CustomDashboardActionsType>> = (args) => {
  return (
    <div style={{ backgroundColor: '#f7f7f7', padding: 10 }}>
      <Dashboard<CustomElementProps, CustomDashboardActionsType>
        {...args}
        title={'my dassh'}
        elements={initEl}
        layouts={initL}
        columnCount={16}
        editModeDefaultValue={false}
        elementWrapper={elementWrapper}
        //@ts-ignore
        actions={{
          disableElement: (event) => (elements, layouts) => {
            return [elements.map(t => ({...t, props: {...t.props, isDisabled: true } }) ), layouts]
          }
        }}
      >
        {({ id, elements, layouts, columnCount, actions, context }) => {
          const { addElement, toggleEditMode, disableElement } = actions;
          console.log("rendered")
          return (
            <> 
              <button
                onClick={() => {
                  addElement({
                    id: 'xyz',
                    title: 'xyz',
                    render: ({ id }) => {
                      return <StatisticsCard id={id}></StatisticsCard>;
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
              <DefaultDashboardGrid<CustomDashboardActionsType> context={context}/>
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
