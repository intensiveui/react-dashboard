import useDashboard from '../../hooks/useDashboard';
import React, { FC } from 'react';
import DashboardContext from '../../contexts/DashbaordContext/DashboardContext';
import DashboardElementsGrid from '../DashboardElementsGrid/DashboardElementsGrid';
import { DashboardProps } from './Dashboard.types';

const Dashboard: FC<DashboardProps> = ({
  id,
  title,
  elements: initialElements,
  elementWrapper,
  rowUnits,
  children,
  editModeDefaultValue
}) => {
  const [elements, actions, settings] = useDashboard(
    initialElements,
    editModeDefaultValue
  );

  return (
    <DashboardContext.Provider
      value={{ id, elements, actions, elementWrapper, rowUnits, settings }}
    >
      {title}
      {children({
        elementsJsx: <DashboardElementsGrid />,
        actions: actions
      })}
    </DashboardContext.Provider>
  );
};

export default Dashboard;
