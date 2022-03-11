import DashboardSettingsType from '../../types/DasbhoardSettings.types';
import useDashboardContext from '../useDashboardContext';

type UseDashboardSettingsType = () => DashboardSettingsType;

const useDashboardSettings: UseDashboardSettingsType = () => {
  const { settings } = useDashboardContext();

  return settings;
};

export default useDashboardSettings;
