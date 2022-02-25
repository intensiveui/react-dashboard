import { useContext } from 'react';
import DashboardContext from '../../contexts/DashbaordContext/DashboardContext';

const useDashboardContext = () => {
  return useContext(DashboardContext);
};

export default useDashboardContext;
