import React from 'react';
import { Story, Meta } from '@storybook/react';
import GridLayout from '../../components/GridLayout/GridLayout';
import GridElementCollectionType from '../../types/GridElementCollection.types';
import GridElementLayoutCollectionType from '../../types/GridElementLayoutCollection.types';
import GridElementComponentProps from '../../types/GridElementComponentProps.types';
import { GridLayoutProps } from '../../components/GridLayout/GridLayout.types';
import useGridElement from '../../hooks/useGridElement';

export default {
  title: 'GridLayout',
  component: GridLayout,
  argTypes: {}
} as Meta<typeof GridLayout>;

const StatisticsCard: React.FC<{ id: string }> = ({ id }) => {
  const [element, layout, actions] = useGridElement(id);
  return (
    <div>
      {element.id} : {layout.x}
      <button onClick={() => actions.delete({id: "stats"})}>Delete</button>
    </div>
  );
};

const initialElements: GridElementCollectionType = [
  {
    id: 'stats',
    render: ({ id }) => {
      return <StatisticsCard id={id}></StatisticsCard>;
    }
  },
  {
    id: 'stats2',
    render: ({ id }) => {
      return <StatisticsCard id={id}></StatisticsCard>;
    }
  },
  {
    id: 'stats3',
    render: ({ id }) => {
      return <StatisticsCard id={id}></StatisticsCard>;
    }
  },
  {
    id: 'stats4',
    render: ({ id }) => {
      return <StatisticsCard id={id}></StatisticsCard>;
    }
  },
  {
    id: 'users',
    render: ({ id }) => {
      return <StatisticsCard id={id}></StatisticsCard>;
    }
  }
];

const initialLayouts: GridElementLayoutCollectionType = [
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
];

const elementWrapper: React.FC<GridElementComponentProps> = ({
  id,
  children
}) => {
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
                            0 8px 16px rgba(0,0,0,0.11)`,
        width: "calc(100% - 20px)",
        height: "calc(100% - 20px)"
      }}
    >
      {children}
    </div>
  );
};

  const Template: Story<GridLayoutProps> = (args) => {
  return (
    <div style={{ backgroundColor: '#f7f7f7', padding: 10 }}>
      <GridLayout
        {...args}
        elements={initialElements}
        layouts={initialLayouts}
        elementWrapper={elementWrapper}
        columnCount={16}
        isResizable={false}
        isDraggable={false}
      >
        {({GridLayoutComponent, actions}) => {
          return (
            <>
            <button onClick={() => actions.deleteElement({id: "stats"})}>Delete</button>
            {<GridLayoutComponent />}
            </>
          )
        }}
      </GridLayout>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
};
