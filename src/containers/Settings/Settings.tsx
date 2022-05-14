import classes from './Settings.module.scss';
import { MdPhoto, MdOutlinePassword } from 'react-icons/md';
import SettingsItem from '../../components/SettingsItem/SettingsItem';
const Settings: React.FC = () => {
  return (
    <div className={classes.settings}>
      <SettingsItem onClick={() => console.log('algo')} label="Change avatar" >
        <MdPhoto />
      </SettingsItem>
      <SettingsItem onClick={() => {}} label="Change password">
        <MdOutlinePassword />
      </SettingsItem>
    </div>
  );
};

export default Settings;