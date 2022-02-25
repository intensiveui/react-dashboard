import DashobardSettingsType from '../../types/DashobardSettings.types';
import useDashboardContext from '../useDashboardContext';

type UseDashboardSettingsType = () => DashobardSettingsType;

const useDashboardSettings: UseDashboardSettingsType = () => {
  const { settings } = useDashboardContext();

  return settings;
};

export default useDashboardSettings;
