import React from 'react';
import { Story, Meta } from '@storybook/react';
import Dashboard from '../components/Dashboard/Dashboard';
import { DashboardProps } from '../components/Dashboard/Dashboard.types';
import DashbaordElementCollectionType from '../types/DashbaordElementCollection.types';
import useDashboardElement from '../hooks/useDashboardElement';
import useDashboardSettings from '../hooks/useDashboardSettings';
import DashobardElementWrapperComponentProps from '../types/DashobardElementWrapperComponentProps.types';

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
    },
    layout: {
      w: 6
    }
  },
  {
    id: 'stats2',
    title: 'Statistics2',
    render: ({ id }) => {
      return <StatisticsCard id={id}></StatisticsCard>;
    },

    layout: {
      w: 2
    }
  }
];

const elementWrapper: React.FC<DashobardElementWrapperComponentProps> = ({
  id,
  children
}) => {
  const [element, actions] = useDashboardElement(id);
  const { editModeEnabled } = useDashboardSettings();

  return (
    <div
      style={{
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
      <h2>{element.title}</h2>
      {editModeEnabled && <button onClick={actions.delete}>Delete</button>}
      {children}
    </div>
  );
};

const Template: Story<DashboardProps> = (args) => {
  return (
    <div style={{ backgroundColor: '#f7f7f7', padding: 10 }}>
      <Dashboard
        {...args}
        title={'my dassh'}
        elements={initialElements}
        elementWrapper={elementWrapper}
        rowUnits={12}
        editModeDefaultValue={false}
      >
        {({ elementsJsx, actions }) => {
          const { addElement, toggleEditMode } = actions;
          return (
            <>
              {elementsJsx}
              <button
                onClick={() => {
                  addElement({
                    id: 'stats3',
                    title: 'Statistics3',
                    render: ({ id }) => {
                      return <StatisticsCard id={id}></StatisticsCard>;
                    },
                    layout: {
                      w: 4
                    }
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
